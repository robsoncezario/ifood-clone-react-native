import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView 
} from 'react-native';
import AppBar from './AppBar';
import CupomComponent from '../../components/Cupom';
import Category from '../../models/Category/model';
import CategoryComponent from '../../components/Category';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },

  title: {
    fontFamily: 'SulSans-Bold',
    fontSize: 40,
    color: '#000000',
    marginTop: 10
  },

  scrollView: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 14,
  },

  aligner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },

  categoryAligner: {
    marginTop: 14
  }
});

const HomeScreen = () => {
  const categoryList = [
    new Category(
      1,
      'Mercado',
      'https://i.imgur.com/dy0FkdH.png'
    ),

    new Category(
      2,
      'Promoções',
      'https://i.imgur.com/0C0Iaim.png'
    ),

    new Category(
      3,
      'Lanches',
      'https://i.imgur.com/9JDdJo0.png'
    ),

    new Category(
      4,
      'Pizza',
      'https://i.imgur.com/Hyq0DC9.png'
    ),

    new Category(
      5,
      'Vegetariana',
      'https://i.imgur.com/lBImBd9.png'
    ),

    new Category(
      7,
      'Brasileira',
      'https://i.imgur.com/dwPnj9m.png'
    ),

    new Category(
      8,
      'Bebidas',
      'https://i.imgur.com/B8TNrYa.png'
    ),

    new Category(
      9,
      'Açai',
      'https://i.imgur.com/5pAqhAw.png'
    ),

    new Category(
      10,
      'Doces & Bolos',
      'https://i.imgur.com/EPjQa0k.png'
    )
  ];
  return (
    <View style={styles.container}>
      <AppBar />

      <ScrollView style={styles.scrollView}>
        <View style={styles.aligner}>
          <CupomComponent value={8} />

          <ScrollView horizontal={true} 
                      style={styles.categoryAligner}>
            {categoryList.map(category => (
              <CategoryComponent category={category}></CategoryComponent>
            ))
              
            }
          </ScrollView>

          <Text style={styles.title}>iFood, homescreen '-'</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;