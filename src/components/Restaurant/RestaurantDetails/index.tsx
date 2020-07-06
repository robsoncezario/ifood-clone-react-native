import React from 'react';
import { 
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useQuery } from '@apollo/client';
import { useRecoilValue } from 'recoil';

import { fetchRestaurantDetails } from './queries';

import OrdersView from './OrdersView';
import { ScrollView } from 'react-native-gesture-handler';
import Restaurant from '../../../models/Restaurant/model';

import * as atoms from '../../../geolocator/atom';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },

  scrollView: {
    width: '100%',
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 14
  },

  headerContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%'
  },

  textContainer: {
    flex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },

  name: {
    fontFamily: 'SulSans-Regular',
    color: 'rgb(62, 62, 62)',
    fontSize: 20
  },

  description: {
    fontFamily: 'SulSans-Regular',
    color: 'rgb(113, 113, 113)',
    fontSize: 14   
  }
});

const RestaurantDetails = ({route, navigation} : any) => {
  const restaurant: Restaurant = route.params.restaurant as Restaurant;
  const address = useRecoilValue(atoms.addressState);
  const dist = (address?.getDistanceBetween(restaurant.address) ?? 0) / 1000;
  
  const {data, error} = useQuery(fetchRestaurantDetails, {
    variables: {
      restaurantId: restaurant.id
    }
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.name}>{data?.fetchRestaurantDetails?.name}</Text>
            <Text style={styles.description}>{restaurant?.category?.name} • {restaurant?.minDeliveryInterval} - {restaurant?.maxDeliveryInterval} min • {dist.toFixed(1)} km</Text>

          </View>
        </View>

        <Text>{error?.message}</Text>

        <OrdersView
          title='Menu'
          items={data?.fetchRestaurantDetails?.orders}
          navigation={navigation} />
      </ScrollView>
    </View>
  )
}

export default RestaurantDetails;