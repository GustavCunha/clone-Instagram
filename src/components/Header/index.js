import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';

import Logo from '../../assets/logo.png';
import { Box, Container } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Header(){

    const navigation = useNavigation();

    function handleSignUp(){
        navigation.navigate('SignUp');
    }

    return(
        <Container>
            <Box>
                <Feather name="camera-off" size={24} color="#000" />  
            </Box> 
            <Image source={Logo}/>
            <Box>
                <TouchableOpacity onPress={handleSignUp}>
                    <Feather name="user" size={24} color="#000" />  
                </TouchableOpacity>
            </Box> 
        </Container>
    );
}