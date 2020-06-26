import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../home';

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
    color: 'Black'
  }
});

const BottomTab = createBottomTabNavigator();
const BottomNavigationBar = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name='Início' component={HomeScreen} />
        <BottomTab.Screen name='Busca' component={HomeScreen} />
        <BottomTab.Screen name='Pedidos' component={HomeScreen} />
        <BottomTab.Screen name='Perfil' component={HomeScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

export default BottomNavigationBar;