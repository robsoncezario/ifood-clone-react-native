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
    boxSizing: 'border-box',
    padding: 10,
    borderRadius: 4,
    border: '1px solid #ddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    width: 32,
    height: 32,
    borderRadius: 16
  },

  column: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },

  name: {
    fontFamily: 'SulSans-Bold',
    fontSize: 15,
    color: 'Black'
  },

  description: {
    fontFamily: 'SulSans-Regular',
    fontSize: 15,
    color: 'rgba(0, 0, 0, .7)' 
  }
});


const RestaurantComponent = (props: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo}
             source={{uri: props.restaurant.imageSrc}} />
      <View style={styles.column}>
        <Text style={styles.name}>{props.restaurant.name}</Text>
        <Text style={styles.description}>{props.restaurant.description}</Text>
      </View>
    </View>
  );
}

export default RestaurantComponent;