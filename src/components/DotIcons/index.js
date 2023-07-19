import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from './style';
import { PINK, PEACH } from '../../constants/colors';

export default ({ check, leftPress, rightPress }) => {
  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity onPress={leftPress}>
        <Icon
          name={check ? 'ellipse' : 'ellipse-outline'}
          type="ionicon"
          color={PEACH}
          size={15}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={rightPress}>
        <Icon
          name={check ? 'ellipse-outline' : 'ellipse'}
          type="ionicon"
          color={PEACH}
          size={15}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};
