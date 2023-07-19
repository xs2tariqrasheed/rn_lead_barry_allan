import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Modal,
  Alert,
  Image,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { Icon } from 'react-native-elements';
import { setBlur } from '../../actions/blur.action';
import { checkZipCode } from '../../api/zip.api';
import { Blur, Button } from '../../components/common';
import {
  BLACK,
  EERIE_BLACK,
  FLORAL_WHITE,
  LIGHT_PEACH,
  PEACH,
  WHITE,
} from '../../constants/colors';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';
import {
  LOGIN_SCREEN,
  SIGNUP_SCREEN,
  SIGNUP_SCREEN_FIXER,
} from '../../constants/screens';

const RegionsOfOperation = () => {
  return (
    <View style={styles.subContainer}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          alignContent: 'center',
          marginTop: '15%',
          marginBottom: '22%',
          textAlign: 'center',
        }}
      >
        <Image
          style={styles.headerLogo}
          source={require('../../assets/images/logga_ifix-logo.png')}
        />
      </View>
      <Text style={styles.upperLine2}>Fixar vi hos dig?</Text>
      <Text style={styles.upperLine3}>
        Här kan du dubbelkolla om i-fix fixar hos dig! Om inte - skapa ett konto
        så mailar vi dig när vi finns tillgängliga!
      </Text>
    </View>
  );
};

const ZipCodeForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [zipCode, setZipCode] = useState('');

  const checkZip = () => {
    checkZipCode(zipCode)
      .then((res) => {
        if (res.data.success) {
          navigation.navigate(LOGIN_SCREEN);
        } else {
          setModalVisible(!modalVisible);
          dispatch(setBlur(true));
        }
      })
      .catch(() => Alert.alert('Error!', 'Unable to check zip code'));
  };

  return (
    <View style={styles.lowerContainer}>
      <Text style={styles.inputHeading}>
        Kan vi fixa hos dig? Testa din postkod:
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Skriv in din postkod"
        placeholderTextColor={"grey"}
        onChangeText={(text) => setZipCode(text)}
      />

      <Button
        text="Testa!"
        color={PEACH}
        onPress={checkZip}
        disabled={!zipCode}
      />
      <Button
        text="Logga in / Skapa konto"
        onPress={() => navigation.navigate(LOGIN_SCREEN)}
      />

      <View style={styles.textContainer}>
        <Text style={styles.text}>Do you want to be a fixer?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(SIGNUP_SCREEN_FIXER)}
        >
          <Text style={styles.peachText}>Apply here</Text>
        </TouchableOpacity>
      </View>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.modalCancel}
              onPress={() => {
                setModalVisible(!modalVisible);
                dispatch(setBlur(false));
              }}
            >
              <Icon name="times" type="font-awesome-5" size={22} />
            </TouchableOpacity>
            <View style={styles.modalHeadingContainer}>
              <Text style={styles.modalHeading}>Inte än, men snart!</Text>
            </View>

            <Text style={styles.modalMessage}>
              I-Fix fixar inte på din adress riktigt än, men skickar ett mail
              till dig när det är dags!
            </Text>

            <View style={styles.buttonContainer}>
              <Button
                text="Skapa konto"
                color={PEACH}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  dispatch(setBlur(false));
                  navigation.navigate(SIGNUP_SCREEN);
                }}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
                dispatch(setBlur(false));
              }}
            >
              <Text style={styles.modalBottomText}>Testa en annan address</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <RegionsOfOperation />
        <ZipCodeForm />
      </ScrollView>
      <Blur />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_PEACH,
  },
  subContainer: {
    height: Dimensions.get('screen').height / 2,
  },
  title: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 33,
    letterSpacing: 1.4,
    color: EERIE_BLACK,
    marginTop: '15%',
    marginBottom: '22%',
    textAlign: 'center',
  },
  titlePeach: {
    color: PEACH,
  },
  upperLine2: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 32,
    color: EERIE_BLACK,
    textAlign: 'center',
    marginBottom: 20,
  },
  upperLine3: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 18,
    color: EERIE_BLACK,
    alignSelf: 'center',
    marginBottom: 10,
    width: '70%',
    lineHeight: 25,
  },
  pointerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '25%',
    marginVertical: 5,
  },
  pointerText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: BLACK,
    marginLeft: '5%',
  },
  lowerContainer: {
    height: Dimensions.get('screen').height / 2,
    paddingTop: '5%',
    backgroundColor: '#FFF3EF',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    elevation: 3,
  },
  inputHeading: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: BLACK,
    textAlign: 'center',
    marginTop: 10,
  },
  input: {
    marginHorizontal: '8%',
    marginVertical: 15,
    paddingLeft: 20,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#FF8686',
    borderRadius: 10,
    backgroundColor: WHITE,
    elevation: 1,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: BLACK,
    marginRight: 5,
  },
  peachText: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 15,
    color: '#B45555',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    marginHorizontal: '10%',
    backgroundColor: FLORAL_WHITE,
    borderRadius: 30,
    padding: 20,
    elevation: 5,
  },
  modalCancel: {
    alignItems: 'flex-end',
  },
  modalHeadingContainer: {
    marginVertical: 15,
    marginBottom: 20,
  },
  modalHeading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 22,
    color: BLACK,
    textAlign: 'center',
  },
  modalMessage: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: BLACK,
    textAlign: 'center',
    lineHeight: 25,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  modalBottomText: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: '#B45555',
    textAlign: 'center',
    marginBottom: 10,
  },
  headerLogo: {
    width: 120,
    height: 36,
    resizeMode: 'contain',
  },
});
