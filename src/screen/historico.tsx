import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Button, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerParamList } from '../interface/navigation';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons'
import PopupMenu from '../components/popupMenu';
import { useTableProdutos } from '../database/useTableProduto';

export default function Historico() {

    const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

    const { InserirDadosMocados } = useTableProdutos()

    const handleInsertData = async () => {
        const db = await InserirDadosMocados();
    };

    return (
        <View style={styles.container}>
            <Button title="Inserir Produtos Mocados" onPress={handleInsertData} />
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