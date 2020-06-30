
import React, { 
  useState,
  useEffect 
} from 'react';
import { RecoilRoot } from 'recoil';

import loadFontsAsync from './src/theme/fonts';
import BottomNavigationBar from './src/screens/navigation';
import { SafeAreaView } from 'react-native';

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
          <SafeAreaView style={{flex: 1}}>
            <BottomNavigationBar />
          </SafeAreaView>
        </RecoilRoot>
      )}
    </>
  )
}

export default App;