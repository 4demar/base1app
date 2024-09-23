import { StyleSheet, Text, View } from 'react-native';
import Abertura from '../components/abertura'
import Corrida from '../components/corrida';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Principal() {
    const [initialRoute, setInitialRoute] = useState<string | null>(null);

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
        <View style={styles.container}>
            {initialRoute
                ? <Abertura />
                : <Corrida />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
