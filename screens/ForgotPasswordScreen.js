import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const ForgotPasswordScreen = () => {
    return (
        <ScrollView contentContainerStyle={[styles.container]}>
            <Text>Forgot Password</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default ForgotPasswordScreen
