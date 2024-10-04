import React, { useEffect } from 'react';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { DrawerParamList } from '../interface/navigation';
import { DrawerNavigationProp } from '@react-navigation/drawer';

// Definindo o tipo correto dos parâmetros da rota
type NavigateProp = RouteProp<DrawerParamList, 'FinalizarCorrida'>;

const FinalizarCorridaScreen = () => {
    const navigation = useNavigation<NavigateProp>();
    const { setModalFinalizar } = navigation.params; // Obtendo o parâmetro da rota com o tipo correto

    useEffect(() => {
        setModalFinalizar(true); // Abre o modal assim que a tela é acessada
    }, [setModalFinalizar]);

    return null; // Não renderiza nada, apenas abre o modal
};

export default FinalizarCorridaScreen;
