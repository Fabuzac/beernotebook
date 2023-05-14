// Ceci est la page principale de l'application BeerHub, une application qui permet de classer les bières par catégorie et de les noter. en fonction de leur goût.
// avec un design simple et minimaliste, elle permet de naviguer facilement entre les différentes catégories de bières.
// des couleurs blanche et jaune sont utilisées pour le design de l'application.
// initialise simplement la barre inférieure de navigation, quelque icone et le titre de l'application. sur une seule page, sans importation de composant.
// Code moi, integralement la page principale ici, seulement en donnees statiques, sans appel a une API. avec un design simple et minimaliste, et des icones
// integre une barre de navigation en bas de l'application, avec 4 icones, et un titre.

import { Text, View, StyleSheet, Button, Pressable } from 'react-native' ;
import Icon from 'react-native-vector-icons/FontAwesome';
import PrimaryButton from '../components/PrimaryButton';
import { createStackNavigator } from '@react-navigation/stack';
import IsoScreen from './IsoScreen';

const Stack = createStackNavigator();

// Page home de l'application
function BeerHome({ navigation }) {

  function pressHandler() {

    console.log('Pressed red button !');

    navigation.navigate('IsoScreen');
  }

  return (
    
    <View style={styles.container}>
      <View style={styles.header}>       
        <Text style={styles.title}>BeerNote</Text>
      </View>

      <View style={styles.switcher}>
        <PrimaryButton onPress={pressHandler}>Press me
          <Stack.Navigator>
            <Stack.Screen name="IsoScreen" component={IsoScreen}/>
          </Stack.Navigator>        
        </PrimaryButton>        
      </View>
    </View>
  );
};

export default BeerHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
  },
  footer: {
    flexDirection: "row",
    flex: 0,
    backgroundColor: "#FFC107",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 1,
  },
  icon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }, 
  text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
  },
  button: {

  },
  buttonPressed: {
    backgroundColor: "#ccc",
    opacity: 0.5,
  },
  pressMe: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fefefe",
  },
  buttonPressedMe: {
    backgroundColor: "#666",
  },
  switcher: {
    flex: 1,
  },
});