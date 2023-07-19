import React, { useEffect,useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
  Platform,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { CheckBox, Icon } from 'react-native-elements';
import { deleteBooking, updateBooking } from '../../actions/bookings.action';
import { setBlur } from '../../actions/blur.action';
import { checkZipCode } from '../../api/zip.api';
import { changeAddressRequest } from '../../api/bookings.api';
import { timeParsed } from '../../utils/time';
import RUTModal from '../RUTModal';
import { Button } from '../common';
import { styles } from './style';
import { PEACH, SOFT_RED } from '../../constants/colors';
import { TERMS_AND_CONDITIONS } from '../../constants/screens';
import { fetchAllZones } from '../../api/admin.api';
import { getUserInfo } from '../../api/auth.api';

const AddressModal = ({ addressModal, setAddressModal, bookings, setNew }) => {
  const dispatch = useDispatch();
  const [modalCheck, setModalCheck] = useState(false);
  const [infoModalVisible, setParentsInfoModal] = useState(false);

  const [zipCode, setZipCode] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [address, setAddress] = useState('');
  const [floor, setFloor] = useState('');
  const [portCode, setPortCode] = useState('');
  const [available, setAvailable] = useState(true);
  const [messageModalVisible, setmessageModal] = useState(false);
  const [messageModalHeader, setmessageHeader] = useState('');
  const [messageModalText, setmessageText] = useState('');
  const [useRut, setUseRut] = useState(false);
  const [zipCodeErr, setZipCodeErr] = useState(null);
  const [portCodeErr, setPortCodeErr] = useState(null);
  const [streetAddrErr, setStreetAddrErr] = useState(null);
  const [addrErr, setAddrErr] = useState(null);
  const [floorErr, setFloorErr] = useState(null);
  const [readySubmit, setReadySubmit] = useState(false);

  const [activeZones, setActiveZones] = useState([]);

 

  const changeAddress = () => { 
    let ready = false;
    if(!zipCode){
      setZipCodeErr("required")
      ready= false
    }
   
    if(!streetAddress){
      ready= false

      setStreetAddrErr("required")
    }else{
      ready= true

      setStreetAddrErr(null)

    }
    if(!address){
      ready= false

      setAddrErr("required")
    }else{
      ready= true

      setAddrErr(null)

    }
    if(!floor){
      ready= false

      setFloorErr("required")
    }else{
      ready= true

      setFloorErr(null)

    }
    if(!portCode){
      ready= false

      setPortCodeErr("required")
    }else{
      ready= true

      setPortCodeErr(null)

    }

    if(zipCode){
      fetchAllZones() 
      .then((res) => {
        let data = res.data;
        data = data.filter(function(item){
          return item.is_active == true && item.post_code == zipCode;
       });
       if(data.length == 0){
      ready= false

        setZipCodeErr("Denna zon är inte aktiv just nu")
       }else{
        setZipCodeErr(null)
      if(ready){
        setNew(streetAddress)
        setZipCodeErr(null)
        const data = {
          zipCode: zipCode,
          streetAddress: streetAddress,
          address: address,
          floor: floor,
          portCode: portCode,
          is_parent: modalCheck
        };
        checkZipCode(data.zipCode)
        .then(async (res) => {
          console.log(res)
          if (res.data.success) {
            setAddressModal(!addressModal);
            dispatch(setBlur(false));
            let notSent = true;
            await bookings.forEach((booking) => {
              changeAddressRequest(data, booking.id)
                .then(() => {
      
                  if(notSent){
                    setZipCodeErr(null)
                    setStreetAddrErr(null)
                    setAddrErr(null)
                    setFloorErr(null)
                    setPortCodeErr(null)
                    if(!addressModal){
                    setmessageHeader("Adress ändrad")
                    setmessageText("Adress uppdaterad")
                    setmessageModal(!messageModalVisible)
                    }
                    // setZipCodeErr(null)
                    
                  }
                  notSent = false;
                })
                .catch(() => {
                  if(notSent){
                    setmessageHeader("Error!")
                    setmessageText("Kan inte ändra adress")
                    setmessageModal(!messageModalVisible)
                  }
                  notSent = false;
                });
            });
          } else {
            setAvailable(false);
            setAddressModal(!addressModal)
          }
        })
        .catch(() => {
          Alert.alert('Error!', 'Unable to proceed');
          setAddressModal(!addressModal);
          dispatch(setBlur(false));
          setAvailable(true);
        });

      }

       
       }
      })
      .catch((err) => {
        setZipCodeErr(null)

        Alert.alert('Kunde inte hitta alla zoner', err);
      });
    }
 

   
  };
  return (
    <Modal animationType="fade" transparent={true} visible={addressModal}>
      <View style={styles.centeredView}>
        <ScrollView
          contentContainerStyle={[
            styles.modalView,
            Platform.OS === 'ios' && styles.modalTopMargin,
          ]}
        >
          <TouchableOpacity
            style={styles.modalCancel}
            onPress={() => {
              setAddressModal(!addressModal);
              setZipCodeErr(null)
              setStreetAddrErr(null)
              setAddrErr(null)
              setFloorErr(null)
              setPortCodeErr(null)
              dispatch(setBlur(false));
              setAvailable(true);
            }}
          >
            <Icon name="times" type="font-awesome-5" size={22} />
          </TouchableOpacity>

          <View style={styles.modalHeadingContainer}>
            <Text style={styles.modalHeading}>
              Skriv in den address där jobbet ska utföras
            </Text>
          </View>

          {available && (
            <View style={styles.modalCheckContainer}>
              <CheckBox
                size={25}
                uncheckedColor={SOFT_RED}
                checkedColor={SOFT_RED}
                checked={modalCheck}
                onPress={() => setModalCheck(!modalCheck)}
              />
              <Text style={styles.modalCheckText}>
                Det här är mina föräldrars bostad
              </Text>
              <TouchableOpacity
                onPress={() => setParentsInfoModal(!infoModalVisible)}
              >
                <Icon
                  name="question-circle"
                  type="font-awesome-5"
                  color="#B45555"
                  size={18}
                  solid
                />
              </TouchableOpacity>
            </View>
          )}

          <View>
            <Text style={styles.inputLabel}>Postnummer*</Text>
            <TextInput
              multiline={true}
              style={styles.input}
              onChangeText={(text) => setZipCode(text)}
            />
            <Text style={styles.errorInput}>{zipCodeErr}</Text>

          </View>

          {!available && (
            <Text style={styles.lineText}>
              Ifix fixar inte på den här addressen än.
            </Text>
          )}

          <View style={!available && styles.opacity}>
            <View>
              <Text style={styles.inputLabel}>Gatuadress*</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setStreetAddress(text)}
              />
            <Text style={styles.errorInput}>{streetAddrErr}</Text>

            </View>
            <View>
              <Text style={styles.inputLabel}>Ort*</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setAddress(text)}
              />
            <Text style={styles.errorInput}>{addrErr}</Text>

            </View>

            <View style={{flexDirection:"row"}}>
            <View style={styles.inlineInput}>
              <Text style={styles.inputLabel}>Vaning*</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setFloor(text)}
              />
            <Text style={styles.errorInput}>{floorErr}</Text>

              </View>

              <View style={styles.inlineInput}>
              <Text style={styles.inputLabel}>PortKod*</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setPortCode(text)}
              />
            <Text style={styles.errorInput}>{portCodeErr}</Text>

              </View>
            </View>
             
            
          </View>

          <View style={styles.modalButtonContainer}>
            <Button
              text="OK"
              color={PEACH}
              onPress={changeAddress}
              disabled={!available}
            />
          </View>
        </ScrollView>
      </View>

      <Modal animationType="fade" transparent={true} visible={infoModalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.modalCancel}
              onPress={() => setParentsInfoModal(!infoModalVisible)}
            >
              <Icon name="times" type="font-awesome-5" size={22} />
            </TouchableOpacity>

            <View style={styles.infoModalHeadingContainer}>
              <Text style={styles.modalHeading}>Boka åt förälder med RUT</Text>
            </View>

            <View style={styles.modalMessageContainer}>
              <Text style={styles.modalMessage}>
                Du kan utföra en RUT-berättigad tjänst på dina föräldrars
                folkbokförings adress, men göra RUT-avdraget på ditt
                personnummer (om du är över 18 år).
              </Text>
              <Text style={styles.modalMessage}>
                Skriv isf ditt personnummer men dina föräldrars adress när du
                bokar, samt bocka för “Tjänsten utförs i mina föräldrars
                bostad”.
              </Text>
            </View>

            <View style={styles.modalMessageContainer}>
              <Text style={styles.modalMessage}>
                Läs mer om regler och vad som gäller RUT avdrag på{' '}
                <Text style={styles.modalBrownText}>Skatteverkets hemsida</Text>
              </Text>
            </View>

            <View style={styles.modalButtonContainer}>
              <Button
                text="OK"
                color={PEACH}
                onPress={() => setParentsInfoModal(!infoModalVisible)}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Modal animationType="fade" transparent={true} visible={messageModalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.modalCancel}
              onPress={() => {setmessageModal(!messageModalVisible); setAddressModal(!AddressModal)}}
            >
              <Icon name="times" type="font-awesome-5" size={22} />
            </TouchableOpacity>

            <View style={styles.infoModalHeadingContainer}>
              <Text style={styles.modalHeading}>{messageModalHeader}</Text>
            </View>

            <View style={styles.modalMessageContainer}>
              <Text style={styles.modalMessage}>
               {messageModalText}
              </Text>
             
            </View>


            <View style={styles.modalButtonContainer}>
              <Button
                text="OK"
                color={PEACH}
                onPress={() => {setmessageModal(!messageModalVisible); setAddressModal(!AddressModal)}}
              />
            </View>
          </View>
        </View>
      </Modal>
    </Modal>
  );
};
export default ({ bookings, termsHandler }) => {
  const navigation = useNavigation();
  const services = useSelector((state) => state.services);
  const dispatch = useDispatch();

  // bookings = bookings.filter((booking) => booking.status === 'pending');

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [addressModal, setAddressModal] = useState(false);
  const [isCarService, setCarService] = useState(false);
  const [changedAddr, setChangedAddr] = useState('');
  const [user, setUser] = useState({});
  bookings = bookings.filter((booking) => booking.status === 'pending');
  bookings.forEach(function(booking,index){  
    booking.use_rut = check1; 
  });
  useEffect(() => {
    getUserInfo()
      .then((res) => {
        setUser(res.data);
       
      })
      .catch(() => Alert.alert('Error!', 'Unable to get info'));
  }, []);

  const setNewAddress = (selected) => {
    setChangedAddr(selected)
  };
  const totalPrice = () => {
    if (!bookings || bookings.length === 0) {
      return 0;
    }

    return bookings
      .map((booking,i) => {
        const service = services.find((s) => s.id === booking.service_id);


        return booking.status === 'pending'
          ? service.price_type === 'per_unit'
            ? service.prices[booking.quantity - 1]
            : service.price * booking.quantity
          : 0;
      })
      .reduce((b1, b2) => b1 + b2);
  };

  const displayBooking = (booking) => {
    const service = services.find((s) => s.id === booking.service_id);
    if(!isCarService){
      if(service.icon == "car-side" || service.icon == "dot-circle"){
        setCarService(true)
      }
    }

    const { month, date, time } = timeParsed(booking.appointment_at);

    return (
      <View key={booking.id} style={styles.subContainer}>
        <View style={styles.row}>
          <Text style={styles.leftText}>
            {booking.quantity} x {service.title}
          </Text>
          <TouchableOpacity onPress={() => dispatch(deleteBooking(booking))}>
            <Icon name="times" type="font-awesome-5" size={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Text style={styles.left}>Antal</Text>
          <View style={styles.rightContainer}>
            <TouchableOpacity
              onPress={() =>
                booking.quantity > 1 &&
                dispatch(updateBooking(booking, 'decrement'))
              }
            >
              <Icon
                name="minus-circle"
                type="font-awesome-5"
                size={22}
                color="#EF8C89"
              />
            </TouchableOpacity>
            <Text style={styles.right}>{booking.quantity}</Text>
            <TouchableOpacity
              onPress={() =>
                service.prices
                  ? booking.quantity < service.prices.length &&
                    dispatch(updateBooking(booking, 'increment'))
                  : dispatch(updateBooking(booking, 'increment'))
              }
            >
              <Icon
                name="plus-circle"
                type="font-awesome-5"
                size={22}
                color={PEACH}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.left}>Datum</Text>
          <Text style={styles.right}>
            {month} {date}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.left}>Tid</Text>
          <Text style={styles.right}>{time}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.left}>Pris</Text>
          <Text style={styles.right}>
            {service.prices[booking.quantity - 1]} kr
          </Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {bookings.length === 0 && (
        <View style={styles.topTextContainer}>
          <Text style={styles.topText}>Inga tjänster tillagda</Text>
        </View>
      )}

      {bookings.map((booking) => displayBooking(booking))}

      <View style={styles.midContainer}>
        <Text style={styles.midLine1}>Total ink moms: {totalPrice()} kr</Text>
        <Text style={styles.midLine2}>Varav moms 25%</Text>
      </View>
      { user?.organization_number == null ? !isCarService ? (
        <View style={[styles.coloredLine, styles.totalSum]}>
        <Text style={styles.coloredLine1}>Med RUT-avdrag</Text>
        <Text style={styles.coloredLine2}>Total sum. {totalPrice()/2} kr</Text>
      </View>
      ) : null : (
        <View style={[styles.coloredLine, styles.totalSum]}>
        <Text style={styles.coloredLine2}>Total sum. {totalPrice()} kr</Text>
      </View>
      )}
      

      <View style={styles.checkBoxContainer}>
      {user.organization_number == null && (
        <View style={styles.checkContainer}>
          <CheckBox
            size={30}
            uncheckedColor={SOFT_RED}
            checkedColor={SOFT_RED}
            checked={check1}
            onPress={() => setCheck1(!check1)}
          />
          <View style={styles.inlineText}>
            <Text style={styles.checkText}>Nyttja </Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
                dispatch(setBlur(true));
              }}
            >
              <Text style={styles.pinkText}>RUT-avdrag</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
        

        <View style={styles.checkContainer}>
          <CheckBox
            size={30}
            uncheckedColor={SOFT_RED}
            checkedColor={SOFT_RED}
            checked={check2}
            onPress={() => {
              setCheck2(!check2)
              termsHandler(!check2)
            }}
          />
          <View>
            <Text style={styles.checkText}>Ja, jag samtycker till</Text>
            <TouchableOpacity
              // disabled={!check2}
              onPress={() => navigation.navigate(TERMS_AND_CONDITIONS)}
            >
              <Text style={styles.pinkText}>användarvillkoren.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text1}>Till addressen:</Text>
        {changedAddr ? <Text style={styles.text2}>
        {changedAddr}
        </Text> : <Text style={styles.text2}>
        {bookings[0]?.street_address} {bookings[0]?.place}
        </Text>}
        
        {isCarService ? null : <TouchableOpacity
          onPress={() => {
            setAddressModal(!addressModal);
            // dispatch(setBlur(true));
          }}
        >
          <Text style={styles.text3}>
            Jag behöver hjälp på en annan address!
          </Text>
        </TouchableOpacity>}
      </View>

      <AddressModal
        addressModal={addressModal}
        setAddressModal={setAddressModal}
        bookings={bookings}
        setNew = {value => setNewAddress(value)}
      />

      <RUTModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </ScrollView>
  );
};