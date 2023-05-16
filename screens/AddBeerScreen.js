import { Text, View, StyleSheet, Pressable, Modal, Image, TextInput, Button } from 'react-native' ;
import {useState, useContext} from 'react';
import { FavoritesContext } from '../store/context/favorites-context';

function AddBeerScreen(props) {
  const favoriteMealCtx = useContext(FavoritesContext);

  console.log(favoriteMealCtx);

  // const mealId = 1;

  // const mealIsFavorite = favoriteMealCtx.ids.includes(mealId);

  // console.log(mealIsFavorite);

  const [newBeer, setNewBeer] = useState('');
  
  function goalInputHandler(enteredText) {
    setNewBeer(enteredText);
  }

  function addGoalHandler() {
    console.log('Pressed');

    // if(mealIsFavorite) {
    //   favoriteMealCtx.removeFavorite(mealId);
    // } else {
    //   favoriteMealCtx.addFavorite(mealId);
    // }

    // props.onAddGoal(newBeer);
    // setNewBeer('');
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>       
        <Text style={styles.title}>NEW BEER</Text>
        
          <View style={styles.inputContainer}>
            <Image 
              style={styles.image} 
              source={require('../assets/favicon.png')} 
            />
            <TextInput 
              style={styles.textInput} 
              placeholder='Register a new beer' 
              onChangeText={goalInputHandler}
              value={newBeer}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title='addGoal' onPress={addGoalHandler} color="#b180f0" />
              </View>
              <View style={styles.button}>
                <Button title='Cancel' onPress={props.onCancel} color="#f31282" />
              </View>
            </View>
          </View>

          {/* { 
            newBeer.map((beer) => {
              return (
                <View>
                  <Text style={styles.item}>{beer}</Text>
                </View>
              );
            })
          } */}

          <Text>{newBeer}</Text>

      </View>
    </View>
  );
};

export default AddBeerScreen;

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
  textInput: {
    backgroundColor: "#ffffff",
  },
  item: {

  }
});
