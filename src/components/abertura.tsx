import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, StyleSheet, Text, View } from 'react-native';

type props = {
    setIniciarCorrida: (tela: string) => void
}

export default function Abertura({ setIniciarCorrida }: props) {

    async function btnIniciarCorrida() {
        await AsyncStorage.setItem('TelaInicial', 'CalcTaxas')
        setIniciarCorrida('Principal')
    }

    return (
        <View>
            <Text>Abertura</Text>
            <View style={style.button}>
                <Button
                    title='Iniciar Corrida'
                    onPress={btnIniciarCorrida}
                />
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