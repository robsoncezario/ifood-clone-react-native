import React, { useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Platform
} from 'react-native';
import { useRecoilState } from 'recoil';

import * as atoms from '../../../geolocator/atom';
import GeolocatorService from '../../../geolocator';
import { iFoodIcons } from '../../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: Platform.select({
      web: 20,
      android: 40,
      ios: 40
    }),
    paddingBottom: 14,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    shadowOffset: {  
      width: 0,  
      height: 2,  
    },
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 1,
    borderBottomWidth: 0,
  },

  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  label: {
    fontFamily: 'SulSans-Regular',
    fontSize: 14,
    color: 'rgb(166, 165, 165)',
    textTransform: 'uppercase'
  },

  address: {
    fontFamily: 'SulSans-Bold',
    fontSize: 16,
    color: 'rgb(62, 62, 62)'
  },

  downChevron: {
    fontSize: 16,
    fontFamily: 'iFood-Icons',
    color: '#ea1d2c',
    marginLeft: 10
  }
});

const AppBar = () => {
  const [address, setAddress] = useRecoilState(atoms.addressState);
  
  useEffect(() => {
    (async () => {
      await GeolocatorService
        .getLocation()
        .then((value) => {
          setAddress(value);
        });
    })(); 
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Entregar em</Text>
      <View style={styles.row}>
        <Text style={styles.address}>{address?.formatted ?? '...'}</Text>
        <Text style={styles.downChevron}>{iFoodIcons.downChevron}</Text>
      </View>
    </View>
  );
}

export default AppBar;