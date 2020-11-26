import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import AuthContext from '../context/auth';

export default function Routes(){
    const {signed} = useContext(AuthContext);
    console.log(signed);

    return signed ? <AppRoutes/> : <AuthRoutes />    
}