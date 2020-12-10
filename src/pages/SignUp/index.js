import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text } from 'react-native';
import Divider from 'react-native-divider';
import Logo from '../../assets/logo.png';
import { 
    Button,
    Container, 
    Input, 
    TextFooter, 
    Title,
    Footer,
    Label,
    Link,
    TextLink, 
    Bold
} from './styles';
import API from '../../services/api';

export default function SignUp(){

    const [disabledBtn, setDisabledBtn] = useState(true);
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    function handleLogin(){
        navigation.navigate('Login');
    }

    async function handleSignUp(){
        if(name.length === 0 || user.length === 0 || password.length === 0){
            alert('Preencha usuário e/ou senha para continuar!');
        }else{
            const data = {
                name,
                user,
                password
            };
            try {
                await API.post('/user/signup', data);
                alert('Cadastro Realizado');
                handleLogin();
            } catch (error) {
                console.log(error);
                alert('Erro ao cadastrar!');
            }
        }
    }

    function onChangePassword(value){
        if(value.length === 0){
            setDisabledBtn(true);
        }else{
            setDisabledBtn(false);
        }
        setPassword(value);
        // console.log(disabledBtn);
    }

    return(
        <Container>
            <Image source={Logo} style={{width: 180, height:65}} resizeMode="contain" />

            <Title>Cadastre-se para ver fotos e vídeos dos seus amigos</Title>

            <Divider color="#8e8e8e" orientation="center"> 
                Preencha os campos
            </Divider>

            <Input 
                placeholder="Nome Completo"
                value={name}
                onChangeText={setName}
            />

            <Input 
                placeholder="Nome de usuário"
                value={user}
                onChangeText={setUser}
            />

            <Input 
                placeholder="Senha"
                value={password}
                onChangeText={onChangePassword}
                secureTextEntry
                autoCapitalize="none"
            />

            <Button 
                style={{backgroundColor: disabledBtn ? '#b2dffc' : '#4169e1'}} 
                onPress={handleSignUp}
            >
                <Text style={{color: '#FFF'}}>Cadastre-se</Text>
            </Button>

            <TextFooter>
                Ao se cadastrar, você concorda com nossos <Bold>Termos, 
                Política de Dados e Política de Cookies.</Bold>
            </TextFooter>

            <Footer>
                <Label>Já tem uma conta?</Label>
                <Link onPress={handleLogin} activeOpacity={0.7}>
                    <TextLink>Faça Login.</TextLink>
                </Link>
            </Footer>
        </Container>
    );
}