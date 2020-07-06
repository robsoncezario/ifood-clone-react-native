import React, { useLayoutEffect } from 'react';
import { StyleSheet} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import RestaurantComponent from '.';
import RestaurantDetails from './RestaurantDetails';
import BackButton from '../BackButton';
import SearchButton from '../SearchButton';

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

const RestaurantStack = ({route, navigation} : any) => {
  const restaurant = route.params.restaurant;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: restaurant.name.toUpperCase(),
      headerLeft: () => (
        <BackButton onPress={() => navigation.goBack(null)} />
      ),
      headerRight: () => (
        <SearchButton onPress={() => navigation.goBack(null)} />
      )
    });
  }, [navigation]);

  return (
    <Stack.Navigator initialRouteName='Restaurant'>
      <Stack.Screen 
        name='Restaurant'
        component={RestaurantDetails}
        options={{headerShown: false}}
        initialParams={route.params} />
    </Stack.Navigator>
  )
}

export default RestaurantStack;