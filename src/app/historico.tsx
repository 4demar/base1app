import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Button, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerParamList } from '../interface/navigation';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons'
import PopupMenu from '../components/popupMenu';

export default function Historico() {

    const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

    return (
        <View style={styles.container}>
            <Text>Historico</Text>
        </View>
    );
}

// Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});