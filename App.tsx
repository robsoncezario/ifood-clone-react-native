
import React, { 
  useState,
  useEffect 
} from 'react';
import { RecoilRoot } from 'recoil';
import { Provider as PaperProvider } from 'react-native-paper';

import { StyleSheet, Text, View } from 'react-native';

import loadFontsAsync from './src/theme/fonts';
import BottomNavigationBar from './src/screens/navigation';

const App = () => {
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
          <PaperProvider>
            <BottomNavigationBar />
          </PaperProvider>
        </RecoilRoot>
      )}
    </>
  )
}

export default App;