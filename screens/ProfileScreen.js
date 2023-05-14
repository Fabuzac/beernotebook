import { Text, View, StyleSheet, Pressable, Button } from 'react-native' ;

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>       
        <Text style={styles.title}>ProfileScreen</Text>
        <View style={styles.center}>
          <Button
            title="Go to Iso Screen"
            onPress={() => navigation.navigate("IsoScreen")}
          />        
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

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
