import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';

import Logo from '../../assets/logo.png';
import { Box, Container } from './styles';

export default function Header(){

    return(
        <Container>
            <Box>
                <Feather name="camera-off" size={24} color="#000" />  
            </Box> 
            <Image source={Logo}/>
            <Box>
                <TouchableOpacity>
                    <Feather name="user" size={24} color="#000" />  
                </TouchableOpacity>
            </Box> 
        </Container>
    );
}