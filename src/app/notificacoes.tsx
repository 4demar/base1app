import { View, Image, Text, StyleSheet } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function Notificacoes() {

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.titulo}>Notificações</Text>
                <DrawerToggleButton />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        paddingTop: 32,
        backgroundColor: '#fff'

    },
    header: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold'
    }

})