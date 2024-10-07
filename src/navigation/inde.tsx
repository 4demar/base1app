import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Principal from '../screen/principal';
import Historico from '../screen/historico';
import InfoApp from '../screen/infoApp';
import FinalizarCorridaScreen from './FinalizaCorridaScreen';
import ModalFinalizarCorrida from '../components/modalFinalizarCorrida';

const Drawer = createDrawerNavigator();

export default function RouteNavigator() {
    const [telaInicial, setTelaInicial] = useState('');
    const [modalFinalizar, setModalFinalizar] = useState(false);

    useEffect(() => {
        const validarTelaInicial = async () => {
            const route = await AsyncStorage.getItem('TelaInicial');
            if (route !== null)
                setTelaInicial(route)
        };
        validarTelaInicial();
    }, []);

    console.log(telaInicial)

    if (telaInicial === undefined || telaInicial === '') {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color='#4a28ba' />
                <Text>Carregando...</Text>
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName={telaInicial}
                screenOptions={{
                    headerTitleAlign: 'center'
                }}
            >
                <Drawer.Screen
                    name="Principal"
                    component={Principal}
                    options={{
                        drawerLabel: 'Principal',
                        // headerShown: telaInicial === 'Principal' ? false : true
                    }}
                />

                <Drawer.Screen name="Historico" component={Historico}
                    options={{
                        headerRight: () => <AntDesign name='filter' onPress={() => { }} />
                    }}
                />

                <Drawer.Screen name="InfoApp" component={InfoApp}
                    options={{
                        drawerLabel: 'Informações',
                    }}
                />

                {/* Botão para abrir o modal no Drawer */}
                {telaInicial === 'CalcTaxas' && (
                    <Drawer.Screen
                        name="FinalizarCorrida"
                        component={FinalizarCorridaScreen}
                        options={{
                            drawerIcon: () => <AntDesign name="closecircle" size={24} color="red" />,
                            drawerLabel: () => (
                                <Text style={{ color: 'red' }}
                                    onPress={() => setModalFinalizar(true)} // Abrindo o modal ao clicar no botão
                                >
                                    Finalizar Corrida
                                </Text>
                            ),
                        }}
                        initialParams={{ setModalFinalizar }} // Passando o parâmetro via rota
                    />
                )}
            </Drawer.Navigator>

            {/* Modal de Finalização de Corrida */}
            <ModalFinalizarCorrida
                visible={modalFinalizar}
                onClose={() => setModalFinalizar(false)}
            />
        </NavigationContainer>
    );
}
