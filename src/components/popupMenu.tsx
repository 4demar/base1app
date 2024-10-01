import React, { useState, useRef } from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    Animated,
    StyleSheet,
    Dimensions,
} from 'react-native';

const { height } = Dimensions.get('window');

const PopupMenu: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(height)).current;

    // Função para abrir o menu com animação
    const openMenu = () => {
        setVisible(true);
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    // Função para fechar o menu com animação
    const closeMenu = () => {
        Animated.timing(slideAnim, {
            toValue: height,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setVisible(false);
        });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={openMenu}>
                <Text style={styles.buttonText}>Abrir Menu</Text>
            </TouchableOpacity>

            <Modal transparent visible={visible} animationType="fade">
                <TouchableOpacity style={styles.overlay} onPress={closeMenu}>
                    <Animated.View
                        style={[styles.menuContainer, { transform: [{ translateY: slideAnim }] }]}>
                        <View style={styles.menuItem}>
                            <Text style={styles.menuText}>Opção 1</Text>
                        </View>
                        <View style={styles.menuItem}>
                            <Text style={styles.menuText}>Opção 2</Text>
                        </View>
                        <View style={styles.menuItem}>
                            <Text style={styles.menuText}>Opção 3</Text>
                        </View>
                    </Animated.View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 15,
        backgroundColor: '#1E90FF',
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    menuContainer: {
        backgroundColor: '#FFF',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 10,
    },
    menuItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    menuText: {
        fontSize: 18,
    },
});

export default PopupMenu;