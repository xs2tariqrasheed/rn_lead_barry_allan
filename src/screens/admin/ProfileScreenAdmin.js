import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { Overlay } from '../../components';
import { Header } from '../../components/common';
import { appColor, headerColor } from '../../constants/colors';
import { RUBIK_REGULAR } from '../../constants/fonts';
import RemoveEmployee from '../../components/Modals/RemoveEmployee'
import InfoModal from '../../components/Modals/InfoModal'
import BrookeDinja from '../../components/Modals/BrookeDinja';
import SimpleModal from '../../components/Modals/SimpleModal'

export default () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const leftIcon = (
    <Icon
      name={visible ? 'times' : 'bars'}
      type="font-awesome-5"
      color="#141414"
      size={22}
    />
  );
  const headerText = <Text style={styles.headerText}>Profile</Text>;

  return (
    <View style={styles.container}>
      <Header 
       iconLeft={leftIcon}
       text={headerText} 
       color={headerColor}
       leftPress={toggleOverlay}
        />
      <ScrollView>
        <Text style={styles.text}>profile data to be displayed later</Text>
      </ScrollView>
{/* <SimpleModal
visible={true}
/> */}
      <Overlay visible={visible} toggle={toggleOverlay} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:appColor,
  },
  headerText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: '#141414',
  },
  text: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: '#141414',
    textAlign: 'center',
    marginTop: 15,
  },
});
