import { View, Image, Text, StyleSheet } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { DrawerSceneWrapper } from "../components/drawerSceneWrapper";

export default function Index() {

    return (
        <DrawerSceneWrapper>
            <View style={style.container}>
                <View style={style.header}>
                    <Image
                        source={{ uri: 'http://github.com/4demar.png' }}
                        style={style.image}
                    />
                    <View style={style.boasVindas}>
                        <Text style={style.subTitulo}>Seja bem-vindo</Text>
                        <Text style={style.titulo}>Ademar Junior</Text>
                    </View>

                    <DrawerToggleButton />
                </View>
            </View>
        </DrawerSceneWrapper>
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
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 12
    },
    boasVindas: {
        flex: 1,
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    subTitulo: {
        fontSize: 14,
    }

})