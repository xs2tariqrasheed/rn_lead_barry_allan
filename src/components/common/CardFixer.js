import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { RUBIK_REGULAR, RUBIK_MEDIUM } from '../../constants/fonts';

export default ({ text, color, iconName, lowerText, expanded }) => {
  const [expand, setExpand] = useState(false);

  const customStyle = styles({
    backgroundColor: color,
  });

  return (
    <>
      <TouchableOpacity
        onPress={() => setExpand(!expand)}
        style={[customStyle.container, expand && customStyle.conditional]}
      >
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
          <View style={customStyle.textContainer}>
            <Text style={customStyle.text}>{text}</Text>
            <Text style={customStyle.lowerText}>{lowerText}</Text>
          </View>
        </View>
        <Icon
          name={expand ? 'chevron-up' : 'chevron-down'}
          type="font-awesome-5"
          color="#FFF"
          size={25}
        />
      </TouchableOpacity>
      {expand && <View style={customStyle.extraSpace}>{expanded}</View>}
    </>
  );
};

const styles = ({ backgroundColor }) =>
  StyleSheet.create({
    container: {
      height: 71,
      marginHorizontal: 15,
      marginVertical: 8,
      paddingLeft: '3%',
      paddingRight: '5%',
      borderRadius: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      elevation: 2,
      backgroundColor: backgroundColor,
    },
    conditional: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      marginBottom: 0,
    },
    extraSpace: {
      marginTop: 0,
      marginBottom: 8,
      marginHorizontal: 15,
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
      elevation: 2,
      backgroundColor: '#FFF',
    },
    subContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    textContainer: {
      marginLeft: 15,
    },
    text: {
      fontFamily: RUBIK_REGULAR,
      fontSize: 18,
      color: '#FFF',
    },
    lowerText: {
      fontFamily: RUBIK_MEDIUM,
      fontSize: 14,
      color: '#FFF',
      marginTop: 3,
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
