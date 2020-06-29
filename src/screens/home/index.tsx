import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView 
} from 'react-native';
import AppBar from './AppBar';
import CupomComponent from '../../components/Cupom';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },

  title: {
    fontFamily: 'SulSans-Bold',
    fontSize: 40,
    color: '#000000',
    marginTop: 10
  },

  scrollView: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 14,
  },

  aligner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <AppBar />

      <ScrollView style={styles.scrollView}>
        <View style={styles.aligner}>
          <CupomComponent value={8} />
          <Text style={styles.title}>iFood, homescreen '-'</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;