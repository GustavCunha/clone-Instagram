import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const {Navigator, Screen} = createStackNavigator();

export default function AuthRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Login" component={Login}/>
            <Screen name="SignUp" component={SignUp}/>
        </Navigator>
    );
}