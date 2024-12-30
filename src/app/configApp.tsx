import { StyleSheet, Text, View } from 'react-native';

export default function ConfigApp() {
    return (
        <View style={styles.container}>
            <Text>ConfigApp</Text>
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
