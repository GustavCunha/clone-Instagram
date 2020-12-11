import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { Box, Container, HeaderContainer } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Header({iconLeft, iconRight, children}){

    const navigation = useNavigation();

    function handleToProfile(){
        navigation.navigate('Profile');
    }

    return(
        <Container>
            <HeaderContainer>
                <Box>
                    <Feather name={iconLeft} size={24} color="#000" />  
                </Box> 
                {/* <Image source={Logo}/> */}
                {children}
                <Box>
                    <TouchableOpacity onPress={handleToProfile}>
                        <Feather name={iconRight} size={24} color="#000" />  
                    </TouchableOpacity>
                </Box> 
            </HeaderContainer>
        </Container>
    );
}