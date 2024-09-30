import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerParamList } from '../interface/navigation';
import ScreenPrincipal from '../screen/principal';
import Historico from '../screen/historico';
import InfoApp from '../screen/infoApp';
import ConfigApp from '../screen/configApp';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'
import FinalizarCorrida from './drawerFinalizarCorrida';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <Drawer.Navigator initialRouteName={'Principal'}>
            <Drawer.Screen name='Principal' component={ScreenPrincipal}
                options={{
                    headerRight: () => (
                        <Ionicons name='options' onPress={() => { }} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Historico"
                component={Historico}
                options={{
                    headerRight: () => (
                        <Ionicons name='filter' onPress={() => { }} />
                    ),
                }}
            />

            <Drawer.Screen
                name="FinalizarCorrida"
                component={() => <FinalizarCorrida setModalVisible={setModalVisible} />}
                options={{
                    drawerIcon: () => (
                        <Ionicons name="close" size={24} color="red" />
                    ),
                    drawerLabel: () => (
                        <Text
                            style={{ color: 'red' }}
                            onPress={() => setModalVisible(true)}
                        >
                            Finalizar Corrida
                        </Text>
                    ),
                }}
            />

            <Drawer.Screen name='InfoApp' component={InfoApp} />
            <Drawer.Screen name='ConfigApp' component={ConfigApp} />
        </Drawer.Navigator>
    )
}