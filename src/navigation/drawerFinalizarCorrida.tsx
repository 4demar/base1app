// src/screens/FinalizarCorrida.tsx
import React, { useEffect } from 'react';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

interface FinalizarCorridaProps {
    setModalVisible: (visible: boolean) => void;
}

const FinalizarCorrida: React.FC<FinalizarCorridaProps> = ({ setModalVisible }) => {
    const navigation = useNavigation<DrawerNavigationProp<any>>();

    // Quando o componente for montado, o modal será exibido
    useEffect(() => {
        setModalVisible(true);
        // Fechar o drawer, se estiver aberto
        navigation.closeDrawer();
    }, [navigation, setModalVisible]);

    return null;
};

export default FinalizarCorrida;
