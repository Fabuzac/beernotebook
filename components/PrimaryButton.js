import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ onPress }) {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable 
        style={ ({pressed}) =>
          pressed 
          ? [styles.buttonInnerContainer, styles.pressed] 
          : styles.buttonInnerContainer
        } 
        onPress={ onPress } 
        android_ripple={ {color: '#640233' }}
      >
        <Text style={styles.buttonText}>Go to Beer Screen</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({

  buttonOuterContainer: {
    borderRadius: 28,
    margin: 3,
    overflow: 'hidden',
  },

  buttonInnerContainer: {
    backgroundColor: '#fff',    
    paddingVertical: 8,
    paddingHorizontal: 5,
    elevation: 2,
  },

  buttonText: {
    color: '#660233',
    textAlign: 'center',
  },

  pressed: {
    opacity: 0.75,
  }

});