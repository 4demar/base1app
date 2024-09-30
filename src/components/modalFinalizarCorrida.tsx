import React from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerParamList } from '../interface/navigation';
import { DrawerNavigationProp } from '@react-navigation/drawer';

interface FinishRaceModalProps {
    visible: boolean;
    onClose: () => void;
}

const ModalFinalizarCorrida: React.FC<FinishRaceModalProps> = ({ visible, onClose }) => {
    const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

    const finalizarCorrida = () => {
        onClose();
        navigation.navigate('Principal'); // Navegar para a tela "Principal"

        if (navigation && 'closeDrawer' in navigation) {
            navigation.closeDrawer(); // Usamos "as any" para contornar a checagem de tipo
        }
    };

    return (
        <Modal transparent={true} visible={visible} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text>Finalizar a Corrida</Text>
                    <Button title="Confirmar" onPress={finalizarCorrida} />
                    <Button title="Cancelar" onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
});
