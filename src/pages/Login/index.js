import React, { useContext, useState } from 'react';
import { Image, Text} from 'react-native';

import Logo from '../../assets/logo.png';
import AuthContext from '../../context/auth';
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

    const {signed, logIn} = useContext(AuthContext);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(){
        if(user.length === 0 || password.length === 0){
            alert('Preencha usuário e/ou senha para continuar!');
        }else{
            try {
                await logIn(user, password);
                console.log(signed);
            } catch (error) {
                console.log(error);
                alert('Usuário e/ou senha incorretos!');
            }
        }
    }

    return(
        <Container>
            <Image source={Logo} style={{width: 170, height:65}} resizeMode="contain"/>

            <Input
                autoCapitalize="none"
                placeholder="Usuário"
                value={user}
                onChangeText={setUser}
            />
            <Input
                autoCapitalize="none"
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Button onPress={handleLogin}>
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