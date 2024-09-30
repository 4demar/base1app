import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './drawerNavigator';
import Principal from '../screen/principal';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackParamList } from '../interface/navigation';

const Stack = createStackNavigator<StackParamList>()

export default function RootNavigation() {
    const [initialRoute, setInitialRoute] = useState<'Principal' | 'DrawerNavigator' | null>(null);

    useEffect(() => {
        const checkStorage = async () => {
            try {
                const value = await AsyncStorage.getItem('TelaInicial'); //busca item pela chave(Key)
                setInitialRoute(value !== '' ? 'Principal' : 'DrawerNavigator');
            } catch (error) {
                setInitialRoute('Principal')
                console.error('Error accessing AsyncStorage:', error);
            }
        };
        checkStorage();
    }, []);

    if (initialRoute === null) {
        return null; // Ou uma tela de loading enquanto a verificação é feita
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'DrawerNavigator'}>
                <Stack.Screen name='Principal' component={Principal} />
                <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}