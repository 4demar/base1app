import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Abertura() {

    async function btnIniciarCorrida() {
        await AsyncStorage.setItem('TelaInicial', 'Corrida')
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