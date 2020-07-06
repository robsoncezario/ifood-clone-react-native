import React, { useLayoutEffect } from 'react';
import { 
  Text, 
  View,
  StyleSheet
} from 'react-native';
import { useQuery } from '@apollo/client';

import BackButton from '../../../components/BackButton';
import RestaurantsView from '../RestaurantsView';

import { fetchCategoriesById } from './queries';
import { ScrollView } from 'react-native-gesture-handler';

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
    fontFamily: 'SulSans-Regular',
    fontSize: 40,
    color: '#000000',
    marginTop: 10
  },

  scrollView: {
    width: '100%',
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 14
  },
});

const CategoryDetails = ({route, navigation} : any) => {
  const category = route.params.category;
  const {data, error} = useQuery(fetchCategoriesById, {
    variables: {
      categoryId: category.id
    }
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: category.name.toUpperCase(),
      headerLeft: () => (
        <BackButton onPress={() => navigation.goBack(null)} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text>{error?.message}</Text>

        <RestaurantsView
          title={category.name}
          items={data?.fetchAllRestaurantsByCategory}
          navigation={navigation} />
      </ScrollView>
    </View>
  )
}

export default CategoryDetails;