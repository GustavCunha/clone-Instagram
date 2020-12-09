import React, { useContext } from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import AuthContext from '../context/auth';

export default function Routes(){
    const {signed} = useContext(AuthContext);
    console.log(signed);

    // return <AppRoutes />
    return signed ? <AppRoutes/> : <AuthRoutes />    
}