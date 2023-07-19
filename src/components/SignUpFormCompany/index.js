import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements';
import { signUpCompany } from '../../actions/auth.action';
import { Button } from '../../components/common';
import { styles } from './style';
import { FUZZY_BROWN, PEACH } from '../../constants/colors';
import { LOGIN_SCREEN, TERMS_AND_CONDITIONS } from '../../constants/screens';

export default () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [check, setCheck] = useState(false);
  const [organizationNumber, setOrganizationNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [location, setLocation] = useState('');
  const [floor, setFloor] = useState('');
  const [portCode, setPortCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signup = () => {
    const data = {
      organizationNumber: organizationNumber,
      firstName: firstName,
      lastName: lastName,
      email: email,
      telephone: telephone,
      streetAddress: streetAddress,
      zipCode: zipCode,
      location: location,
      floor: floor,
      portCode: portCode,
      password: password,
      confirmPassword: confirmPassword,
    };
    if(!check){
      Alert.alert('Sorry', 'Please accept the terms and conditions');
    }else{
      if (password === confirmPassword) {
        dispatch(signUpCompany(data));
      } else {
        Alert.alert('Error', 'Password does not match');
      }
    }
    
  };

  return (
    <View>
      <>
        <Text style={styles.inputLabel}>Organisationsnummer*</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setOrganizationNumber(text)}
        />
      </>

      <>
        <Text style={styles.heading}>Uppgifter kring kontaktperson</Text>
        <View>
          <Text style={styles.inputLabel}>Förnamn*</Text>
          <TextInput
            value={firstName}
            style={styles.input}
            onChangeText={(text) => setFirstName(text)}
          />
        </View>
        <View>
          <Text style={styles.inputLabel}>Efternamn*</Text>
          <TextInput
            value={lastName}
            style={styles.input}
            onChangeText={(text) => setLastName(text)}
          />
        </View>
        <View>
          <Text style={styles.inputLabel}>Email*</Text>
          <TextInput
            value={email}
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View>
          <Text style={styles.inputLabel}>Telefonnummer*</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setTelephone(text)}
          />
        </View>
      </>

      <View style={styles.textContainer}>
        <Text style={styles.textHeading}>Addressuppgifter kontor</Text>
        <Text style={styles.text}>
          Behöver du hjälp på annan adress kan du lägga till det i ett senare
          steg.
        </Text>
      </View>

      <>
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
      </>

      <View style={styles.passwordContainer}>
        <>
          <Text style={styles.inputLabel}>Välj lösenord*</Text>
          <TextInput
            value={password}
            style={styles.input}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
        </>
        <>
          <Text style={styles.inputLabel}>Repetera lösenord*</Text>
          <TextInput
            value={confirmPassword}
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
        <TouchableOpacity onPress={() => navigation.navigate(LOGIN_SCREEN)}>
          <Text style={styles.bottomPinkText}>Logga in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
