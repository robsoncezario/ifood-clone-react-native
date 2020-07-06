import React from 'react';
import { 
  StyleSheet, 
  Text,
  FlatList,
  View
} from 'react-native';

import RestaurantComponent from '../../../components/Restaurant';
import Restaurant from '../../../models/Restaurant/model';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 14,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },

  flatList: {
    width: '100%'
  },

  title: {
    fontFamily: 'SulSans-Bold',
    fontSize: 18,
    color: 'rgb(65, 65, 67)'
  }
});

const RestaurantsView = (props: any) => {
  const itemList = props.items as Array<any>;

  return (
    <>
      {itemList && (
        <View style={styles.container}>
          <Text style={styles.title}>{props.title}</Text>

          {itemList.map(item => (
            <RestaurantComponent 
              key={item.id}
              restaurant={Restaurant.fromJson(item)} />
          ))}
        </View>
      )}
    </>
  );
}

export default RestaurantsView;