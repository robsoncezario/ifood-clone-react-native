import React from 'react';
import { StyleSheet} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '.';
import CategoryDetails from './CategoryDetails';


const styles = StyleSheet.create({
  container: {
    elevation: 0,
    shadowRadius: 0,
    shadowOpacity: 0,
    shadowOffset: {
      height: 0,
      width:0
    },
    borderBottomColor: 'transparent',
    borderBottomWidth: 0
  },

  title: {
    fontFamily: 'SulSans-Bold',
    color: 'rgb(62, 62, 62)',
    fontSize: 14
  }
});

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen 
        name='Home'
        component={HomeScreen}
        options={{headerShown: false}} />
      <Stack.Screen 
        name='CategoryDetails'
        component={CategoryDetails}
        options={{
          headerStyle: styles.container,
          headerTitleAlign: 'center',
          headerTitleStyle: styles.title,
        }} />
    </Stack.Navigator>
  )
}

export default HomeStack;