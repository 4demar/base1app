import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerParamList } from '../interface/navigation';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons'


export default function Historico() {
    const [count, setCount] = useState(0);
    const [modalVisible, setModalVisible] = useState(false); // Estado do modal
    const [selectedOption, setSelectedOption] = useState<string | null>(null); // Estado da opção selecionada

    const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

    // useEffect(() => {
    //     // Use `setOptions` to atualizar o botão que especificamos anteriormente
    //     // Agora o botão inclui um manipulador `onPress` para atualizar o contador
    //     navigation.setOptions({
    //         headerRight: () => (
    //             <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
    //         ),
    //     });
    // }, [navigation]);

    const openModal = () => {
        setModalVisible(true);
    };

    // Função para fechar o modal e salvar a opção selecionada
    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        setModalVisible(false);
    };


    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <Ionicons name='options' onPress={openModal} size={24} style={{ marginRight: 12 }} />
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text>Count: {count}</Text>
            <Text>Selected Option: {selectedOption}</Text> {/* Exibir opção selecionada */}

            {/* Modal para exibir opções */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Configurações</Text>
                        <TouchableOpacity
                            style={styles.optionButton}
                            onPress={() => handleOptionSelect('Opção 1')}
                        >
                            <Text>Opção 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.optionButton}
                            onPress={() => handleOptionSelect('Opção 2')}
                        >
                            <Text>Opção 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.optionButton}
                            onPress={() => handleOptionSelect('Opção 3')}
                        >
                            <Text>Opção 3</Text>
                        </TouchableOpacity>
                        <Button title="Fechar" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        marginBottom: 20,
    },
    optionButton: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
});