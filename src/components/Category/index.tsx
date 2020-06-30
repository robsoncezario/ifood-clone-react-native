import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image 
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginRight: 15
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

      <Text style={styles.label}
            numberOfLines={1}>{props.category.name}</Text>
    </View>
  );
}

export default CategoryComponent;