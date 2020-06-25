import * as Font from 'expo-font';

/*
  Vi no site deles que essa é a font que eles utilizam.
*/

export default () : Promise<void> => {
  return Font.loadAsync({
    'SulSans-Light': require('../../assets/fonts/SulSans/SulSans-Light.ttf'),
    'SulSans-Regular': require('../../assets/fonts/SulSans/SulSans-Regular.ttf'),
    'SulSans-Bold': require('../../assets/fonts/SulSans/SulSans-Bold.ttf'),
  });
}