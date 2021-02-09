import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { Image, StyleSheet } from 'react-native';

const OnBoardingScreen = ({ navigation }) => {
    return ( <
        Onboarding onSkip = {
            () => navigation.navigate('Login')
        }
        onDone = {
            () => navigation.navigate('Login')
        }
        pages = {
            [{
                    backgroundColor: '#fdffbc',
                    image: < Image source = { require('../assets/images/image1.png') }
                    />,
                    title: 'The Future of Remote',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#c7ffd8',
                    image: < Image source = { require('../assets/images/image2.png') }
                    />,
                    title: 'Work in the Comfort of Your Home',
                    subtitle: 'You can even work right in your pyjamas.',
                },
                {
                    backgroundColor: '#98ded9',
                    image: < Image source = { require('../assets/images/image3.png') }
                    />,
                    title: 'The Future is Now',
                    subtitle: "Beautiful, isn't it?",
                },
            ]
        }
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default OnBoardingScreen