
import React, { useState } from 'react';
import { 
  View,
  StyleSheet, 
  ScrollView,
  Image,
  Dimensions
} from 'react-native';

const useStyles = (props: any) => StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    flexDirection: 'column'
  },

  spacer: {
    marginTop: 14
  },

  image: {
    width: 267,
    height: 140,
    marginRight: 10
  },

  dotsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 5
  },

  dots: {
    height: 6, 
    width: 6, 
    backgroundColor: '#000000', 
    margin: 4, 
    borderRadius: 6
  }
})

const Slider = () => {
  const {width} = Dimensions.get('window');
  const styles = useStyles({width: width});

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemList = [
    {
      imageSrc: require('../../../assets/images/highlights/70off.png'),
      component: null
    },

    {
      imageSrc: require('../../../assets/images/highlights/acaiesorvete.png'),
      component: null
    },

    {
      imageSrc: require('../../../assets/images/highlights/entregagratis.png'),
      component: null
    },

    {
      imageSrc: require('../../../assets/images/highlights/maispedidos.png'),
      component: null
    }
  ];

  const handleScrollEnd = ({ nativeEvent }: any) => {
    const position = nativeEvent.contentOffset; 
    const index = Math.round(position.x / styles.image.width);
 
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        style={styles.spacer}
        onScroll={handleScrollEnd} >
        {itemList.map((item, index) => { 
          return ( 
            <Image key={index} 
                    style={styles.image}
                    source={item.imageSrc} />
          );
        })}
      </ScrollView>

      <View style={styles.dotsContainer}>
        {itemList.map((item, index) => { 
          const opacity = index === currentIndex ? 1.0 : 0.3;

          return ( 
            <View style={{
              ...styles.dots, 
              ...{opacity}
            }} />
          );
        })}
      </View>
    </View>
  );
}

export default Slider;