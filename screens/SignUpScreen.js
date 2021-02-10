import React, { useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

// Components
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';

const SignUpScreen = ({navigation}) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    return (
        <ScrollView contentContainerStyle={[styles.container]}>
            <Text style={styles.text}>Create an account</Text>
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
            {/* Confirm Password Input */}
            <FormInput
                labelValue={confirmPassword}
                onChangeText={userPassword => setConfirmPassword(userPassword)}
                placeholderText="Confirm Password"
                iconType="lock"
                textContentType="password"
                secureTextEntry={true}
            />


            {/* Form Button */}
            <FormButton
                buttonTitle="Sign Up"
                onPress={() => alert("Sign Up Clicked")}
            />

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>By registering, you confirm that you accept our </Text> 
                 <TouchableOpacity onPress={() => alert('Terms clicked')}><Text style={[styles.color_textPrivate, {color: "#e88832"}]}>Terms of service </Text> 
                </TouchableOpacity> 
                 <Text style={styles.color_textPrivate}>and </Text> 
                <TouchableOpacity onPress={() => alert('Privacy clicked')} style={[styles.color_textPrivate, {color: "#e88832"}]}>
                <Text style={[styles.color_textPrivate, {color: "#e88832"}]} >Privacy Policy</Text>
                </TouchableOpacity>
            </View>

            {/* Social Button Facebook */}
            <SocialButton
                buttonTitle="Sign up with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => {}}
            />

            {/* Social Button Facebook */}
            <SocialButton
                buttonTitle="Sign up with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => {}}
            />

            {/* Create account */}
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>Have an account already? Sign In</Text>
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
    text: {
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f'
    },
    navButton: {
        marginTop: 15
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        color: 'grey'
    }
});

export default SignUpScreen
