import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Overlay, UpcomingJobs, FinishedJobs } from '../../components';
import { Header } from '../../components/common';
import { RUBIK_LIGHT, RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';
import { PINK } from '../../constants/colors';
import { appColor, black, headerColor, lightOrange } from '../../constants/colors';
import FixerProfileSetting from '../../components/FixerProfileSetting';

export default ({navigation}) => {
  const [imgURL, setImgURL] = useState('');

  const goBack = () => {
    navigation.pop()
  };

  const leftIcon = (
    <Icon
    name={'chevron-back'}
    type="ionicon"
    color={black}
    size={22}
    />
  );
  const rightIcon = (
    <Icon
      name={'settings-sharp'}
      type="ionicon"
      color={lightOrange}
      size={22}
    />
  );

  const headerText = (
    <Text style={{
        color:black,
        fontSize:20,
        fontFamily:RUBIK_REGULAR,
        fontStyle:'normal'
    }}>
      Personal Settings
    </Text>
  );

// function selectImage (){
//     ImagePicker.openPicker({
//         width: 300,
//         height: 400,
//         cropping: false
//       }).then(image => {
//         console.log(image.path);
//         setImgURL(image.path)
//       });
    
//   }

  return (
    <View style={styles.container}>
      <Header 
      iconLeft={leftIcon} 
      iconRight={rightIcon}
    //   rightPress={goToProfile}
      text={headerText}
      color={headerColor}
      leftPress={goBack} />

      <ScrollView>
          <FixerProfileSetting/>
      </ScrollView>
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
});
