import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';

export default ({ title, id, status, onPress }) => {
  const customStyle = styles({ color: status ? '#87DB62' : '#F8E077' });

  return (
    <TouchableOpacity style={customStyle.container} onPress={onPress}>
      <Text style={customStyle.title}>{title}</Text>
      <View style={customStyle.subContainer}>
        <Text style={customStyle.id}>ID: {id}</Text>
        <View style={customStyle.statusContainer}>
          <Text style={customStyle.status}>{status ? 'Aktiv' : 'Pausad'}</Text>
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
      width: '55%',
      fontFamily: RUBIK_MEDIUM,
      fontSize: 15,
      color: '#000',
      marginVertical: 20,
    },
    subContainer: {
      width: '45%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    id: {
      fontFamily: RUBIK_REGULAR,
      fontSize: 14,
      color: '#000',
    },
    statusContainer: {
      width: '35%',
    },
    status: {
      fontFamily: RUBIK_MEDIUM,
      fontSize: 14,
      color: '#000',
      textAlign: 'right',
    },
  });
