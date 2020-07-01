
import React, { 
  useState,
  useEffect 
} from 'react';
import { RecoilRoot } from 'recoil';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import loadFontsAsync from './src/theme/fonts';
import BottomNavigationBar from './src/screens/navigation';

const client = new ApolloClient({uri: 'http://localhost:4000/graphql/'});

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