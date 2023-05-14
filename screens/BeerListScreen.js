import { Text, View, StyleSheet, Button, Pressable, FlatList, SafeAreaView  } from 'react-native' ;
import Icon from 'react-native-vector-icons/FontAwesome';
import AddBeerButton from '../components/AddBeerButton';
import { ScrollView } from 'react-native-gesture-handler';

const persons = [
  {
	id: "1",
	name: "Earnest Green",
  },
  {
	id: "2",
	name: "Winston Orn",
  },
  {
	id: "3",
	name: "Carlton Collins",
  },
  {
	id: "4",
	name: "Malcolm Labadie",
  },
  {
	id: "5",
	name: "Michelle Dare",
  },
  {
	id: "6",
	name: "Carlton Zieme",
  },
  {
	id: "7",
	name: "Jessie Dickinson",
  },
  {
	id: "8",
	name: "Julian Gulgowski",
  },
  {
	id: "9",
	name: "Ellen Veum",
  },
  {
	id: "10",
	name: "Lorena Rice",
  },
  {
	id: "11",
	name: "Carlton Zieme",
  },
  {
	id: "12",
	name: "Jessie Dickinson",
  },
  {
	id: "13",
	name: "Julian Gulgowski",
  },
  {
	id: "14",
	name: "Ellen Veum",
  },
  {
	id: "15",
	name: "Lorena Rice",
  },
];

function BeerListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>       
        <Text style={styles.title}>Beer Screen List</Text>
        
        <SafeAreaView style={styles.containerAreaView}>
          <FlatList 
            data={persons}
            renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>

      {/*
      Button add beer
      <View style={styles.center}>  
        <AddBeerButton onPress={() => navigation.navigate("AddBeerScreen")}>         
        </AddBeerButton>
      </View>  
      */}
    </View>
  );
};

export default BeerListScreen;

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
  item: {
    padding: 15,
    fontSize: 15,
    marginTop: 0,
  },
  containerAreaView: {
    padding: 5,
    flex: 1,
  }

});
