import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image 
} from 'react-native';

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
    margin: 12
  },

  description: {
    borderLeftColor: 'rgb(232, 232, 232)',
    borderLeftWidth: 1,
    padding: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },

  name: {
    fontFamily: 'SulSans-Bold',
    fontSize: 14,
    color: 'rgb(62, 62, 62)'
  }
});

const RestaurantComponent = (props: any) => {
  const restaurant = props.restaurant;

  return (
    <View style={styles.container}>
      <Image style={styles.image}
             source={{uri: restaurant.imageSrc}}
             resizeMode={'cover'} />

      <View style={styles.description}>
        <Text style={styles.name}>{restaurant.name}</Text>
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