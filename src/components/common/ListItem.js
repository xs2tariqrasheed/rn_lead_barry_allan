import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';

export default ({ title, id, status, onPress }) => {
  const translatedStatus =
    status === 'pending'
      ? 'Ej klar'
      : status === 'paid'
      ? 'Ej klar'
      : status === 'done'
      ? 'Klar'
      : status === 'disputed' && 'Dispyt';

  const customStyle = styles({
    color:
      status === 'pending'
        ? '#F8E077'
        : status === 'paid' || status === 'done'
        ? '#87DB62'
        : status === 'disputed' && '#FF8686',
  });

  return (
    <TouchableOpacity style={customStyle.container} onPress={onPress}>
      <Text style={customStyle.title}>{title}</Text>
      <View style={customStyle.subContainer}>
        <View style={customStyle.idContainer}>
          <Text style={customStyle.rightText}>ID: {id}</Text>
        </View>
        <View style={customStyle.statusContainer}>
          <Text style={customStyle.rightText}>
            <Text style={customStyle.status}>Status:</Text> {translatedStatus}
          </Text>
        </View>
        <Icon
          name="chevron-right"
          type="font-awesome-5"
          color="#000"
          size={20}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = ({ color }) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: '6%',
      marginVertical: 5,
      flexDirection: 'row',
      backgroundColor: color,
    },
    title: {
      width: '45%',
      fontFamily: RUBIK_MEDIUM,
      fontSize: 15,
      color: '#000',
      marginVertical: 20,
    },
    subContainer: {
      width: '55%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    idContainer: {
      width: '25%',
      justifyContent: 'center',
    },
    rightText: {
      fontFamily: RUBIK_REGULAR,
      fontSize: 14,
      color: '#000',
    },
    statusContainer: {
      width: '60%',
    },
    status: {
      fontFamily: RUBIK_MEDIUM,
    },
  });
