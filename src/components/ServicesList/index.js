import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from '../common';
import { styles } from './style';
import { CART_SCREEN } from '../../constants/screens';
import { getUserInfo } from '../../api/auth.api';

export default ({ services }) => {
  console.log(">>>")
  console.log(services)
  const navigation = useNavigation();
  const [user, setUser] = useState({});
  useEffect(() => {
    getUserInfo()
      .then((res) => {
        setUser(res.data);
        console.log("--------")
        console.log(res.data)
      })
      .catch(() => Alert.alert('Error!', 'Unable to get info'));
  }, []);
  return (
    <ScrollView>
      <View style={styles.textContainer}>
        {/* <Text style={styles.heading}>Vad ska fixas?</Text> */}
        <Text style={styles.text}>
        Välj en eller fler tjänster som vi ska fixa åt dig:
        </Text>
      </View>

      {services.map((item) => {
  let price = '';

if(user.organization_number == null){
        let exact_price = 0;
        if(item.title === "Däckbyte hos dig" || item.title === "Biltvätten hos dig"){
          exact_price = item.prices[0]; 
          
        }else{
          exact_price = parseFloat(item.prices[0]) / 2; 
        }
          item.title === 'Hänga upp hyllor' || item.title === 'Möbelmontering' || item.title === 'Kratta löv'
            ?price = `${exact_price} kr/h`
            : price = `fr. ${exact_price}kr`;
}else{
     
          item.title === 'Hänga upp hyllor' || item.title === 'Möbelmontering' || item.title === 'Kratta löv'
            ?price = `${item.prices[0]} kr/h`
            : price = `fr. ${item.prices[0]}kr`;
}
       
        return (
          <Card
            key={item.id}
            text={item.title}
            isCompany={user.organization_number == null ? false : true}
            desc={price}
            color={item.color}
            iconName={item.icon}
            onPress={() => navigation.navigate(CART_SCREEN, { service: item })}
          />
        );
      })}
    </ScrollView>
  );
};
