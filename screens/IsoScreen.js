import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from "axios"

export default function Camera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const [query, setQuery] = useState([]);

  const [productScanned, setProductScanned] = useState([]);
  const [brandProduct, setBrandProduct] = useState([]);
  const [barCode, setBarCode] = useState([]);
  const [statusProductScanned, setStatusProductScanned ] = useState([]);


  // useEffect(() => {
  //   const getBarCodeScannerPermissions = async () => {
  //     const { status } = await BarCodeScanner.requestPermissionsAsync();
  //     setHasPermission(status === 'granted');
  //   };

  //   getBarCodeScannerPermissions();
  // }, []);

  // TODO: envoyer le Data(code scanned) dans le state query
  // avant qu'il ne soit appeler dans le get AXIOS


  // TODO: Etape 1: attendre que cette fonction soit utilisee
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    setQuery(data)
    

     // useEffect(() => {
      
    // })
    //Request
    // TODO: Etape 2: une fois handleBarCodeScanned utilisee, envoyer la requette fetchData
    const baseURL = "https://world.openfoodfacts.org/api/v0/product/";

    // https://www.google.fr/search?q=3263280102179
  
    axios.get(`${baseURL+query+".json"}`)

    .then(response => {
      
      setProductScanned(response.data)
      setBrandProduct(response.data.product.brands)
      setBarCode(response.data.product.code);
      setStatusProductScanned(response.data.status);
      
      // ingredients_text_debug
      // manufacturing_places
    })       
  
    .catch(error => {
      console.log(error.response)
    })
    

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
};

// if(productScanned.length < 1 || productScanned == undefined){
//   console.log(productScanned);
// }

if(brandProduct.length > 0){
  console.log(brandProduct);
}



// console.log("ESPACE");

// console.log(brandProduct);
// console.log(brandProduct);
// console.log(barCode);
// console.log(statusProductScanned);

// Mnemotechnique pour recevoir les donnees dans l'ordre
// const getFruits = [
//   Promise.resolve("apple"),
//   Promise.resolve("banana"),
//   Promise.resolve("orange"),
// ]
// async function logFruits() {
//   for await (const fruit of getFruits) {
//     console.log(fruit);
//   }
// }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
