
import React, { 
  useState,
  useEffect 
} from 'react';
import { RecoilRoot } from 'recoil';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import loadFontsAsync from './src/theme/fonts';

const App = () => {
  /*
    Sei que poderia ter usado o redux ou o mobx, mas fui de Recoil pois gostei muito dele.
  */

  const [isReady, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      await loadFontsAsync();
      setReady(true);
    })(); 
  }, []);

  return (
    <>
      {isReady === true && (
        <RecoilRoot>
          <View style={styles.container}>
            <Text style={styles.title}>iFood, inicio</Text>
            <StatusBar style="auto" />
          </View>
        </RecoilRoot>
      )}
    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'SulSans-Bold',
    fontSize: 40,
    color: 'Black'
  }
});
