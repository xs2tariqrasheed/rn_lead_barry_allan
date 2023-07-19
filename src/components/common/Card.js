import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RUBIK_REGULAR, RUBIK_MEDIUM } from '../../constants/fonts';
import { Icon } from 'react-native-elements';

export default ({ text, desc, subDesc, color, iconName, borderColor, onPress, isCompany }) => {
  const customStyle = styles({
    backgroundColor: color,
    borderColor: borderColor,
  });

  return (
    <TouchableOpacity onPress={onPress} style={customStyle.container}>
      <View style={customStyle.subContainer}>
        <View style={customStyle.iconContainer}>
          <Icon
            name={iconName}
            type="font-awesome-5"
            solid
            size={25}
            color={color}
          />
        </View>
        <Text style={customStyle.text}>{text}</Text>
      </View>
      <View>
      <Text style={customStyle.mainDesc}>{desc}</Text>
{!isCompany ? iconName == "car-side" || iconName == "dot-circle" ? null : (
  <Text style={customStyle.desc}>(Efter RUT)</Text>
) : null
}

      </View>
    </TouchableOpacity>
  );
};

const styles = ({ backgroundColor, borderColor }) =>
  StyleSheet.create({
    container: {
      height: 71,
      marginHorizontal: 10,
      marginVertical: 8,
      paddingHorizontal: '4%',
      borderRadius: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      elevation: 2,
      backgroundColor: backgroundColor,
      borderColor: borderColor || 'transparent',
      borderWidth: borderColor ? 2 : 0,
    },
    subContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      width: '60%',
      marginLeft: 20,
      fontFamily: RUBIK_REGULAR,
      fontSize: 17,
      color: '#FFF',
    },
    desc: {
      fontFamily: RUBIK_REGULAR,
      fontSize: 12,
      fontWeight:"bold",
      color: '#FFF',
    },

    mainDesc: {
      fontFamily: RUBIK_MEDIUM,
      fontSize: 15,
      fontWeight:"bold",
      color: '#FFF',
    },
    iconContainer: {
      height: 50,
      width: 50,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
    },
  });
