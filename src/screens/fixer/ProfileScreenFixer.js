import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Overlay, UpcomingJobs, FinishedJobs } from '../../components';
import { Header } from '../../components/common';
import { RUBIK_MEDIUM } from '../../constants/fonts';
import { PINK, PEACH ,appColor, black, headerColor, lightOrange } from '../../constants/colors';
import { FIXER_SETTING} from '../../constants/screens'
import { Blur } from '../../components/common';


export default ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [upcoming, setUpcoming] = useState(true);
  const [finished, setFinished] = useState(false);


  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const goToProfile =()=>{
    navigation.navigate(FIXER_SETTING)
  }

  const selectUpcoming = () => {
    setUpcoming(true);
    setFinished(false);
  };

  const selectFinished = () => {
    setUpcoming(false);
    setFinished(true);
  };

  const leftIcon = (
    <Icon
      name={visible ? 'times' : 'bars'}
      type="font-awesome-5"
      color="#141414"
      size={22}
    />
  );
  const rightIcon = (
    <Icon
      name={'settings-sharp'}
      type="ionicon"
      color={black}
      size={22}
    />
  );

  const headerText = (
    <Image style={styles.headerLogo} source={require('../../assets/images/logga_ifix-logo.png')} />
  );

  const Heading = () => (
    <View style={styles.headingContainer}>
      <TouchableOpacity
        onPress={selectUpcoming}
        style={[styles.heading, upcoming && styles.selected]}
      >
        <Text style={[styles.text, upcoming && styles.selectedText]}>
          Upcoming
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={selectFinished}
        style={[styles.heading, finished && styles.selected]}
      >
        <Text style={[styles.text, finished && styles.selectedText]}>
          Finished
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header 
      iconLeft={leftIcon} 
      iconRight={rightIcon}
      rightPress={goToProfile}
      text={headerText}
      color={headerColor}
      leftPress={toggleOverlay} />

        <Heading />
        {upcoming ? <UpcomingJobs /> : <FinishedJobs />}
      <Overlay visible={visible} toggle={toggleOverlay} />
      <Blur/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:appColor,
    // backgroundColor: '#EDF6FF',
  },
  headerText: {
    color:lightOrange,
    fontWeight:'600',
    fontSize:26,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '10%',
    marginTop: '3%',
  },
  heading: {
    width: '50%',
    marginVertical: 10,
  },
  selected: {
    borderBottomWidth: 2,
    borderColor: '#000',
  },
  text: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: '#000',
    opacity: 0.5,
    textAlign: 'center',
    marginBottom: 7,
  },
  selectedText: {
    opacity: 1,
  },
  headerLogo: {
    width: 60,
    height: 18,
    resizeMode: "contain"
  }
});
