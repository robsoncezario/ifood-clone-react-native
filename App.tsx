
import React, { 
  useState,
  useEffect 
} from 'react';
import { RecoilRoot } from 'recoil';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client';

import loadFontsAsync from './src/theme/fonts';
import BottomNavigationBar from './src/screens/navigation';

const client = new ApolloClient({
  uri: 'http://192.168.0.17:4000/graphql/',
  cache: new InMemoryCache()
});

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
        <ApolloProvider client={client}>
          <RecoilRoot>
            <BottomNavigationBar />
          </RecoilRoot>
        </ApolloProvider>
      )}
    </>
  )
}

export default App;