import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from './style';
import { BLACK } from '../../constants/colors';

export default () => {
  return (
    <View style={styles.subContainer}>
      <View style={styles.tickContainer}>
        <Icon
          name="check-circle"
          type="font-awesome-5"
          color={BLACK}
          size={25}
          solid
        />
      </View>
      <Text style={styles.upperLine1}>Betalning genomförd</Text>
      <View style={styles.iconContainer}>
        <Icon
          name="hourglass-start"
          type="font-awesome-5"
          color="#F4F9FF"
          size={45}
        />
      </View>
      <Text style={styles.upperLine2}>Klart!</Text>
      <Text style={styles.upperLine3}>Nu hittar vi en fixare åt dig!</Text>
    </View>
  );
};
