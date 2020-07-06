import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image 
} from 'react-native';
import { useRecoilValue } from 'recoil';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import * as atoms from '../../geolocator/atom';
import { iFoodIcons } from '../../theme/fonts';
import Restaurant from '../../models/Restaurant/model';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 4,
    borderColor: 'rgb(232, 232, 232)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 10
  },

  image: {
    width: 54,
    height: 54,
    resizeMode: 'cover',
    margin: 12,
    borderRadius: 4
  },

  description: {
    borderLeftColor: 'rgb(232, 232, 232)',
    borderLeftWidth: 1,
    padding: 12,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },

  name: {
    fontFamily: 'SulSans-Bold',
    fontSize: 15,
    color: 'rgb(62, 62, 62)'
  },

  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  
  ratingIcon: {
    color: '#e7a74e',
    fontSize: 12,
    fontFamily: 'iFood-Icons'
  },

  ratingValue: {
    color: '#e7a74e',
    fontFamily: 'SulSans-Bold',
    fontSize: 12
  },
  
  info: {
    fontFamily: 'SulSans-Regular',
    fontSize: 13,
    color: 'rgb(113, 113, 113)'
  },

  free: {
    fontFamily: 'SulSans-Regular',
    fontSize: 13,
    color: '#50a773'
  },

  delivery: {
    fontFamily: 'SulSans-Regular',
    fontSize: 13,
    color: 'rgb(113, 113, 113)',
    marginTop: 15
  }
});

const RestaurantComponent = (props: any) => {
  const restaurant = props.restaurant as Restaurant;
  const address = useRecoilValue(atoms.addressState);
  const dist = (address?.getDistanceBetween(restaurant.address) ?? 0) / 1000;

  return (
    <View style={styles.container}>
      <Image style={styles.image}
             source={{uri: restaurant.imageSrc}}
             resizeMode={'cover'} />

      <View style={styles.description}>
        <Text style={styles.name}
              numberOfLines={1}>{restaurant.name}</Text>

        <View style={styles.row}>
          <Text style={styles.ratingIcon}>{iFoodIcons.star}</Text>
          <Text style={styles.ratingValue}> {restaurant.average.toFixed(1)}</Text>

          <Text style={styles.info}> • {restaurant?.category?.name} • {dist.toFixed(1)} km</Text>
        </View>

        <Text style={styles.delivery}>{restaurant.minDeliveryInterval} - {restaurant.maxDeliveryInterval} min • 
          {restaurant!.deliveryCost as number > 0 && (
            <Text style={styles.info}> {new Intl.NumberFormat('pt-BR', { 
              style: 'currency', 
              currency: 'BRL'
            }).format(restaurant!.deliveryCost as number)}</Text>
          )}

          {restaurant.deliveryCost === 0 && (
            <Text style={styles.free}> Grátis</Text>
          )}
        </Text>
      </View>
    </View>
  ) 
  /*return (
    <View style={styles.container}>
      <Image style={styles.logo}
             source={{uri: props.restaurant.imageSrc}} />
      <View style={styles.column}>
        <Text style={styles.name}>{props.restaurant.name}</Text>
        <Text style={styles.description}>{props.restaurant.description}</Text>
      </View>
    </View>
  ); */
}

export default RestaurantComponent;