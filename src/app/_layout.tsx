import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer'
import { Feather } from '@expo/vector-icons'

export default function Layout() {

    return (
        <GestureHandlerRootView>
            <Drawer screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: 'transparent',
                drawerInactiveBackgroundColor: 'transparent',
                drawerInactiveTintColor: '#727d9B',
                drawerActiveTintColor: '#fff',
                drawerHideStatusBarOnOpen: true,
                overlayColor: 'transparent',
                drawerStyle: {
                    backgroundColor: '#1d1f25',
                    paddingTop: 32,
                    width: '50%'
                },
                drawerLabelStyle: { marginLeft: -24 },
                sceneContainerStyle: {
                    backgroundColor: '#1d1f25',
                }
            }} >
                <Drawer.Screen
                    name='index'
                    options={{
                        drawerLabel: 'Inicio',
                        drawerIcon: ({ color, size }) => <Feather name="home" size={20} color={color} />,
                    }} />


                <Drawer.Screen
                    name='index'
                    options={{
                        drawerLabel: 'Notificação',
                        drawerIcon: ({ color, size }) => <Feather name="bell" size={20} color={color} />
                    }} />


            </Drawer>
        </GestureHandlerRootView>
    )
}
