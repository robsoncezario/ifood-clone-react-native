import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity 
} from 'react-native';

const useStyles = (props: any) => StyleSheet.create({
  btn: {
    padding: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },

  icon: {
    fontSize: 24,
    fontFamily: 'iFood-Icons',
    color: props.color
  },

  label: {
    fontSize: 12,
    fontFamily: props.isFocused ? 'SulSans-Bold' : 'SulSans-Regular',
    color: props?.color,
    marginTop: 5 
  }
})

const Tab = (props: any) => {
  const styles = useStyles(props);

  return (
    <TouchableOpacity
      onPress={props?.onPress}
      onLongPress={props?.onLongPress}
      style={styles.btn}>
      <Text style={styles.icon}>{props.isFocused ? props.focusedIcon : props.icon}</Text>
      <Text style={styles.label}>{props.label}</Text>
    </TouchableOpacity>
  )
}

export default Tab;