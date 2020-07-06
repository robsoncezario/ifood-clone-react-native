import React from 'react';
import { 
  Text,
  TouchableOpacity,
  StyleSheet 
} from 'react-native';
import { iFoodIcons } from '../../theme/fonts';

const styles = StyleSheet.create({
  searchInput: {
    fontSize: 16,
    fontFamily: 'iFood-Icons',
    color: '#ea1d2c',
    marginRight: 10
  },
});

const SearchButton = (props: any) => {
  return (
    <TouchableOpacity onPress={props?.onPress}>
      <Text style={styles.searchInput}>{iFoodIcons.searchInput}</Text>
    </TouchableOpacity>
  )
}

export default SearchButton;