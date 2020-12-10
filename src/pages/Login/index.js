import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { Image, Text} from 'react-native';
import Divider from 'react-native-divider';

import Logo from '../../assets/logo.png';
import AuthContext from '../../context/auth';
import { 
    Container, 
    Button, 
    Footer, 
    Link, 
    TextLink, 
    Label, 
    Input, 
    InputContainer
} from './styles';

export default function Login(){

    const {signed, logIn} = useContext(AuthContext);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [disabledBtn, setDisabledBtn] = useState(true);

    const navigation = useNavigation();

    function handleSignUp(){
        navigation.navigate('SignUp');
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
            <Image source={Logo} style={{width: 180, height:65}} resizeMode="contain"/>
            <InputContainer>
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
                    onChangeText={onChangePassword}
                    secureTextEntry
                />

                <Button style={{backgroundColor: disabledBtn ? '#b2dffc' : '#4169e1'}} onPress={handleLogin}>
                    <Text style={{color: '#FFF'}}>Entrar</Text>
                </Button>

            </InputContainer>

            <Divider color="#8e8e8e" orientation="center"> 
                OU
            </Divider>

            <Link activeOpacity={0.7}> 
                <TextLink bgColor='#385185'>Esqueceu a senha?</TextLink>
            </Link>

            <Footer>
                <Label>Não tem uma conta?</Label>
                <Link onPress={handleSignUp} activeOpacity={0.7}>
                    <TextLink bgColor='#888'>Cadastre-se.</TextLink>
                </Link>
            </Footer>
        </Container>
    );
}