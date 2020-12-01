import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';
import Feed from '../pages/Feed';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/Header';
import SignUp from '../pages/SignUp';

const {Navigator, Screen} = createStackNavigator();

export default function AppRoutes(){
    return(
        <Navigator
            screenOptions={{
                headerTitle: () => <Header /> ,
                headerStyle: {
                    backgroundColor: '#F5F5F5',
                    height: 70,
                }
            }}
        >
            <Screen 
                name="Feed"
                component={Feed}
            />

            {/* <Screen
                name="SignUp"
                component={SignUp}
                options={{headerShown: false}}
            /> */}
        </Navigator>
    );
}