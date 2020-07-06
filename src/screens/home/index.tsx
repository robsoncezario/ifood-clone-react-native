import React from 'react';
import { 
  StyleSheet, 
  View,
  ScrollView,
  Text
} from 'react-native';
import {useQuery} from '@apollo/client';
import {homeQuery} from './queries';

import AppBar from './AppBar';
import CupomComponent from '../../components/Cupom';
import Slider from '../../components/Slider';

import CategoriesView from './CategoriesView';
import RestaurantsView from './RestaurantsView';

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
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 14
  },

  aligner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },

  categoryAligner: {
    marginTop: 14
  }
});

const HomeScreen = ({navigation, route} : any) => {
  const {data, error} = useQuery(homeQuery);

  return (
    <View style={styles.container}>
      <AppBar />

      <ScrollView style={styles.scrollView}>
        <View style={styles.aligner}>
          <CupomComponent value={8} />

          <Text>{error?.message}</Text>

          <CategoriesView items={data?.fetchAllCategories}
                          navigation={navigation} />

          <Slider/> 

          <RestaurantsView 
            title='Lojas'
            items={data?.fetchAllRestaurants} />
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;