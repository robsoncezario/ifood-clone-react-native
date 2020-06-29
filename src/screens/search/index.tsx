import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView 
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff'
  },

  title: {
    fontFamily: 'SulSans-Bold',
    fontSize: 40,
    color: '#000000'
  },

  scrollView: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 14
  }
});

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>iFood, homescreen '-'</Text>
    </View>
  );
}

export default SearchScreen;