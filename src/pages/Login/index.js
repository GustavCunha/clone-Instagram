import React from 'react';
import { Image, Text} from 'react-native';

import Logo from '../../assets/logo.png';
import { 
    Container, 
    Button, 
    Footer, 
    Link, 
    TextLink, 
    Label, 
    Input 
} from './styles';

export default function Login(){
    return(
        <Container>
            <Image source={Logo} style={{width: 170, height:65}} resizeMode="contain"/>

            <Input
                autoCapitalize="none"
                placeholder="Usuário"
            />
            <Input
                autoCapitalize="none"
                placeholder="Senha"
                secureTextEntry
            />

            <Button>
                <Text style={{color: '#FFF'}}>Login</Text>
            </Button>

            <Footer>
                <Label>Don't have an account?</Label>
                <Link>
                    <TextLink>Sign Up.</TextLink>
                </Link>
            </Footer>
        </Container>
    );
}