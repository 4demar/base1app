import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Principal from '../app/principal';
import Historico from '../app/historico';
import InfoApp from '../app/infoApp';
import { createStackNavigator } from '@react-navigation/stack';
import { Cores } from '../styles/globalStyles';

const Stack = createStackNavigator();

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
                <ActivityIndicator size="large" color={Cores.roxo} />
                <Text>Carregando...</Text>
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Principal"
                    component={Principal}
                    options={{
                        title: 'Principal',
                    }}
                />
                <Stack.Screen
                    name="Historico"
                    component={Historico}
                    options={{
                        title: 'Principal',
                    }}
                />
            </Stack.Navigator>

        </NavigationContainer>
    );
}
