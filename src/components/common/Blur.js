import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { BlurView } from '@react-native-community/blur';

export default () => {
  const blur = useSelector((state) => state.blur);

  return (
    blur && (
      <BlurView style={styles.blurView} blurType="light" blurAmount={10} />
    )
  );
};

const styles = StyleSheet.create({
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    elevation: 5,
  },
});
