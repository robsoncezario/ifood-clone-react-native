import React from 'react';
import { 
  StyleSheet, 
  ScrollView
} from 'react-native';

import CategoryComponent from '../../../components/Category';
import Category from '../../../models/Category/model';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 14
  }
});

const CategoriesView = (props: any) => {
  const itemList = props.items as Array<any>;

  return (
    <>
      {itemList && (
        <ScrollView horizontal={true} 
                    style={styles.container}
                    showsHorizontalScrollIndicator={false}>
          {itemList.map(category => (
            <CategoryComponent key={category.id}
                               category={Category.fromJson(category)} />
            ))

          }
        </ScrollView>
      )}
    </>
  );
}

export default CategoriesView;