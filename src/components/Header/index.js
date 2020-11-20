import React from 'react';
import { Image } from 'react-native';
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
                <Feather name="user" size={24} color="#000" />  
            </Box> 
        </Container>
    );
}