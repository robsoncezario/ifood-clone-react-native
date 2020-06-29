import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'SulSans-Bold',
    fontSize: 40,
    color: '#000000'
  }
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>iFood, homescreen '-'</Text>
    </View>
  );
}

export default HomeScreen;