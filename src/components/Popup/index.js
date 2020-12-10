import React, { useContext, useState } from 'react';
import {FontAwesome} from '@expo/vector-icons';
import { Button, ButtonText, Container } from './styles';
import AuthContext from '../../context/auth';
import AsyncStorage from '@react-native-community/async-storage';

export default function Popup(){
    const {logOff} = useContext(AuthContext);
    const [dados, setDados] = useState({});

    async function getUsuario(){

        const result = await AsyncStorage.getItem('@CloneInsta:user');

        console.log(JSON.parse(result));
        setDados(JSON.parse(result));
    }

    function toogleUser(){
        getUsuario();
    }

    function sair(){
        logOff();
    }

    return(
        <Container>
            <Button onPress={toogleUser}>
                <FontAwesome name="user-circle" size={20} color="#333"/>
                <ButtonText>{dados}</ButtonText>
            </Button>

            <Button onPress={sair}>
                <FontAwesome name="sign-out" size={20} color="#333"/>
                <ButtonText>Logoff</ButtonText>
            </Button>
        </Container>
    );
}