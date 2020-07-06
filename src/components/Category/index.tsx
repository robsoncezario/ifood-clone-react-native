import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity,
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
    borderRadius: 4,
    resizeMode: 'cover'
  },

  label: {
    fontFamily: 'SulSans-Regular',
    color: 'rgb(113, 113, 113)',
    fontSize: 16,
    marginTop: 10
  }
});

const CategoryComponent = (props: any) => {
  const category = props.category;
  const navigation = props.navigation;

  const handleClick = () => {
    navigation.navigate('CategoryStack', {
      category: category
    });
  }

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={handleClick}>
      <Image style={styles.thumb}
             source={{uri: category.imageSrc}} />

      <Text style={styles.label}
            numberOfLines={1}>{category.name}</Text>
    </TouchableOpacity>
  );
}

export default CategoryComponent;