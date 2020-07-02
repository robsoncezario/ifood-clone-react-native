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

  const renderItem = ({item} : {item: any}) => (
    <RestaurantComponent 
      key={item.id}
      restaurant={Restaurant.fromJson(item)} />
  );

  return (
    <>
      {itemList && (
        <View style={styles.container}>
          <Text style={styles.title}>{props.title}</Text>
          <FlatList 
            style={styles.flatList}
            data={itemList}
            renderItem={renderItem} />
        </View>
      )}
    </>
  );
}

export default RestaurantsView;