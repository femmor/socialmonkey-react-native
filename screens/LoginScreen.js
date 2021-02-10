import React, { useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

// Components
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import {Facebook} from 'expo';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <ScrollView contentContainerStyle={[styles.container]}>
            <Image
                source={require("../assets/images/social-media.png")}
                style={styles.logo}
            />
            <Text style={styles.text}>Social Monkey</Text>
            {/* Email Input */}
            <FormInput
                labelValue={email}
                onChangeText={userEmail => setEmail(userEmail)}
                placeholderText="Email Address"
                iconType="user"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoCapitalize="none"
                autoCorrect={false}
            />
            {/* Password Input */}
            <FormInput
                labelValue={password}
                onChangeText={userPassword => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                textContentType="password"
                secureTextEntry={true}
            />
            {/* Form Button */}
            <FormButton
                buttonTitle="Sign In"
                onPress={() => alert("Sign in Clicked")}
            />
            {/* Forgot Password */}
            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Social Button Facebook */}
            <SocialButton
                buttonTitle="Sign in with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => {}}
            />

            {/* Social Button Facebook */}
            <SocialButton
                buttonTitle="Sign in with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => {}}
            />

            {/* Create account */}
            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>Don't have an account? Create account</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover'
    },
    text: {
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f'
    },
    navButton: {
        marginTop: 15
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
    }
});

export default LoginScreen
