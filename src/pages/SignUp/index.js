import React from 'react';
import { Image, Text } from 'react-native';
import Divider from 'react-native-divider';
import Logo from '../../assets/logo.png';
import { 
    Button,
    Container, Input, TextFooter, Title, 
} from './styles';

export default function SignUp(){

    return(
        <Container>
            <Image source={Logo} style={{width: 170, height:65}} resizeMode="contain" />

            <Title>Cadastre-se para ver fotos e vídeos dos seus amigos</Title>

            <Divider color="#8e8ea1" orientation="center"> 
                OU 
            </Divider>

            <Input 
                placeholder="Nome Completo"
            />

            <Input 
                placeholder="Nome de usuário"
            />

            <Input 
                placeholder="Senha"
            />

            <Button disabled>
                <Text style={{color: '#FFF'}}>Cadastre-se</Text>
            </Button>

            <TextFooter>
                Ao se cadastrar, você concorda com nossos Termos, 
                Política de Dados e Política de Cookies.
            </TextFooter>
        </Container>
    );
}