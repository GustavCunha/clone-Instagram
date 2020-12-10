import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { Box, Container, HeaderContainer } from './styles';
import Popup from '../Popup';

export default function Header({iconLeft, iconRight, children}){

    const [popup, setPopup] = useState(false);

    function tooglePopup(){
        if(popup){
            setPopup(false)
        }else{
            setPopup(true);
        }
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
                    <TouchableOpacity onPress={tooglePopup}>
                        <Feather name={iconRight} size={24} color="#000" />  
                    </TouchableOpacity>
                </Box> 
            </HeaderContainer>

            {popup && (
                <Popup />
            )}
        </Container>
    );
}