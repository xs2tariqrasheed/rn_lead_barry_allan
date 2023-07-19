import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUserRole } from '../../actions/auth.action';
import { Button } from '../../components/common';
import { styles } from './style';
import { PINK, PEACH } from '../../constants/colors';

export default () => {
  const dispatch = useDispatch();
  const [customer, setCustomer] = useState(true);
  const [worker, setWorker] = useState(false);
  const [admin, setAdmin] = useState(false);

  const selectCustomer = () => {
    setCustomer(true);
    setWorker(false);
    setAdmin(false);
  };

  const selectWorker = () => {
    setCustomer(false);
    setWorker(true);
    setAdmin(false);
  };

  const selectAdmin = () => {
    setCustomer(false);
    setWorker(false);
    setAdmin(true);
  };

  let userRole = customer ? 'customer' : worker ? 'worker' : 'admin';

  return (
    <View>
      <Text style={styles.lowerContainerHeading}>Hur kan vi hjälpa dig?</Text>
      <Text
        onPress={selectCustomer}
        style={[
          styles.customer,
          customer ? styles.selectedFont : styles.defaultFont,
        ]}
      >
        Jag behöver fixa!
      </Text>
      <Text
        onPress={selectWorker}
        style={[
          styles.worker,
          worker ? styles.selectedFont : styles.defaultFont,
        ]}
      >
        Fixer
      </Text>
      <Text
        onPress={selectAdmin}
        style={[styles.admin, admin ? styles.selectedFont : styles.defaultFont]}
      >
        Admin
      </Text>
      <Button
        text="Fortsätt"
        color={PEACH}
        onPress={() => {
          dispatch(setUserRole(userRole));
        }}
      />
    </View>
  );
};
