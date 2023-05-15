import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import FavoritesContextProvider from './store/context/favorites-context';

// Centralisation de l'application
export default function App() {

  return (
    <>
      <StatusBar style="dark" />

      <FavoritesContextProvider>
        <NavigationContainer style={styles.footer}>
          <BottomTabNavigator />
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

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
});