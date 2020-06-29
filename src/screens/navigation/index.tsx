import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Screen } from './screen';
import Tab from '../../components/Tab';


import { iFoodIcons } from '../../theme/fonts';
import HomeScreen  from '../../screens/Home/index';


const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  }
});

const BottomTab = createBottomTabNavigator();

const BottomNavigationBar = () => {
  const screenList : Array<Screen> = [
    new Screen(
      'Início',
      iFoodIcons.homeOutlined,
      iFoodIcons.homeFilled,
      HomeScreen
    ),

    new Screen(
      'Busca',
      iFoodIcons.searchOutlined,
      iFoodIcons.searchFilled,
      HomeScreen
    ),

    new Screen(
      'Pedidos',
      iFoodIcons.orderOutlined,
      iFoodIcons.orderFilled,
      HomeScreen
    ),

    new Screen(
      'Perfil',
      iFoodIcons.perfilOutlined,
      iFoodIcons.perfilFilled,
      HomeScreen
    ),
  ];

  return (
    <NavigationContainer>
      <BottomTab.Navigator tabBar={({ state, descriptors, navigation }) => {
        return (
          <View style={styles.container}>
            {screenList.map((tab, index) => {
              const isFocused = state.index === index;
              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: tab.label,
                  canPreventDefault: true,
                });
      
                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(tab.label);
                }
              };
      
              const onLongPress = () => {
                navigation.emit({
                  type: 'tabLongPress',
                  target: tab.label,
                });
              };

              return (
                <Tab
                  key={tab.label}
                  label={tab.label}
                  color={'#3f3e3e'}
                  isFocused={isFocused}
                  icon={tab.icon}
                  focusedIcon={tab.focusedIcon}
                  onPress={onPress}
                  onLongPress={onLongPress} />
              )})
            }
          </View>
        )}} >

      {screenList.map((tab, index) => {
        return (
          <BottomTab.Screen
            key={tab.label}
            name={tab.label} 
            component={tab.component} />
        )})}
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

export default BottomNavigationBar;
