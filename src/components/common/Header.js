import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RUBIK_MEDIUM } from '../../constants/fonts.js';

export default ({
  iconLeft,
  iconRight,
  text,
  color,
  leftPress,
  rightPress,
  longText,
}) => {
  const customStyle = styles({ backgroundColor: color });

  return (
    <View style={customStyle.container}>
      <View style={customStyle.subContainer}>
        <TouchableOpacity onPress={leftPress} style={customStyle.leftIcon}>
          {iconLeft}
        </TouchableOpacity>
        <Text style={[customStyle.text]}>{text}</Text>
        <TouchableOpacity onPress={rightPress} style={customStyle.rightIcon}>
          {iconRight}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = ({ backgroundColor }) =>
  StyleSheet.create({
    container: {
      height: 90,
      backgroundColor: backgroundColor || '#FFE6ED',
      justifyContent: 'center',
      elevation: 2,
    },
    subContainer: {
      marginTop: '10%',
      flexDirection: 'row',
      justifyContent:'space-between',
      marginHorizontal:5,
      alignItems: 'center',
    },
    text: {
      fontFamily: RUBIK_MEDIUM,
      fontSize: 26,
      textAlign: 'center',
      color: '#000000',
      letterSpacing: 0.88,
    },
    leftIcon: {
      flexDirection: 'row',
      marginLeft: 15,
    },
    rightIcon: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginRight: 15,
    },
  });
