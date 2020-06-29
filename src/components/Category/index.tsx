import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image 
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10
  },

  thumb: {
    width: 80,
    height: 61,
    borderRadius: 4
  },

  label: {
    fontFamily: 'SulSans-Regular',
    color: 'rgb(113, 113, 113)',
    fontSize: 16,
    marginTop: 10
  }
});

const CategoryComponent = (props: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.thumb}
             source={{uri: props.category.imageSrc}}/>

      <Text style={styles.label}>{props.category.name}</Text>
    </View>
  );
}

export default CategoryComponent;