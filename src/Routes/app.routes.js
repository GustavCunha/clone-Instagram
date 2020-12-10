import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Feed from '../pages/Feed';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/Header';
import Comment from '../pages/Comments';
import { Image, Text } from 'react-native';
import Logo from '../assets/logo.png';

const { Navigator, Screen } = createStackNavigator();

export default function AppRoutes(){
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
    </Navigator>
  );
}