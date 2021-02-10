import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const Skip = ({...props}) => ( 
    <TouchableOpacity
        style={{
            marginHorizontal: 20
        }}
        {...props}
    >
        <Text style={styles.done}>SKIP</Text>
    </TouchableOpacity>
)

const Dots = ({ selected }) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)'

    return (
        <View
            style={{
                width: 10,
                height: 10,
                borderRadius: 20,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    )
}

const Next = ({ ...props }) => (
    <TouchableOpacity
        style={{
            marginHorizontal: 20
        }}
        {...props}
    >
        <Text style={styles.done}>NEXT</Text>
    </TouchableOpacity>
)

const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{
            marginHorizontal: 20
        }}
        {...props}
    >
        <Text style={styles.done}>DONE</Text>
    </TouchableOpacity>
)

const OnBoardingScreen = ({ navigation }) => {
    return (
    <Onboarding 
        NextButtonComponent={Next}
        SkipButtonComponent={Skip}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip = {
            () => navigation.replace('Login')
        }
        onDone = {
            () => navigation.navigate('Login')
        }
        pages = {
            [{
                    backgroundColor: '#fdffbc',
                    image: <Image source={ require('../assets/images/image1.png') }/>,
                    title: 'The Future of Remote',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#c7ffd8',
                    image: <Image source={ require('../assets/images/image2.png') }/>,
                    title: 'Work in the Comfort of Your Home',
                    subtitle: 'You can even work right in your pyjamas.',
                },
                {
                    backgroundColor: '#98ded9',
                    image: <Image source={ require('../assets/images/image3.png') }/>,
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
    done: {
        fontSize: 16,
    }
});


export default OnBoardingScreen