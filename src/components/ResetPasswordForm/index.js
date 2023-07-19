import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Icon } from 'react-native-elements';
import { setBlur } from '../../actions/blur.action';
import { resetPassword } from '../../api/auth.api';
import { Button } from '../../components/common';
import { styles } from './style';
import { PEACH } from '../../constants/colors';
import { LOGIN_SCREEN } from '../../constants/screens';

export default () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [resetCode, setResetCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    dispatch(setBlur(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reset = () => {
    resetPassword({
      token: resetCode,
      password: newPassword,
      confirmPassword: confirmPassword,
    })
      .then(() => {
        Alert.alert('Success!', 'Password has been reset');
        navigation.navigate(LOGIN_SCREEN);
      })
      .catch(() => Alert.alert('Error!', 'Unable to reset password'));
  };

  return (
    <View>
      <View style={styles.formContainer}>
        <Text style={styles.inputHeading}>Återställningskod</Text>
        <TextInput
          value={resetCode}
          style={styles.input}
          onChangeText={(text) => setResetCode(text)}
        />
        <Text style={styles.inputHeading}>Nytt lösenord</Text>
        <TextInput
          value={newPassword}
          secureTextEntry
          style={styles.input}
          onChangeText={(text) => setNewPassword(text)}
        />
        <Text style={styles.inputHeading}>Repetera nytt lösenord</Text>
        <TextInput
          value={confirmPassword}
          secureTextEntry
          style={styles.input}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      <Button
        text="OK"
        color={PEACH}
        onPress={() =>
          newPassword === confirmPassword
            ? reset()
            : Alert.alert('Error!', 'Password fields do not match')
        }
      />

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
            </View>

            <Text style={styles.modalMessage}>
              Vi har skickat en återställningskod till{' '}
              <Text style={styles.modalEmail}>{route.params.email}</Text>
            </Text>

            <View style={styles.buttonContainer}>
              <Button
                text="OK"
                color={PEACH}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  dispatch(setBlur(false));
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
