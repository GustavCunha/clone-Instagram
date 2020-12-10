import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { Box, Container, HeaderContainer } from './styles';

export default function Header({iconLeft, iconRight, children}){

    return(
        <Container>
            <HeaderContainer>
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
            </HeaderContainer>
        </Container>
    );
}