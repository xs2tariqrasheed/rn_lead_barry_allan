import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { CheckBox, Icon } from 'react-native-elements';
import { signUp } from '../../actions/auth.action';
import { setBlur } from '../../actions/blur.action';
import { Button } from '../../components/common';
import { styles } from './style';
import { FUZZY_BROWN, PEACH } from '../../constants/colors';
import { TERMS_AND_CONDITIONS } from '../../constants/screens';

const PersonalNumberPopup = ({ modalVisible, setModalVisible }) => {
  const dispatch = useDispatch();

  return (
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
            <Text style={styles.modalHeading}>Personnummer och RUT</Text>
          </View>

          <View style={styles.modalMessageContainer}>
            <Text style={[styles.modalMessage, styles.modalBoldText]}>
              Du kan hoppa över detta fält om du INTE vill utnyttja din RUT.
            </Text>
            <Text style={styles.modalMessage}>
              För att i-fix ska kunna hantera din ansökan om RUT-avdrag behöver
              vi ett fullständigt personnummer till den person som helt eller
              delvis bor i bostaden där tjänsten utförs, dvs. på den adress du
              angett i beställningen. Så om du exempelvis beställer en tjänst åt
              någon annan så skriver du den personens adress och personnummer.
            </Text>
          </View>

          <View style={styles.modalMessageContainer}>
            <Text style={[styles.modalMessage, styles.modalSmallText]}>
              Läs mer om regler och vad som gäller RUT avdrag på{' '}
              <Text style={styles.modalBrownText}>Skatteverkets hemsida.</Text>
            </Text>
          </View>

          <View style={styles.modalButtonContainer}>
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
  );
};

export default () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [check, setCheck] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [socialSecurityNumber, setSocialSecurityNumber] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [location, setLocation] = useState('');
  const [floor, setFloor] = useState('');
  const [portCode, setPortCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const signup = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      telephone: telephone,
      socialSecurityNumber: socialSecurityNumber,
      streetAddress: streetAddress,
      zipCode: zipCode,
      location: location,
      floor: floor,
      portCode: portCode,
      password: password,
      confirmPassword: confirmPassword,
    };
    if (!check) {
      Alert.alert('Sorry', 'Please accept the terms and conditions');
    } else {
      if (password === confirmPassword) {
        dispatch(signUp(data));
      } else {
        Alert.alert('Error', 'Password does not match');
      }
    }

  };

  return (
    <>
      <View>
        <Text style={styles.inputLabel}>Förnamn*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFirstName(text)}
        />
      </View>
      <View>
        <Text style={styles.inputLabel}>Efternamn*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setLastName(text)}
        />
      </View>
      <View>
        <Text style={styles.inputLabel}>Email*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View>
        <Text style={styles.inputLabel}>Telefon*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTelephone(text)}
        />
      </View>
      <View>
        <View style={styles.inline}>
          <Text style={styles.inputLabel}>Personr. för RUT-ansökan</Text>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
              dispatch(setBlur(true));
            }}
          >
            <Icon
              name="question-circle"
              type="font-awesome-5"
              color="#B45555"
              size={18}
              solid
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSocialSecurityNumber(text)}
        />
      </View>

      <PersonalNumberPopup
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <View style={styles.textContainer}>
        <Text style={styles.textHeading}>Addressuppgifter</Text>
        <Text style={styles.text}>
          Behöver du hjälp på annan adress kan du lägga till det i ett senare
          steg.{' '}
          <Text style={styles.boldText}>
            OBS! Du kan bara få RUT-avdrag på din hemadress.
          </Text>
        </Text>
      </View>

      <View>
        <Text style={styles.inputLabel}>Gatuadress*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setStreetAddress(text)}
        />
      </View>
      <View>
        <Text style={styles.inputLabel}>Postnummer*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setZipCode(text)}
        />
      </View>
      <View>
        <Text style={styles.inputLabel}>Ort*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setLocation(text)}
        />
      </View>

      <View style={styles.inlineInputContainer}>
        <View style={styles.inlineInput}>
          <Text style={styles.inputLabel}>Våning</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setFloor(text)}
          />
        </View>
        <View style={styles.inlineInput}>
          <Text style={styles.inputLabel}>Portkod</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPortCode(text)}
          />
        </View>
      </View>

      <View style={styles.passwordContainer}>
        <>
          <Text style={styles.inputLabel}>Välj lösenord*</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
        </>
        <>
          <Text style={styles.inputLabel}>Repetera lösenord*</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </>
      </View>

      <View style={styles.checkContainer}>
        <CheckBox
          size={25}
          uncheckedColor={FUZZY_BROWN}
          checkedColor={FUZZY_BROWN}
          checked={check}
          onPress={() => setCheck(!check)}
        />
        <View>
          <Text style={styles.checkText}>Ja, jag samtycker till</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(TERMS_AND_CONDITIONS)}
          >
            <Text style={styles.pinkText}>användarvillkoren.</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button text="Skapa konto" color={PEACH} onPress={signup} />
      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>eller</Text>
        <TouchableOpacity onPress={navigation.goBack}>
          <Text style={styles.bottomPinkText}>Logga in</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
