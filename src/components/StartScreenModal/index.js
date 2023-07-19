import React, { useEffect } from 'react';
import { View, Text, Modal } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'react-native-elements';
import { setNewUser } from '../../actions/auth.action';
import { setBlur } from '../../actions/blur.action';
import { Button } from '../common';
import { styles } from './style';
import { BLACK, PEACH } from '../../constants/colors';

export default () => {
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.auth.newUser);

  useEffect(() => {
    visible && dispatch(setBlur(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalHeadingContainer}>
            <Icon
              name="check-circle"
              type="font-awesome-5"
              color={BLACK}
              size={20}
              solid
              style={styles.modalIcon}
            />
            <Text style={styles.modalHeading}>Konto skapat!</Text>
          </View>

          <Text style={styles.modalSubHeading}>Börja fixa!</Text>

          <View style={styles.modalMessageContainer}>
            <Text style={styles.modalMessage}>
              Toppen, nu när du skapat ett konto kan du börja boka fixare för
              det du behöver ha hjälp med där hemma!
            </Text>
          </View>

          <View style={styles.modalButtonContainer}>
            <Button
              text="Börja fixa!"
              color={PEACH}
              onPress={() => {
                dispatch(setNewUser(false));
                dispatch(setBlur(false));
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
