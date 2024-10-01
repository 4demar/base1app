import { StyleSheet, Text, View } from 'react-native';

export default function InfoApp() {
    return (
        <View style={styles.container}>
            <Text>InfoApp</Text>
            {/* <Modal
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
            </Modal> */}
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
