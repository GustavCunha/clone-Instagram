import React, { useContext } from 'react';
import { Feather } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity } from 'react-native';

import Header from '../components/Header';

import Feed from '../pages/Feed';
import Comment from '../pages/Comments';
import Like from '../pages/Likes';
import Profile from '../pages/Profile';

import AuthContext from '../context/auth';

import Logo from '../assets/logo.png';

const { Navigator, Screen } = createStackNavigator();

export default function AppRoutes(){
  const {logOff} = useContext(AuthContext);

  return(
    <Navigator>
      <Screen 
        name="Feed"
        component={Feed}
        options={{
          headerTitle: () => (
            <Header iconLeft="camera-off" iconRight="user">
              <Image source={Logo} />
            </Header> 
          ),
          headerStyle: {
            backgroundColor: '#F5F5F5',
            height: 95,
          }
        }}
      />
      <Screen
        name="Comment"
        component={Comment}
      />
      <Screen
        name="Likes"
        component={Like}
      />

      <Screen
        name="Profile"
        component={Profile}
        options={{
          headerRight: () => (
            <TouchableOpacity style={{marginRight: 5}} onPress={logOff}>
              <Feather name="log-out" size={24} />
            </TouchableOpacity>
          )
        }}
      />
    </Navigator>
  );
}