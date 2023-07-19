import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RUBIK_REGULAR } from '../../constants/fonts';

export default ({ text, color, icon, onPress, disabled ,textColor,btnStyle }) => {
  const customStyle = styles({
    backgroundColor: color,
    icon: icon,
    disabled: disabled,
  });

  return (
    <TouchableOpacity
      style={btnStyle ?[customStyle.container,btnStyle]:[customStyle.container]}
      onPress={onPress}
      disabled={disabled}
    >
      {icon}
      <Text style={textColor?[customStyle.text,{color:textColor}]:[customStyle.text]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = ({ backgroundColor, icon, disabled }) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginHorizontal: '8%',
      marginVertical: 10,
      paddingVertical: 15,
      borderRadius: 30,
      borderWidth: backgroundColor ? 0 : 2,
      borderColor: backgroundColor || '#FF8686',
      backgroundColor: backgroundColor,
      opacity: disabled ? 0.5 : 1,
    },
    text: {
      fontFamily: RUBIK_REGULAR,
      fontSize: 20,
      textAlign: 'center',
      color: backgroundColor ? '#FFF' : '#000',
      marginLeft: icon && 10,
    },
  });
