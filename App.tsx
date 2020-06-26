
import React, { 
  useState,
  useEffect 
} from 'react';
import { RecoilRoot } from 'recoil';

import { StyleSheet, Text, View } from 'react-native';

import loadFontsAsync from './src/theme/fonts';
import BottomNavigationBar from './src/screens/navigation';

const App = () => {
  /*
    Sei que poderia ter usado o redux ou o mobx, mas fui de Recoil pois gostei muito dele.
  */

  const [isReady, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      await loadFontsAsync().then(() => {
        setReady(true);
      });
    })(); 
  }, []);

  return (
    <>
      {isReady === true && (
        <RecoilRoot>
          <BottomNavigationBar />
        </RecoilRoot>
      )}
    </>
  )
}

export default App;