import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import API from '../services/api';

const AuthContext = createContext({
    signed: Boolean,
    logIn: Function,
    logOff: Function
});

export const AuthProvider = ({children}) => {
    
    const [logged, setLogged] = useState(false);

    let value = '';

    useEffect(()=>{
        AsyncStorage.getItem('@CloneInsta:user').then((resultado) => {
            value = resultado;
            if(value !== null || value.length > 0){
                setLogged(true);
            }
        })
    },[]);
    
    async function logIn(usuario, senha){
        const response = await API.post('/user/login', {
            user: usuario,
            password: senha
        });
        console.log(response.data);
        
        await AsyncStorage.setItem('@CloneInsta:user', JSON.stringify(response.data));
        await AsyncStorage.setItem('@CloneInsta:userID', JSON.stringify(response.data._id));
        setLogged(true);
        return response.data;
    }

    async function logOff(){
        await AsyncStorage.removeItem('@CloneInsta:user');
        await AsyncStorage.removeItem('@CloneInsta:userID');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{signed: logged, logIn, logOff}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;