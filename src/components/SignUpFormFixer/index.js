import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { CheckBox } from 'react-native-elements';
import { signUpFixer } from '../../actions/auth.action';
import { Button } from '../../components/common';
import { styles } from './style';
import { PEACH, SOFT_RED } from '../../constants/colors';
import { TERMS_AND_CONDITIONS } from '../../constants/screens';

export default () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [check, setCheck] = useState(false);

  const [personalIdentityNumber, setPersonalIdentityNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [telephone, setTelephone] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [nationality, setNationality] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactNumber, setEmergencyContactNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [clearingNumber, setClearingNumber] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');

  const signup = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      personalIdentityNumber: personalIdentityNumber,
      telephone: telephone,
      address: address,
      postalCode: postalCode,
      city: city,
      nationality: nationality,
      emergencyContactName: emergencyContactName,
      emergencyContactNumber: emergencyContactNumber,
      bankName: bankName,
      clearingNumber: clearingNumber,
      bankAccountNumber: bankAccountNumber,
    };

    if (password === confirmPassword) {
      dispatch(signUpFixer(data));
    } else {
      Alert.alert('Error', 'Password does not match');
    }
  };

  return (
    <View style={styles.container}>
      <>
        <Text style={styles.inputLabel}>Email*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.inputLabel}>Password*</Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={styles.inputLabel}>Repeat Password*</Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </>

      <>
        <Text style={styles.subHeading}>Personal details</Text>

        <Text style={styles.inputLabel}>Personal identity number*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPersonalIdentityNumber(text)}
        />
        <Text style={styles.inputLabel}>Nationality*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNationality(text)}
        />
        <Text style={styles.inputLabel}>Firstname*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFirstName(text)}
        />
        <Text style={styles.inputLabel}>Lastname*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setLastName(text)}
        />
        <Text style={styles.inputLabel}>Telephone*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTelephone(text)}
        />
      </>

      <>
        <Text style={styles.subHeading}>Address Information</Text>

        <Text style={styles.inputLabel}>Address*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setAddress(text)}
        />
        <Text style={styles.inputLabel}>Postal Code*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPostalCode(text)}
        />
        <Text style={styles.inputLabel}>City*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCity(text)}
        />
      </>

      <>
        <Text style={styles.subHeading}>Emergency contact</Text>

        <Text style={styles.inputLabel}>Name of emergency contact*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmergencyContactName(text)}
        />
        <Text style={styles.inputLabel}>Telephone of emergency contact*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmergencyContactNumber(text)}
        />
      </>

      <>
        <Text style={styles.subHeading}>Bank Details</Text>

        <Text style={styles.inputLabel}>Bank name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setBankName(text)}
        />
        <Text style={styles.inputLabel}>Clearing number</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setClearingNumber(text)}
        />
        <Text style={styles.inputLabel}>Bank account number</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setBankAccountNumber(text)}
        />
      </>

      <View style={styles.checkContainer}>
        <CheckBox
          size={25}
          uncheckedColor={SOFT_RED}
          checkedColor={SOFT_RED}
          checked={check}
          onPress={() => setCheck(!check)}
        />
        <View>
          <Text style={styles.checkText}>Yes, I agree to the</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(TERMS_AND_CONDITIONS)}
          >
            <Text style={styles.pinkText}>terms & conditions.</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Button text="Proceed application" color={PEACH} onPress={signup} />
    </View>
  );
};
