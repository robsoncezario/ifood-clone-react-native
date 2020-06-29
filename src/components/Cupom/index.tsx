import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image 
} from 'react-native';
import { iFoodIcons } from '../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    shadowOffset: {  
      width: 0,  
      height: 2,  
    },
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 1,
    borderBottomWidth: 0,
    borderRadius: 0,
    padding: 10,
    margin: 0
  },

  row: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',   
    flexDirection: 'row' 
  },

  cupom: {
    width: 40,
    height: 40
  },

  columm: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },

  topLabel: {
    fontFamily: 'SulSans-Bold',
    color: 'rgb(62, 62, 62)',
    fontSize: 14
  },

  bottomLabel: {
    fontFamily: 'SulSans-Regular',
    color: 'rgb(113, 113, 113)',
    fontSize: 12
  },

  rightChevron: {
    fontSize: 16,
    fontFamily: 'iFood-Icons',
    color: '#ea1d2c',
    marginLeft: 10
  },
});

const CupomComponent = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.cupom}
               source={require('../../../assets/images/misc/cupom.png')}/>

        <View style={styles.columm}>
          <Text style={styles.topLabel}>Você possui {props.value ?? 1} cupons!</Text>
          <Text style={styles.bottomLabel}>Aproveite seus cupons</Text>
        </View>

        <Text style={styles.rightChevron}>{iFoodIcons.rightChevron}</Text>
      </View>
    </View>
  );
}

export default CupomComponent;