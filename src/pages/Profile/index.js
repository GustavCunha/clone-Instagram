import React, { useEffect, useState } from 'react';
import {FontAwesome} from '@expo/vector-icons';
import { Avatar, Button, Container, Name } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile(){
    const [dados, setDados] = useState({});

    useEffect(()=>{
        async function loadData(){
            const result = await AsyncStorage.getItem('@CloneInsta:user');
            // console.log(JSON.parse(result));
            setDados(JSON.parse(result));
        }

        loadData();
    },[]);
    

    return(
        <Container>
            <Avatar source={{uri: dados.avatar}} resizeMode="cover"/>
            <Name>{dados.name}</Name>
        </Container>
    );
}