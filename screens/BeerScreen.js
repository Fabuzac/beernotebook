import { Text, View, StyleSheet, Pressable } from 'react-native' ;

function BeerScreen({  }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>       
        <Text style={styles.title}>Beer Screen List</Text>
      </View>
    </View>
  );
};

export default BeerScreen;

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

});
