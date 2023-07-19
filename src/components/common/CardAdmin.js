import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RUBIK_REGULAR } from '../../constants/fonts';
import { Icon } from 'react-native-elements';

export default ({ text, color, iconName, onPress }) => {
  const customStyle = styles({
    backgroundColor: color,
  });

  return (
    <TouchableOpacity onPress={onPress} style={customStyle.container}>
      <View style={customStyle.subContainer}>
        <View style={customStyle.iconContainer}>
          <Icon
            name={iconName}
            type="font-awesome-5"
            solid
            size={28}
            color={color}
          />
        </View>
        <Text style={customStyle.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = ({ backgroundColor }) =>
  StyleSheet.create({
    container: {
      height: 71,
      marginHorizontal: '5%',
      marginVertical: 8,
      paddingHorizontal: '4%',
      borderRadius: 15,
      flexDirection: 'row',
      alignItems: 'center',
      elevation: 2,
      backgroundColor: backgroundColor,
    },
    subContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconContainer: {
      height: 50,
      width: 50,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
    },
    text: {
      width: '60%',
      marginLeft: 20,
      fontFamily: RUBIK_REGULAR,
      fontSize: 17,
      color: '#FFF',
    },
  });
