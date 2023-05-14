import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BeerHome from './screens/BeerHome';
import BeerScreen from './screens/BeerScreen';
import Profile from './screens/Profile';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

// Centralisation de l'application
export default function App() {

  return (
    <>
      <StatusBar style="dark" />

      <NavigationContainer style={styles.footer}>
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
          })}
        > 
            <Tab.Screen name="Beer" component={BeerScreen} />
            <Tab.Screen name="Home" component={BeerHome} />
            <Tab.Screen name="Profile" component={Profile} />  
        </Tab.Navigator>
      </NavigationContainer>
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