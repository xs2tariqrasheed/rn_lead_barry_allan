import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Icon } from 'react-native-elements';
import { styles } from './style';
import { POINTS } from '../../constants/points';

export default ({ booking }) => {
  const services = useSelector((state) => state.services);
  const service = services.find((s) => s.id === booking.service_id);

  return (
    <View style={styles.shadedBox}>
      <Text style={styles.shadedBoxHeading}>Förbered dig såhär:</Text>
      {POINTS[service.title].map((item, index) => (
        <View key={index} style={styles.row}>
          <Icon
            name="circle"
            type="font-awesome-5"
            color="#000"
            size={6}
            solid
            style={styles.dot}
          />
          <Text style={styles.shadedLines}>{item}</Text>
        </View>
      ))}
    </View>
  );
};
