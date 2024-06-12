import { View, Text, StyleSheet, Button } from 'react-native'
import { useRouter } from 'expo-router';
import React from 'react'

export default function AppRouter() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the Instruction Screen</Text>
            <Button
                title="Go to Steps"
                onPress={() => router.push('/steps')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
});