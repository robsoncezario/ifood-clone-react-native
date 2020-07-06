import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity,
  Image, 
  View
} from 'react-native';
import Order from '../../models/Order/model';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: 'rgb(232, 232, 232)',
    borderBottomWidth: 1, 
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },

  textContainer: {
    flex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },

  image: {
    width: 100,
    height: 75,
    borderRadius: 4
  },

  name: {
    fontFamily: 'SulSans-Regular',
    fontSize: 16,
    color: 'rgb(62, 62, 62)',   
  },

  description: {
    fontFamily: 'SulSans-Regular',
    fontSize: 12,
    color: 'rgb(113, 113, 113)',   
  },

  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 15
  },

  price: {
    fontFamily: 'SulSans-Regular',
    fontSize: 16,
    color: '#50a773'
  },

  discount: {
    fontFamily: 'SulSans-Regular',
    fontSize: 12,
    color: 'rgb(113, 113, 113)',
    marginLeft: 10,
    textDecorationLine: 'line-through'
  }
});

const OrderComponent = (props: any) => {
  const order = props.order as Order;

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{order.name}</Text>
        <Text style={styles.description}>{order.description}</Text>
        <View style={styles.row}>
          <Text style={styles.price}> {new Intl.NumberFormat('pt-BR', { 
            style: 'currency', 
            currency: 'BRL'
          }).format(order.price as number)}</Text>

          {order && (order?.discount ?? 0) > 0 && (
            <Text style={styles.discount}> {new Intl.NumberFormat('pt-BR', { 
              style: 'currency', 
              currency: 'BRL'
            }).format((order.price as number) + (order.discount as number))}</Text>
          )}
        </View>
      </View>

      {order?.imageSrc && (
        <Image style={styles.image}
               source={{uri: order.imageSrc}} />
      )}
    </TouchableOpacity>
  );
}

export default OrderComponent;