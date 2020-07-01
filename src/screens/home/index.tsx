import React from 'react';
import { 
  StyleSheet, 
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import AppBar from './AppBar';
import CupomComponent from '../../components/Cupom';
import Category from '../../models/Category/model';
import CategoryComponent from '../../components/Category';
import Slider from '../../components/Slider';
import { useQuery } from '@apollo/react-hooks';
import { homeQuery } from './queries';
import CategoryView from './CategoryView';

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

const HomeScreen = () => {
  const { data } = useQuery(homeQuery);

  return (
    <View style={styles.container}>
      <AppBar />

      <ScrollView style={styles.scrollView}>
        <View style={styles.aligner}>
          <CupomComponent value={8} />

          <CategoryView items={data?.fetchAllCategories} />

          <Slider/> 
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;