import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type props = {
    setIniciarCorrida: (tela: string) => void
}

export default function Abertura({ setIniciarCorrida }: props) {

    async function btnIniciarCorrida() {
        await AsyncStorage.setItem('TelaInicial', 'CalcTaxas')
        setIniciarCorrida('CalcTaxas')
    }

    return (
        <View style={style.container}>
            <Text>Abertura</Text>
            <View style={style.button}>
                <TouchableOpacity
                    style={style.button}
                    onPress={btnIniciarCorrida}
                >
                    <Text style={style.textButton}>Iniciar Corrida</Text>
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
        width: 150,
        borderRadius: 4,
        backgroundColor: '#4b26e0',
        alignItems: 'center', //Alinhamento do texto
        padding: 8,
        marginTop: 10,
    },
    textButton: {
        color: '#fff',
        fontSize: 20,
    }
});