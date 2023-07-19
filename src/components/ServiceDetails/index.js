import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
  Platform,
  Modal,
  KeyboardAvoidingView,
} from 'react-native';
import { Video } from 'expo-av';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { Icon, Overlay } from 'react-native-elements';
import { setBlur } from '../../actions/blur.action';
import { bookingRequest } from '../../api/bookings.api';
import { getLocationDetail, getUserInfo } from '../../api/auth.api';
import { getTimeDifference } from '../../utils/time';
import RUTModal from '../RUTModal';
import { Button } from '../common';
import { styles, keyBoardAvoidStyle } from './style';
import { PEACH, SOFT_RED } from '../../constants/colors';
import { PAYMENT_SCREEN } from '../../constants/screens';
import { fetchAllZones } from '../../api/admin.api';
import { getUniqZones } from '../../helpers/zonesHelper';
import MessageModal from '../Modals/MessageModal';
import moment from 'moment';
import 'moment/locale/sv';


const TimeWarnModal = ({ modalVisible, setModalVisible }) => {
  const dispatch = useDispatch();

  return (
   
    <Modal animationType="fade" visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalHeadingContainer}>
            <Text style={styles.modalText}>
            Du kan endast boka en tid mellan "kl. 08.00 och kl. 20.00"
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

export default ({ service }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const video = React.useRef(null);
  const [count, setCount] = useState(1);
  const [time, setTime] = useState(new Date(new Date().getTime()));
  const [newTime, setNewTime] = useState(moment().format());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');
  const [modalVisible, setModalVisible] = useState(false);
  const [timeModalVisible, setTimeModalVisible] = useState(false);

  const [notes, setNotes] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [zip, setZip] = useState('');
  const [place, setPlace] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [floor, setFloor] = useState('');
  const [portCode, setPortCode] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [color, setColor] = useState('');
  const [carBrand, setCarBrand] = useState('');
  const [model, setModel] = useState('');
  const [activeZones, setActiveZones] = useState([]);
  const [isLocOk, setIsLocOk] = useState(false);
  const [isBasicModal, setBasicModal] = useState(false);
  const [isDateModal, setDateModal] = useState(false);
  const [durationModal, setdurationModal] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const [isInputModal, setInputMessageModal] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  
  const [region, setRegion] = useState({
    latitude: 37.4219983,
    longitude: -122.084,
    latitudeDelta: 0.004,
    longitudeDelta: 0.004,
  });


  useEffect(() => {
    getUserInfo()
      .then((res) => setUser(res.data))
      .catch(() => Alert.alert('Error!', 'Unable to get user info'));

      fetchAllZones() // Aziz: This will get all the zones whether they are active or not
      .then((res) => {
        let data = res.data;
        data = data.filter(function(item){
          return item.is_active == true;
       });
        setActiveZones(data);
      })
      .catch((err) => {
        Alert.alert('Kunde inte hitta alla zoner', err);
      });
  }, []);

  const setUser = (user) => {
    setUserInfo(user)
    setFirstName(user.first_name);
    setLastName(user.last_name);
    setZip(user.postal_code);
    setPlace(user.address);
    setStreetAddress(user.street_address);
    setFloor(user.floor);
    setPortCode(user.port_code);
  };

  useEffect(() => {
    (async () => {
      let granted;
      if (Platform.OS === 'android') {
        granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'App needs access to your location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
      } else {
        granted = await Geolocation.requestAuthorization('whenInUse');
      }

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation();
      } else {
        console.log('location permission denied');
      }
    })();
  }, []);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.004,
          longitudeDelta: 0.004,
        });
      },
      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const matchZip = (reg) => {
    setRegion(reg)
    getLocationDetail(reg)
    .then((res) => {
      let data = res.data;
      
     if(data.status == "OK"){
 let z_code = "";
 if(data.results[0].address_components){
   let ad_len = data.results[0].address_components.length;
   let add_obj = data.results[0].address_components[ad_len - 1];
   z_code = add_obj.long_name;
   let temp=z_code;
        temp=temp.replace(/\s+/g, '');
   if(temp){
     let zon_arr = activeZones;
     zon_arr = zon_arr.filter(function(item){
      return item.post_code == temp;
   });
   if(zon_arr.length > 0){
setIsLocOk(true)
   }else{
    setIsLocOk(false)
   }
   }

 }
     }else{
       setBasicModal(true)
     }
    })
    .catch(() => Alert.alert('Error!', 'Unable to get location info'));
  }
  const onChange = (event, selected) => {
    if (event.type === 'dismissed') {
      setShow(false);
    } else if (event.type === 'set') {
      const hour = String(selected).substr(16, 2);
      const differenceInHours = getTimeDifference(selected);

      setShow(false);
      Number(hour) < 8 || Number(hour) > 19
        ? setModal()
        : differenceInHours < 3
        ? set3modal()
        : setTime(selected);
    }
  };
  const confirmDate = (selected) => {


   let cur_t = moment(newTime).format("HH:mm:ss");
   let cur_d = moment(selected).format("YYYY-MM-DD");
   let datetimeB = moment(cur_d + " " + cur_t);

   console.log(datetimeB.format())
   setNewTime(datetimeB.format());
  };
  const confirmTime = (selected) => {
    let cur_t = moment(selected).format("HH:mm:ss");
    let cur_d = moment(newTime).format("YYYY-MM-DD");
    let datetimeB = moment(cur_d + " " + cur_t);
 
    console.log(datetimeB.locale("sv").format())
    setNewTime(datetimeB.format());
  };

  const setModal = () => {
    setTimeModalVisible(!timeModalVisible);
    // dispatch(setBlur(true));
  };
  const set3modal = () => {
    setdurationModal(!durationModal);
  };
  const toggleLocationModal = () => {
    setLocationModal(!locationModal);
  };
  
  const setInputModal = () => {
    setInputMessageModal(!isInputModal);
  };



  const showPicker = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  function closeBasicModal(params) {
    setBasicModal(false);
  }
  function closeDateModal(params) {
    setDateModal(!isDateModal);
  }
  const setBooking = (serviceID) => {
    const data = {
      serviceID: serviceID,
      count: count,
      time: newTime,
      notes: notes,
      firstName: firstName,
      lastName: lastName,
      zip: zip,
      place: place,
      streetAddress: streetAddress,
      floor: floor,
      portCode: portCode,
      regNumber: regNumber,
      color: color,
      carBrand: carBrand,
      model: model,
      region: region,
    };
    let curr_time = moment().format();

    var hour = moment(newTime).format("HH");
    var duration = moment.duration(moment(newTime).diff(curr_time));
    var differenceInHours = duration.asHours();
    console.log(differenceInHours)

    let selected_day = moment(newTime).format();
    let difference = moment(selected_day).diff(moment(curr_time), 'days');
    
let total_time_required = parseInt(hour) + parseInt(count)
if(difference < 0){
  closeDateModal()
}
   else if(hour < 8 || hour > 19){
    setModal()
   }
   else if(differenceInHours < 3){
    set3modal()
   }
   else if(service.title !== 'Biltvätten hos dig' && service.title !== 'Däckbyte hos dig' && total_time_required > 20){
      setModal()
   }
   else{
 if(service.title === 'Biltvätten hos dig' ||
        service.title === 'Däckbyte hos dig'){
          isLocOk ? bookingRequest(data)
          .then(() => navigation.navigate(PAYMENT_SCREEN))
          .catch(() => Alert.alert('Error!', 'Unable to add service'))
          : toggleLocationModal()
        }else{
          bookingRequest(data)
          .then(() => navigation.navigate(PAYMENT_SCREEN))
          .catch(() => Alert.alert('Error!', 'Unable to add service'))
        }
   }
   
     
    
  };

  const price =
    service.price_type === 'hourly'
      ? service.price == null
        ? '0'
        : `${service.price} kr/h`
      : `${service.prices[count - 1]} kr`;

  return (
    <>
    {service.video_url && <View style={{width:"100%"}}>
    <Video
        ref={video}
        style={{width:"100%", height:250}}
        source={{
          uri: service.video_url,
        }}
        useNativeControls={false}
        resizeMode="cover"
        isLooping
        shouldPlay={true}
        rate={2.0}
        
      />
    </View>}
    
      <View style={styles.row}>
      
        <Text style={styles.leftText}>
          {count} x {service.title}
        </Text>
        <Text style={styles.rightText}>{price}</Text>
      </View>
{userInfo.organization_number == null ? service.icon == "dot-circle" || service.icon == "car-side" ? null : (
  <View style={styles.rutContainer}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
            dispatch(setBlur(true));
          }}
        >
          <Text style={styles.rutText}>RUT-avdrag?</Text>
        </TouchableOpacity>
      </View>
) : null}
      

      <RUTModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <MessageModal
        visible={isBasicModal}
        closeModal={closeBasicModal}
        title={"Du kan inte parkera här"}
        body={"Den här parkeringen är utanför accepterad zon. Välj en ny plats nämre ditt hem."}
      />
      <MessageModal
        visible={isDateModal}
        closeModal={closeDateModal}
        body={"Valt datum är inte giltigt."}
      />
 <MessageModal
        visible={isInputModal}
        closeModal={setInputModal}
        body={"Du måste fylla i alla nödvändiga fält."}
      />
<MessageModal
        visible={durationModal}
        closeModal={set3modal}
        title={"Warning"}
        body={"Du måste boka minst 3 timmar i förväg"}
      />
      <MessageModal
        visible={locationModal}
        closeModal={toggleLocationModal}
        title={"Warning"}
        body={"Pinned location is not active right now"}
      />

      <View>
        {service.title !== 'Hänga upp gardiner' &&
          service.title !== 'Whiteboard- montering'&&
          service.title !== 'TV-montering'&&
          service.title !== 'Hänga upp tavlor/speglar' ? (
            <View style={styles.row}>
              <Text style={styles.left}>Antal timmar</Text>
              <View style={styles.rightContainer}>
                <TouchableOpacity
                  onPress={() => count > 1 && setCount(count - 1)}
                >
                  <Icon
                    name="minus-circle"
                    type="font-awesome-5"
                    size={25}
                    color={SOFT_RED}
                  />
                </TouchableOpacity>
                <Text style={styles.right}>{count}</Text>
                <TouchableOpacity
                  onPress={() =>
                    service.prices
                      ? count < service.prices.length && setCount(count + 1)
                      : setCount(count + 1)
                  }
                >
                  <Icon
                    name="plus-circle"
                    type="font-awesome-5"
                    size={25}
                    color={PEACH}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.row}>
              <Text style={styles.left}>Antal </Text>
              <View style={styles.rightContainer}>
                <TouchableOpacity
                  onPress={() => count > 1 && setCount(count - 1)}
                >
                  <Icon
                    name="minus-circle"
                    type="font-awesome-5"
                    size={25}
                    color={SOFT_RED}
                  />
                </TouchableOpacity>
                <Text style={styles.right}>{count}</Text>
                <TouchableOpacity
                  onPress={() =>
                    service.prices
                      ? count < service.prices.length && setCount(count + 1)
                      : setCount(count + 1)
                  }
                >
                  <Icon
                    name="plus-circle"
                    type="font-awesome-5"
                    size={25}
                    color={PEACH}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
      </View>

      <View style={styles.row}>
        <Text style={styles.left}>Datum</Text>
        <TouchableOpacity
          onPress={() => showPicker('date')}
          style={styles.rightContainer}
        >
          <Icon
            name="calendar"
            type="font-awesome-5"
            size={25}
            color={PEACH}
            solid
          />
          <Text style={styles.right}>{moment(newTime).format("MMM D")}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Text style={styles.left}>Tid</Text>
        <TouchableOpacity
          onPress={() => showPicker('time')}
          style={styles.rightContainer}
        >
          <Icon
            name="clock"
            type="font-awesome-5"
            size={25}
            color={PEACH}
            solid
          />
          <Text style={styles.right}>{moment(newTime).format("HH:mm")}</Text>
        </TouchableOpacity>
        
      </View>

      {/* {show && (
        <DateTimePicker
          value={time}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          minimumDate={time.setHours(8, 0, 0, 0)}
        />
      )} */}
      {mode == "date" ? (
        <DateTimePickerModal
        isVisible={show}
        mode={"date"}
        is24Hour={true}
        
        locale="sv_SE"
        confirmTextIOS="Bekräfta"
        cancelTextIOS="Avbryt"
        display={Platform.OS=="ios" ?"inline":"default"}
        onConfirm={(date) => {setShow(false);confirmDate(date)}}
        onCancel={()=> setShow(false)}
      />
      ) : (
        <DateTimePickerModal
        isVisible={show}
        minuteInterval={30}
        mode={"time"}
        is24Hour={true}
        confirmTextIOS="Bekräfta"
        cancelTextIOS="Avbryt"
        locale="sv_SE"
        display={Platform.OS=="ios" ?"spinner":"default"}
        onConfirm={(date) => {setShow(false);confirmTime(date)}}
        onCancel={()=> setShow(false)}
      />
      )}
      
      <TimeWarnModal
        modalVisible={timeModalVisible}
        setModalVisible={setTimeModalVisible}
      />

    {/* <KeyboardAvoidingView behavior="padding" style={keyBoardAvoidStyle.container}> */}
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Beskriv det som ska fixas!</Text>
        <TextInput
          placeholder="Här beskriver du så utförligt som möjligt vad du behöver hjälp med!"
          multiline={true}
          style={styles.inputBox}
          onChangeText={(text) => setNotes(text)}
        />
      </View>
    {/* </KeyboardAvoidingView> */}
      {(service.title === 'Biltvätten hos dig' ||
        service.title === 'Däckbyte hos dig') && (
        <View style={styles.subContainer}>
          <View style={styles.coloredContainer}>
            <Text style={styles.coloredContainerHeading}>Om din bil</Text>
            <View style={styles.inlineInputContainer}>
              <View style={styles.inlineInput}>
                <Text style={styles.inputLabel}>Registreringnr.*</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => setRegNumber(text)}
                />
              </View>
              <View style={styles.inlineInput}>
                <Text style={styles.inputLabel}>Färg*</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => setColor(text)}
                />
              </View>
            </View>
            <View>
              <Text style={styles.inputLabel}>Bilmärke*</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setCarBrand(text)}
              />
            </View>
            <View>
              <Text style={styles.inputLabel}>Modell*</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setModel(text)}
              />
            </View>

            <View style={styles.mapContainer}>
              <Text style={styles.inputLabel}>Vart står din bil?</Text>
              <MapView
                style={styles.map}
                showsUserLocation={true}
                showsMyLocationButton={true}
                zoomEnabled={true}
                region={region}
                onRegionChangeComplete={(reg) => matchZip(reg)}
              >
                <Marker coordinate={region} />
              </MapView>
            </View>
          </View>
        </View>
      )}

      <View style={styles.buttonBox}>
        <Button
          onPress={() => {
            
            service.title === 'Biltvätten hos dig' ||
            service.title === 'Däckbyte hos dig'
              ? regNumber && color && carBrand && model
                ? setBooking(service.id)
                : setInputModal()
              : setBooking(service.id);

              video.current.pauseAsync();
          }}
          text="Lägg till varukorg"
          color={PEACH}
        />
      </View>
    </>
  );
};

