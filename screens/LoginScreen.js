import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native';
const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>LoginScreen</Text>
            <Button
                title="Back to Onboarding"
                onPress={() => navigation.navigate('Onboarding')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default LoginScreen
