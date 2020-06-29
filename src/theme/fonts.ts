import * as Font from 'expo-font';

/*
  Vi no site deles que essa é a font que eles utilizam.
*/

export default () : Promise<void> => {
  return Font.loadAsync({
    'SulSans-Light': require('../../assets/fonts/SulSans/SulSans-Light.ttf'),
    'SulSans-Regular': require('../../assets/fonts/SulSans/SulSans-Regular.ttf'),
    'SulSans-Bold': require('../../assets/fonts/SulSans/SulSans-Bold.ttf'),
    'iFood-Icons': require('../../assets/fonts/iFood/iFoodIcons-Regular.ttf')
  });
}

export class iFoodIcons {
  static cupom: string = "\u0041";
  static homeFilled: string = "\u0042";
  static homeOutlined: string = "\u0043";
  static orderFilled: string = "\u0044";
  static orderOutlined: string = "\u0045";
  static perfilFilled: string = "\u0046";
  static perfilOutlined: string = "\u0047";
  static searchFilled: string = "\u0048";
  static searchInput: string = "\u0049";
  static searchOutlined: string = "\u004a";
  static star: string = "\u004b";
}