import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';

import Logo from '../../assets/logo.png';
import { Box, Container } from './styles';

export default function Header({iconLeft, iconRight, children}){

    return(
        <Container>
            <Box>
                <Feather name={iconLeft} size={24} color="#000" />  
            </Box> 
            {/* <Image source={Logo}/> */}
            {children}
            <Box>
                <TouchableOpacity>
                    <Feather name={iconRight} size={24} color="#000" />  
                </TouchableOpacity>
            </Box> 
        </Container>
    );
}