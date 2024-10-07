import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


type props = {
    setFinalizarCorrida: (tela: string) => void
}

export default function Corrida({ setFinalizarCorrida }: props) {

    async function btnFinalizarCorrida() {
        await AsyncStorage.setItem('TelaInicial', 'Principal')
        setFinalizarCorrida('Principal')
    }

    return (
        <View style={style.container}>
            <Text>Corrida...</Text>
            <View style={style.button}>
                <TouchableOpacity
                    style={style.button}
                    onPress={btnFinalizarCorrida}
                >
                    <Text style={style.textButton}>Finalizar Corrida</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center', //Alinhamento do texto
    },
    button: {
        width: 120,
        borderRadius: 4,
        backgroundColor: '#4b26e0',
        alignItems: 'center', //Alinhamento do texto
        padding: 8,
        marginTop: 10,
    },
    textButton: {
        color: '#fff'
    }
});