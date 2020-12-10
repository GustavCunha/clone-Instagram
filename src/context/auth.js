import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../services/api';

const AuthContext = createContext({
    signed: Boolean,
    logIn: Function,
    logOff: Function
});

export const AuthProvider = ({children}) => {
    
    const [logged, setLogged] = useState(false);
    
    async function logIn(usuario, senha){
        const response = await API.post('/user/login', {
            user: usuario,
            password: senha
        });

        await AsyncStorage.setItem('@CloneInsta:user', JSON.stringify(response.data));
        setLogged(true);
        return response.data;
    }

    async function logOff(){
        await AsyncStorage.removeItem('@CloneInsta:user');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{signed: logged, logIn, logOff}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;