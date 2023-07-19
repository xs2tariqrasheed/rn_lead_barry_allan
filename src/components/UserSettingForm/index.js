import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Alert,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Icon } from 'react-native-elements';
import { signOut } from '../../actions/auth.action';
import { setBlur } from '../../actions/blur.action';
import {
  getUserInfo,
  updateUserInfo,
  changePasswordRequest,
} from '../../api/auth.api';
import { Button } from '../common';
import { styles } from './style';
import { BLACK, PEACH } from '../../constants/colors';
import MessageModal from '../../components/Modals/MessageModal';

const ConfirmationModal = ({ confirmationModal, setConfirmationModal }) => {
  const dispatch = useDispatch();

  return (
    <Modal animationType="fade" transparent={true} visible={confirmationModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={[styles.modalHeadingContainer, styles.underlinedHeading]}
          >
            <Icon
              name="check-circle"
              type="font-awesome-5"
              color={BLACK}
              size={25}
              solid
              style={styles.modalIcon}
            />
            <Text style={[styles.modalHeading, styles.modalHeadingSmall]}>
              Lösenord ändrat
            </Text>
          </View>

          <Button
            text="OK"
            color={PEACH}
            onPress={() => {
              setConfirmationModal(!confirmationModal);
              dispatch(setBlur(false));
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);

  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [floor, setFloor] = useState('');
  const [portCode, setPortCode] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isBasicModal, setBasicModal] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const [bodyModal, setBodyModal] = useState('');

  useEffect(() => {
    getUserInfo()
      .then((res) => setUser(res.data))
      .catch(() => Alert.alert('Error!', 'Unable to get info'));
  }, []);

  const setUser = (user) => {
    setAddress(user.address);
    setTelephone(user.phone_no);
    setZipCode(user.postal_code);
    setCity(user.city);
    setFloor(user.floor);
    setPortCode(user.port_code);
  };

  const updateUser = () => {
    const data = {
      address: address,
      telephone: telephone,
      postalCode: zipCode,
      city: city,
      floor: floor,
      portCode: portCode,
    };

    updateUserInfo(data)
      .then(() => {
        setTitleModal('Ändringar sparade!');
        setBodyModal('Dina ändringar har sparats');
        setBasicModal(true);
      })
      .catch(() => {
        setTitleModal('Error!');
        setBodyModal('Unable to update');
        setBasicModal(true);
      });
  };
  function closeBasicModal(params) {
    setBasicModal(false);
  }
  const changePassword = () => {
    setModalVisible(!modalVisible);
    dispatch(setBlur(false));

    changePasswordRequest(currentPassword, newPassword)
      .then(() => {
        setConfirmationModal(!confirmationModal);
        dispatch(setBlur(true));
      })
      .catch(() => Alert.alert('Error!', 'Unable to change password'));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Dina uppgifter</Text>

      <View>
        <Text style={styles.inputLabel}>Telefonnummer</Text>
        <TextInput
          value={telephone}
          style={styles.input}
          onChangeText={(text) => setTelephone(text)}
        />
      </View>
      <View>
        <Text style={styles.inputLabel}>Adress</Text>
        <TextInput
          value={address}
          multiline={true}
          style={styles.input}
          onChangeText={(text) => setAddress(text)}
        />
      </View>
      <View>
        <Text style={styles.inputLabel}> Postnummer </Text>
        <TextInput
          value={zipCode}
          style={styles.input}
          onChangeText={(text) => setZipCode(text)}
        />
      </View>
      <View>
        <Text style={styles.inputLabel}>Stad</Text>
        <TextInput
          value={city}
          style={styles.input}
          onChangeText={(text) => setCity(text)}
        />
      </View>

      <View style={styles.inlineInputContainer}>
        <View style={styles.inlineInput}>
          <Text style={styles.inputLabel}>Våning</Text>
          <TextInput
            value={floor}
            style={[styles.input, styles.smallInput]}
            onChangeText={(text) => setFloor(text)}
          />
        </View>
        <View style={styles.inlineInput}>
          <Text style={styles.inputLabel}>Portkod</Text>
          <TextInput
            value={portCode}
            style={[styles.input, styles.smallInput]}
            onChangeText={(text) => setPortCode(text)}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
          dispatch(setBlur(true));
        }}
      >
        <Text style={styles.changePassword}>Ändra lösenord</Text>
      </TouchableOpacity>

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
              <Text style={styles.modalHeading}>Ändra lösenord</Text>
            </View>

            <Text style={styles.modalLabel}>Nuvarande lösenord</Text>
            <TextInput
              secureTextEntry
              style={styles.modalInput}
              onChangeText={(text) => setCurrentPassword(text)}
            />
            <Text style={styles.modalLabel}>Nytt lösenord</Text>
            <TextInput
              secureTextEntry
              style={styles.modalInput}
              onChangeText={(text) => setNewPassword(text)}
            />

            <View style={styles.modalButton}>
              <Button
                text="Ändra"
                color={PEACH}
                onPress={changePassword}
                disabled={!currentPassword || !newPassword}
              />
            </View>
          </View>
        </View>
      </Modal>

      <ConfirmationModal
        confirmationModal={confirmationModal}
        setConfirmationModal={setConfirmationModal}
      />

      <View style={styles.buttonContainer}>
        <Button text="Spara ändringar" color={PEACH} onPress={updateUser} />
        <Button text="Logga ut" onPress={() => dispatch(signOut())} />
      </View>
      <MessageModal
        visible={isBasicModal}
        closeModal={closeBasicModal}
        title={titleModal}
        body={bodyModal}
      />
    </ScrollView>
  );
};
