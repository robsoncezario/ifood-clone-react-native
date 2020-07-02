import * as Font from 'expo-font';
import { ToolbarAndroidBase } from 'react-native';

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
  static homeFilled: string = "\u0043";
  static homeOutlined: string = "\u0044";
  static orderFilled: string = "\u0045";
  static orderOutlined: string = "\u0046";
  static perfilFilled: string = "\u0047";
  static perfilOutlined: string = "\u0048";
  static searchFilled: string = "\u004a";
  static searchInput: string = "\u004b";
  static searchOutlined: string = "\u004c";
  static star: string = "\u004d";
  static downChevron: string = "\u0042";
  static rightChevron: string = "\u0049";
}
