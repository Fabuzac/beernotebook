import { View, Text, Pressable, StyleSheet } from 'react-native';

function BarcodeScannerButton({ onPress }) {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable 
        style={ ({pressed}) =>
          pressed 
          ? [styles.buttonInnerContainer, styles.pressed] 
          : styles.buttonInnerContainer
        } 
        onPress={ onPress } 
        android_ripple={ {color: '#ffffff' }}        
      >
        <Text style={styles.buttonText}>Camera</Text>
      </Pressable>
    </View>
  );
}

export default BarcodeScannerButton;

const styles = StyleSheet.create({

  buttonOuterContainer: {
    borderRadius: 28,
    margin: 3,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#F48020',    
    paddingVertical: 10,
    paddingHorizontal: 25,
    elevation: 2,
    height: 60,
    width: 130,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 28,
    marginTop: 50
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75,
  }
});