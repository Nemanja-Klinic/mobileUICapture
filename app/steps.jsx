
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

const StepsScreen = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Follow these steps:</Text>
            <Text style={styles.steps}>1. Do this</Text>
            <Text style={styles.steps}>2. Do that</Text>
            <Text style={styles.steps}>3. Finish up</Text>
            <Button
                title="Go to Amazon"
                onPress={() => router.push('/webview')}
            />
        </View>
    );
};

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
    steps: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default StepsScreen;
