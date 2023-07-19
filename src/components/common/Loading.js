import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/loading-buffering.gif')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
  },
});
