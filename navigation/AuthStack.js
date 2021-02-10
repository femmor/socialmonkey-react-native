import React, { useEffect, useState } from 'react';
import {View} from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import AsyncStorage from "@react-native-community/async-storage"
import FontAwesome from 'react-native-vector-icons/FontAwesome'

// Components
import OnboardingScreen from "../screens//OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { StackActions } from '@react-navigation/native';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import { Text } from 'react-native';

const Stack = createStackNavigator()

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null)
  let routename

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched')
    .then(value => {
      if(value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true')
        setIsFirstLaunch(true)
      } else {
        setIsFirstLaunch(false)
      }
    })
  }, [])

  if (isFirstLaunch === null) {
    return null
  } else if (isFirstLaunch === true) {
    routename = 'Onboarding'
  } else {
    routename = 'Login'
  }

  return (
    <Stack.Navigator
        initialRouteName={routename}
    >
      <Stack.Screen 
        name="Onboarding"
        component={OnboardingScreen}
        options={{
            header: () => null
        }}
      />

    <Stack.Screen 
        name="Login"
        component={LoginScreen}
        options={{
            header: () => null
        }}
    />

    <Stack.Screen 
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={({navigation}) => ({
            title: 'Forgot Password',
            headerStyle: {
                backgroundColor: '#f9fafd',
                shadowColor: '#f9fafd',
                elevation: 0
            },
            headerLeft: () => (
                <View 
                    style={{
                        marginLeft: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <FontAwesome.Button
                        name="long-arrow-left"
                        size={25}
                        backgroundColor='#f9fafd'
                        color="#2e64e5"
                        onPress={() => navigation.navigate('Login')}
                    />
                    <Text style={{
                      marginLeft: -10
                    }}>Login</Text>
                </View>
            )
        })}
      />

    <Stack.Screen 
        name="Signup"
        component={SignUpScreen}
        options={({navigation}) => ({
            title: '',
            headerStyle: {
                backgroundColor: '#f9fafd',
                shadowColor: '#f9fafd',
                elevation: 0
            },
            headerLeft: () => (
                <View 
                    style={{
                        marginLeft: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <FontAwesome.Button
                        name="long-arrow-left"
                        size={25}
                        backgroundColor='#f9fafd'
                        color="#2e64e5"
                        onPress={() => navigation.navigate('Login')}
                    />
                    <Text style={{
                      marginLeft: -10
                    }}>Login</Text>
                </View>
            )
        })}
      />
    </Stack.Navigator>
  )
}

export default AuthStack