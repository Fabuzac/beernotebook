import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BeerListScreen from '../screens/BeerListScreen';
import { Ionicons } from '@expo/vector-icons';
import { BeerListStack, HomeStack, ProfileStack } from './StackNavigator';

const Tab = createBottomTabNavigator();

// Ici le StackNavigator surcharge les routes du tabNavigator.
function BottomTabNavigator() {

  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'ios-home-outline';
          }

          if (route.name === 'Beer') {
            iconName = 'ios-beer-outline';
          }

          if (route.name === 'Profile') {
            iconName = 'ios-person-outline';              
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
      > 
      <Tab.Screen name="Beer" component={BeerListStack} />
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />  
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;