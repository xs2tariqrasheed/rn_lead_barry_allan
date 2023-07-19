import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Icon, CheckBox } from 'react-native-elements';
import { getUserCreds } from '../../helpers/userAuthHelper';
import { setErrorMessage, signIn } from '../../actions/auth.action';

import { setBlur } from '../../actions/blur.action';
import { requestResetToken } from '../../api/auth.api';
import { Button } from '../../components/common';
import { styles } from './style';
import {
  SIGNUP_SCREEN,
  SIGNUP_SCREEN_FIXER,
  RESET_PASSWORD_SCREEN,
} from '../../constants/screens';
import { PEACH } from '../../constants/colors';

export default () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const error = useSelector((state) => state.error);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [check, setCheck] = useState(false);

  const reset = () => {
    setModalVisible(!modalVisible);
    dispatch(setBlur(false));
    requestResetToken(email)
      .then(() => {
        navigation.navigate(RESET_PASSWORD_SCREEN, { email: email });
      })
      .catch(() => Alert.alert('Error!', 'Unable to proceed.'));
  };

  useEffect(() => {
    (async () => {
      const { mail, code } = await getUserCreds();
      setEmail(mail);
      setPassword(code);
    })();
    dispatch(setErrorMessage(false));
  }, []);

  return (
    <View style={styles.container}>
      <>
        {error && (
          <Text style={styles.alertText}>Email eller lösenord passar inte</Text>
        )}
      </>

      <Text style={styles.inputHeading}>Email</Text>
      <TextInput
        value={email}
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.inputHeading}>Lösenord</Text>
      <TextInput
        value={password}
        style={styles.input}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <View style={styles.inline}>
        <View style={styles.checkBoxContainer}>
          <CheckBox
            size={25}
            uncheckedColor={PEACH}
            checkedColor={PEACH}
            checked={check}
            onPress={() => setCheck(!check)}
          />
          <Text style={styles.checkText}>Kom ihåg mig.</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
            dispatch(setBlur(true));
          }}
        >
          <Text style={styles.forgotPasswordText}>Glömt lösenord?</Text>
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
              <Text style={styles.modalHeading}>Återställ lösenord</Text>
              <Text style={styles.modalHeading}>via återställningskod</Text>
            </View>
            <Text style={styles.modalEmail}>Din mail</Text>
            <TextInput
              value={email}
              style={styles.modalInput}
              placeholder="example@gmail.com"
              onChangeText={(text) => setEmail(text)}
            />
            <View style={styles.buttonContainer}>
              <Button
                text="Skicka kod"
                color={PEACH}
                onPress={reset}
                disabled={!email}
              />
            </View>
          </View>
        </View>
      </Modal>

      <Button
        text="Logga in"
        color={PEACH}
        onPress={() =>
          dispatch(
            signIn({
              email: email,
              password: password,
              userSession: check ? 'saved' : '',
            })
          )
        }
      />
      <Button
        text="Skapa konto"
        onPress={() => navigation.navigate(SIGNUP_SCREEN)}
      />

      <View style={styles.textContainer}>
        <Text style={styles.text}>Do you want to be a fixer?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(SIGNUP_SCREEN_FIXER)}
        >
          <Text style={styles.peachText}>Apply here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
