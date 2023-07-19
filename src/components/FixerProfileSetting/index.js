import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { useDispatch } from 'react-redux';
import styles from './styles';
import { Icon } from 'react-native-elements'
import {lightOrange} from '../../constants/colors'
import { TouchableOpacity, Image } from 'react-native';
import TextField from '../../components/TextField'
import * as ImagePicker from 'expo-image-picker';
import { signOut } from '../../actions/auth.action';
import { Button } from '../../components/common';
import InfoModal from '../Modals/InfoModal'
import ChangePassModal from '../Modals/ChangePass';
import { updateProfile } from '../../api/profile.api';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
    getUserInfo,
    updateUserInfo,
    changePasswordRequest,
  } from '../../api/auth.api';
import { FIXER_START_SCREEN } from '../../constants/screens';
export default () => {
    const route = useRoute();
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [imgURL, setImgData] = useState('');
    const [imgHref, setImgHref] = useState('');
    const [phNum, setPhoneNum] = useState('')
    const [first_name, setFirstName] = useState('')
    
    const [address, setAddress] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [city, setCity] = useState('')
    const [emergencyContact, setEmergencyContact] = useState('')
    const [emergencyContactPerson, setEmergencyContactPerson] = useState('')
    const [bankName, setBankName] = useState('')
    const [clearingNumber, setClearingNumber] = useState('')
    const [bankAcc, setBankAcc] = useState('')
    const [showChangedModal, setChangedModal] = useState(false)
    const [showPasswordModal , setChangePassword] = useState(false)
    const [hasChanged , setChanged] = useState(true)
    

    useEffect(() => {
        getUserInfo()
          .then((res) => {setUser(res.data); console.log(res.data)})
          .catch(() => alert('Unable to get info'));
      }, []);
      const setUser = (user) => {
        setFirstName(user.first_name);
        setPhoneNum(user.phone_no);
        setAddress(user.address);
        setPostalCode(user.port_code);
        setCity(user.city);
        setEmergencyContact(user.emergency_contact_number);
        setEmergencyContactPerson(user.emergency_contact_name);
        setBankName(user.bank_name);
        setBankAcc(user.bank_account_number);
        setImgHref("");
        setImgHref(user.avatar.url);
      
      };
   
    const selectImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.cancelled) {
            setImgData(result)
            setImgHref(result.uri)
            setChanged(false)
           
        }
      };
    const closeModal_setting =()=>{
        setChangedModal(false)   
    }
    const closePasswordModal=()=>{
        setChangePassword(false)
    }
const handleProfile =()=>{
    var RandomNumber = Math.floor(Math.random() * 10000) + 99 ;
    let formData = new FormData()
    formData.append('first_name',"Michel")
    formData.append('phone_no',phNum)
    formData.append('address',address)
    formData.append('postal_code',postalCode)
    formData.append('city',city)
    formData.append('bank_account_number',bankAcc)
    formData.append('bank_name',bankName)
    formData.append('emergency_contact_name',emergencyContactPerson)
    formData.append('emergency_contact_number',emergencyContact)
    formData.append('avatar' ,{
        name: first_name+"-"+RandomNumber,
        type: "image/png",
        uri: imgURL.uri,
      })
    console.log(formData);
    updateProfile(formData).then((res)=>{
        if(res.data.status == "success"){
            setChangedModal(true)
        }
    }).catch((error) => {
        console.log(error)
    })
}
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imgView}
                onPress={() => selectImage()}
            >
                {imgHref ?
                    <Image
                        source={{ uri: imgHref }}
                        style={styles.imgStyle}
                    />
                    :
                    <View>
                        <Icon
                            name={'user-alt'}
                            type={'font-awesome-5'}
                            size={30}
                            color={lightOrange}
                        />
                        <Text style={styles.addPhoto}>{'+ Add Photo'}</Text>
                    </View>
                }
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.contactHeading}>Kontakt</Text>
                <Text style={styles.telHeading}>Telefon</Text>
                <TextField
                    placeholder={'Phone Number'}
                    onChangeText={(text) => {setPhoneNum(text); setChanged(false)}}
                    value={phNum}
                    autoCapitalize={'none'}
                    keyboardType={'number-pad'}
                    textFieldStyle={{ marginTop: 5 }}
                />

                <Text style={styles.addressHeading}>Adress</Text>
                <TextField
                    placeholder={'Address'}
                    onChangeText={(text) => {setAddress(text); setChanged(false)}}
                    value={address}
                    autoCapitalize={'none'}
                    textFieldStyle={{ marginTop: 5 }}
                />

                <Text style={styles.addressHeading}>Postnummer</Text>
                <TextField
                    placeholder={'Postal code'}
                    onChangeText={(text) => {setPostalCode(text); setChanged(false)}}
                    value={postalCode}
                    autoCapitalize={'none'}
                    textFieldStyle={{ marginTop: 5 }}
                />

                <Text style={styles.addressHeading}>Stad</Text>
                <TextField
                    placeholder={'City'}
                    onChangeText={(text) => {setCity(text); setChanged(false)}}
                    value={city}
                    autoCapitalize={'none'}
                    textFieldStyle={{ marginTop: 5 }}
                />
            </View>

            <View style={styles.content}>
                <Text style={styles.contactHeading}>Emergency contact</Text>
                <Text style={styles.telHeading}>Name of emergency contact</Text>
                <TextField
                    placeholder={'Type here'}
                    onChangeText={(text) => {setEmergencyContactPerson(text); setChanged(false)}}
                    value={emergencyContactPerson}
                    autoCapitalize={'none'}
                    textFieldStyle={{ marginTop: 5 }}
                />

                <Text style={styles.addressHeading}>Telephone of emergency contact</Text>
                <TextField
                    placeholder={'Type here'}
                    onChangeText={(text) => {setEmergencyContact(text); setChanged(false)}}
                    value={emergencyContact}
                    autoCapitalize={'none'}
                    textFieldStyle={{ marginTop: 5 }}
                />

            </View>

            <View style={[styles.content]}>
                <Text style={styles.contactHeading}>Bank Details</Text>
                <Text style={styles.telHeading}>Bank name</Text>
                <TextField
                    placeholder={'Type here'}
                    onChangeText={(text) => {setBankName(text); setChanged(false)}}
                    value={bankName}
                    autoCapitalize={'none'}
                    textFieldStyle={{ marginTop: 5 }}
                />

                <Text style={styles.addressHeading}>Clearing number</Text>
                <TextField
                    placeholder={'Type here'}
                    onChangeText={(text) => {setClearingNumber(text); setChanged(false)}}
                    value={clearingNumber}
                    autoCapitalize={'none'}
                    textFieldStyle={{ marginTop: 5 }}
                />

                <Text style={styles.addressHeading}>Bank account number</Text>
                <TextField
                    placeholder={'Type here'}
                    onChangeText={(text) => {setBankAcc(text); setChanged(false)}}
                    value={bankAcc}
                    autoCapitalize={'none'}
                    textFieldStyle={{ marginTop: 5 }}
                />
            </View>

            <View style={styles.content}>
                <TouchableOpacity
                 onPress={()=>{setChangePassword(true); setChanged(false)}}
                >
                <Text style={styles.changePass}>Change password</Text>
                </TouchableOpacity>

                <View style={{ marginTop: 20,}}>
                    <Button
                    disabled={hasChanged}
                        text="Spara ändringar"
                        color={lightOrange}
                        btnStyle={{width:'100%',alignSelf:'center'}}
                        onPress={() => {
                             handleProfile()
                            
                        }}
                    />
                    <Button
                        text="Logga ut"
                        btnStyle={{width:'100%',alignSelf:'center'}}
                        onPress={() => dispatch(signOut())}
                    />
                </View>
            </View>

            <InfoModal
             visible={showChangedModal}
             iconName={'checkcircle'}
             iconType={'AntDesign'}
             infoText={'Changes Saved'}
             handleSaveChanges={closeModal_setting}
         />
         <ChangePassModal
          visible={showPasswordModal}
          closeModal ={closePasswordModal}
         />
        </View>
    )
}