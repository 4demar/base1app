import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, StyleSheet, Text, Button } from "react-native";

export function CalcularTaxas() {

    async function btnFinalizarCorrida() {
        await AsyncStorage.setItem('TelaInicial', 'Principal')
    }

    return (
        <View style={style.container}>
            <Text>Corrida</Text>
            <View style={style.button}>
                <Button title='Finalizar Corrida' onPress={btnFinalizarCorrida} />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        margin: 20,
        padding: 10,
        width: 100,
        height: 22,
    },
});