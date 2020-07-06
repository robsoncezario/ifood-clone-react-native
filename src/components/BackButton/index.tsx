import React from 'react';
import { 
  Text,
  TouchableOpacity,
  StyleSheet 
} from 'react-native';
import { iFoodIcons } from '../../theme/fonts';

const styles = StyleSheet.create({
  leftChevron: {
    fontSize: 16,
    fontFamily: 'iFood-Icons',
    color: '#ea1d2c',
    marginLeft: 10,
    transform: [
      {rotateZ: '180deg'}
    ]
  },
});

const BackButton = (props: any) => {
  return (
    <TouchableOpacity onPress={props?.onPress}>
      <Text style={styles.leftChevron}>{iFoodIcons.rightChevron}</Text>
    </TouchableOpacity>
  )
}

export default BackButton