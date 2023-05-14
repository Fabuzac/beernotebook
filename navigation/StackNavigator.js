// Ici on determine le comportement de chaque tabs
// Chaque fonction represente une page et a l'interieur on definit les routes

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import BeerListScreen from "../screens/BeerListScreen";
import ProfileScreen from "../screens/ProfileScreen";
import IsoScreen from "../screens/IsoScreen";
import AddBeerScreen from "../screens/AddBeerScreen";

const Stack = createStackNavigator();

// HomeStack fait reference a Home.js et heberge un lien vers BeerListScreen.js
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="BeerListScreen" component={BeerListScreen} />
      <Stack.Screen name="IsoScreen" component={IsoScreen} />
    </Stack.Navigator>
  );
};

// ProfileStack fait reference a Profile.js et heberge un lien vers IsoScreen.js
function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="IsoScreen" component={IsoScreen} />
      <Stack.Screen name="AddBeerScreen" component={AddBeerScreen} />
    </Stack.Navigator>
  );
};

// ProfileStack fait reference a Profile.js et heberge un lien vers IsoScreen.js
function BeerListStack() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="BeerListScreen" component={BeerListScreen} />
      <Stack.Screen name="AddBeerScreen" component={AddBeerScreen} />
    </Stack.Navigator>
  );
};

const screenOptionStyle = {
 
};

export { HomeStack, ProfileStack, BeerListStack };