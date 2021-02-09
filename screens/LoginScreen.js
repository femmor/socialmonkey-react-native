import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native';
const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>LoginScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20
    }
});

export default LoginScreen
