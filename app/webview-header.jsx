import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from 'expo-router';

const Header = ({ title }) => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };
    const handleFinishTask = () => {

    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleGoBack} style={[styles.button]}>
                <Text style={[styles.text, styles.blueText]}>{'\u25C0'} Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button]} onPress={handleFinishTask}>
                <Text style={[styles.text, styles.redText]}>Finish {'\u25B6'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    button: {
        padding: 10,
        borderRadius: 5,
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    blueText: {
        color: 'blue',
    },
    redText: {
        color: 'red',
    },
});

export default Header;
