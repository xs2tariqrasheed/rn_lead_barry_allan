import React, {useEffect, useState} from 'react';
import { Text, TouchableOpacity ,View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Overlay } from 'react-native-elements';
import { signOut } from '../../actions/auth.action';
import { styles } from './style';
import {appColor} from '../../constants/colors'
import { getUserSession, getUserToken } from '../../helpers/userAuthHelper';
import { useNavigation } from '@react-navigation/native';
import {  ABOUT_US_SCREEN,
  CONTACT_SCREEN,
  FAQ_SCREEN,
  TERMS_AND_CONDITIONS } from '../../constants/screens';

export default ({
  visible,
  toggle,
  aboutPress,
  contactPress,
  policyPress,
  FAQPress,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isFixer, setIsFixer] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userRole, setUserRole] = useState("customer");
  useEffect(() => {
    (async function () {
      const headers = await getUserToken();
      const session = await getUserSession();
        console.log(headers.userRole)
        if(headers.userRole == "worker"){
          setIsFixer(true);
        }
        if(headers.userRole == "customer"){
          setIsCustomer(true);
        }
        if(headers.userRole == "admin"){
          setIsAdmin(true);
        }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={toggle}
      overlayStyle={styles.overlay}
      backdropStyle={styles.backdrop}
    >
    {isCustomer ? (
<View style={{width:"100%"}}>
<TouchableOpacity onPress={() => { toggle(); navigation.navigate(ABOUT_US_SCREEN)}}>
        <Text style={styles.overlayItem}>Om oss</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {toggle(); navigation.navigate(FAQ_SCREEN)} }>
        <Text style={styles.overlayItem}>FAQ</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {toggle(); navigation.navigate(CONTACT_SCREEN)}}>
        <Text style={styles.overlayItem}>Kontakt</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {toggle(); navigation.navigate(TERMS_AND_CONDITIONS)}}>
        <Text style={styles.overlayItem}>Villkor</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(signOut())}>
        <Text style={[styles.overlayItem, styles.pinkText]}>Logga ut</Text>
      </TouchableOpacity>
</View>
    ) : isFixer ? (
      <View style={{width:"100%"}}>

      <TouchableOpacity onPress={() => {toggle(); navigation.navigate(FAQ_SCREEN)} }>
        <Text style={styles.overlayItem}>FAQ</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {toggle(); navigation.push(CONTACT_SCREEN)}}>
        <Text style={styles.overlayItem}>Kontakt</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {toggle(); navigation.push(TERMS_AND_CONDITIONS)}}>
        <Text style={styles.overlayItem}>Villkor</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(signOut())}>
        <Text style={[styles.overlayItem, styles.pinkText]}>Logga ut</Text>
      </TouchableOpacity>
</View>
    ) : isAdmin ? (
      <View style={{width:"100%"}}>
<TouchableOpacity onPress={() => {toggle(); navigation.push(TERMS_AND_CONDITIONS)}}>
  <Text style={styles.overlayItem}>Villkor</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => dispatch(signOut())}>
  <Text style={[styles.overlayItem, styles.pinkText]}>Logga ut</Text>
</TouchableOpacity>
</View>
    ) : null}
    
    </Overlay>
  );
};
