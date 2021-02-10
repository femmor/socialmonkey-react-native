import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native';
const SignUpScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up Screen</Text>
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

export default SignUpScreen
