import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, StyleSheet, Text, View } from 'react-native';


type props = {
    setFinalizarCorrida: (tela: string) => void
}

export default function Corrida({ setFinalizarCorrida }: props) {

    async function btnFinalizarCorrida() {
        await AsyncStorage.setItem('TelaInicial', 'Principal')
        setFinalizarCorrida('Principal')
    }

    return (
        <View>
            <Text>Corrida</Text>
            <View style={style.button}>
                <Button title='Finalizar Corrida' onPress={btnFinalizarCorrida} />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    button: {
        margin: 20,
        padding: 10,
        width: 100,
        height: 22,
    },
});