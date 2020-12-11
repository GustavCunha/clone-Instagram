import React from 'react';
import {FontAwesome} from '@expo/vector-icons';
import { Avatar, Button, Container, Name } from './styles';

export default function Profile(){
    return(
        <Container>
            {/* <Avatar></Avatar>  */}
            <Name>Carlos</Name>
        </Container>
    );
}