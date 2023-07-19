import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
  Image
} from 'react-native';
import { useDispatch } from 'react-redux';
import { CheckBox, Icon } from 'react-native-elements';
import { setBlur } from '../actions/blur.action';
import { remove } from '../actions/bookings.action';
import { cancelBookingRequest } from '../api/bookings.api';
import { getTimeDifference } from '../utils/time';
import { Button } from './common';
import { POINTS } from '../constants/points';
import ExtraModal from '../components/Modals/ExtraModal';
import {
  BLACK,
  BROWN,
  DARK_GRAY,
  FLORAL_WHITE,
  LIGHT_PEACH,
  PEACH,
  SOFT_RED,
} from '../constants/colors';
import { RUBIK_REGULAR, RUBIK_MEDIUM } from '../constants/fonts';

const TermsOfCancellation = ({ modalVisible, setModalVisible }) => {
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
            <Text style={styles.modalHeading}>Villkor för avbokning</Text>
          </View>

          <Text style={styles.modalMessage}>
            Avbokning ska ske{' '}
            <Text style={styles.modalBoldText}>
              minst 24 timmar innan bokad tjänst.
            </Text>{' '}
            Om du avbokar minst 24 h innan jobbet ska utföras betalas hela
            summan tillbaka.
          </Text>

          <Text style={styles.modalMessage}>
            Det går inte att boka om en tid i appen, Du måste först avboka din
            beställning och sedan boka ett nytt datum & tid.

          </Text>

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

const JobCancelModal = ({
  cancelModalVisible,
  setCancelModalVisible,
  timeDifference,
  confirmationModal,
  setConfirmationModal,
  bookingId,
  setResponse,
}) => {
  const dispatch = useDispatch();
  const [modalCheck, setModalCheck] = useState(false);

  const cancelBooking = () => {
    cancelBookingRequest(bookingId)
      .then((res) => {
        setResponse(res.data);
        setConfirmationModal(!confirmationModal);
        // dispatch(setBlur(true));
      })
      .catch(() => Alert.alert('Error!', 'Unable to cancel booking'));
  };

  return (
    <Modal animationType="fade" transparent={true} visible={cancelModalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.modalCancel}
            onPress={() => {
              setCancelModalVisible(!cancelModalVisible);
              // dispatch(setBlur(false));
            }}
          >
            <Icon name="times" type="font-awesome-5" size={22} />
          </TouchableOpacity>

          <View style={styles.modalHeadingContainer}>
            <Text style={styles.modalHeading}>Vill du avboka?</Text>
          </View>

          {timeDifference >= 24 ? (
            <View
              style={[styles.modalMessageContainer, styles.cancelModalMessage]}
            >
              <Text style={styles.modalMessage}>
                Om du avbokar minst 24 h innan jobbet ska utföras betalas hela
                summan tillbaka.
              </Text>
            </View>
          ) : (
            <View style={styles.modalMessageContainer}>
              <Text style={[styles.modalMessage, styles.cancelModalMessage]}>
                Avbokning ska ske minst 24 timmar innan bokad tjänst. Du får
                inga pengar tilbaka om du avbokar nu.
              </Text>
              <View style={styles.modalCheckContainer}>
                <CheckBox
                  size={25}
                  uncheckedColor={SOFT_RED}
                  checkedColor={SOFT_RED}
                  checked={modalCheck}
                  onPress={() => setModalCheck(!modalCheck)}
                />
                <Text style={styles.modalCheckText}>
                  Jag har läst informationen och vill avboka ändå.
                </Text>
              </View>
            </View>
          )}

          <View style={styles.modalButtonContainer}>
            <Button
              text="Avboka"
              color={PEACH}
              onPress={() => {
                setCancelModalVisible(!cancelModalVisible);
                cancelBooking(bookingId);
                // dispatch(setBlur(false));
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const PictureModal = ({
  setCancelModalVisible,
  currentPicture,
  visible
  
}) => {
  const dispatch = useDispatch();
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.modalCancel}
            onPress={() => {
              setCancelModalVisible(!visible);
              dispatch(setBlur(false));
            }}
          >
            <Icon name="times" type="font-awesome-5" size={22} />
          </TouchableOpacity>
<View>
<Image source={{uri:currentPicture}} style={{height: 200,width: "100%", resizeMode:"cover"}} />
</View>
        </View>
      </View>
    </Modal>
  );
};
const ConfirmationModal = ({
  confirmationModal,
  setConfirmationModal,
  timeDifference,
  response,
}) => {
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
              Jobb avbokat
            </Text>
          </View>

          {timeDifference > 24 && (
            <View style={styles.modalMessageContainer}>
              <Text style={styles.modalMessage}>
                Återbetalning sker via Klarna.
              </Text>
            </View>
          )}

          <View style={styles.modalButtonContainer}>
            <Button
              text="OK"
              color={PEACH}
              onPress={() => {
                setConfirmationModal(!confirmationModal);
                dispatch(setBlur(false));
                dispatch(remove(response));
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ({ booking, service }) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPicture, setModalPictureVisible] = useState(false);
  const [currentPicture, setCurrentPicture] = useState('');
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [response, setResponse] = useState({});
  const [names, setNames] = useState([]);
  const [extraModal, setExtraModal] = useState(false);
  
  const closeExtraModal = () => {
    setExtraModal(!extraModal);
  }
  const enlargePicture = (uri)=>{
    setCurrentPicture(uri)
    setModalPictureVisible(true)
  }
  useEffect(() => {
    const fixers =
      booking.fixers.length !== 0
        ? booking.fixers.map(
            (fixer) => fixer.first_name + ' ' + fixer.last_name
          )
        : [];
    const ambassadors =
      booking.ambassadors.length !== 0
        ? booking.ambassadors.map(
            (ambassador) => ambassador.first_name + ' ' + ambassador.last_name
          )
        : [];
    setNames(fixers.concat(ambassadors));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const price =
    service?.price_type === 'hourly'
      ? service?.price == null
        ? '0'
        : service?.price * booking.quantity + ' kr'
      : `${service?.prices[booking.quantity - 1]} kr`;

  const address = booking?.place;
  const zipCode = booking?.zip_code;
  const differenceInHours = getTimeDifference(booking.appointment_at);

  return (
    <View>
    <View
        style={[styles.newUpperContainer, styles.newUpper]}
      >
        <View style={{width:"50%"}}>
          <View>
            <Text style={styles.topExtra}>EXTRA-FIX</Text>
          </View>
          <View>
            <Text style={styles.f11}>Passa på-tjänster när</Text>
          </View>
          <View>
            <Text style={styles.f11}>fixaren är hemma hos dig!</Text>
          </View>
          
        </View>
        <View style={{width:"50%", justifyContent:"center"}}>
          <TouchableOpacity onPress={() => setExtraModal(true)} style={{width:"90%", borderRadius:30, backgroundColor:"#FEA88D", height:30, alignItems:"center", justifyContent:"center", alignContent:"center"}}>
            <Text style={{color:"#fff", fontFamily:RUBIK_REGULAR, fontSize:14}}>Se erbjudanden</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={[styles.upperContainer, names.length > 1 && styles.extraSpace]}
      >
        <View style={styles.imageContainer}>

        {booking.fixers.length > 0 ? 
        booking.fixers[0].avatar ?
        <TouchableOpacity onPress={() => enlargePicture(booking.fixers[0].avatar.url)}>
        <Image source={{uri:booking.fixers[0].avatar.url}} style={{height: 98,width: 98,borderRadius: 50}} />
        </TouchableOpacity> :
         <Icon name="image" type="font-awesome-5" color="#000" size={25}   /> : 
          null
        }
        {booking.ambassadors.length > 0 ? 
        booking.ambassadors[0].avatar ?
        <TouchableOpacity onPress={() => enlargePicture(booking.ambassadors[0].avatar.url)}>
        <Image source={{uri:booking.ambassadors[0].avatar.url}} style={{height: 98,width: 98, borderRadius: 50}} /> 
        </TouchableOpacity>:
         <Icon name="image" type="font-awesome-5" color="#000" size={25}  /> :
          null
          
        } 
        </View>

        {names.length > 1 && (
          <View style={styles.overlapImage}>
            <Icon name="image" type="font-awesome-5" color={BLACK} size={25} />
          </View>
        )}
        <View style={styles.cardText}>
          <View>
            <Text style={styles.heading}>Fixare</Text>
            {names.length !== 0 ? (
              names.map((name, index) => (
                <Text key={index} style={styles.desc}>
                  {name} {names.length > 1 && index !== names.length - 1 && '&'}
                </Text>
              ))
            ) : (
              <Text style={styles.desc}>Hittar fixare...</Text>
            )}
          </View>
          <View>
            <Text style={styles.heading}>Kommer till</Text>
            <Text style={styles.desc}>
              {address}, {zipCode}, 
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.pointsContainer}>

          <Text style={styles.orderNo}>Ordernr: {booking.id}</Text>
          <Text style={styles.pointsHeading}>Förbered dig såhär:</Text>
          {POINTS[service.title] ? POINTS[service.title].map((item, index) => (
            <View key={index} style={styles.row}>
              <Icon
                name="circle"
                type="font-awesome-5"
                color={BLACK}
                size={5}
                solid
                style={styles.dot}
              />
              <Text style={styles.shadedLines}>{item}</Text>
            </View>
          )): null}
        </View>

        <View style={styles.inlineText}>
          <Text style={styles.text}>
            <Text style={styles.textMedium}>{price}</Text> - Betalt!
          </Text>
          <Icon
            name="check-circle"
            type="font-awesome-5"
            color={BLACK}
            size={18}
            solid
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            text="Avboka"
            onPress={() => {
              setCancelModalVisible(!cancelModalVisible);
              // dispatch(setBlur(true));
            }}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text1}>
            Du kan endast avboka ett jobb senast 24h timmar innan!
          </Text>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
              dispatch(setBlur(true));
            }}
          >
            <Text style={styles.text2}>Läs mer</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TermsOfCancellation
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

<JobCancelModal
        cancelModalVisible={cancelModalVisible}
        setCancelModalVisible={setCancelModalVisible}
        timeDifference={differenceInHours}
        confirmationModal={confirmationModal}
        setConfirmationModal={setConfirmationModal}
        bookingId={booking.id}
        setResponse={setResponse}
      />

<PictureModal
        setCancelModalVisible={() => setModalPictureVisible(false)}
        visible={modalPicture}
        currentPicture={currentPicture}
      />

      <ConfirmationModal
        confirmationModal={confirmationModal}
        setConfirmationModal={setConfirmationModal}
        timeDifference={differenceInHours}
        response={response}
      />
        <ExtraModal
        closeModal={closeExtraModal}
        service_type={service.icon}
        visible={extraModal}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  upperContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFF3EF',
    paddingVertical: 25,
    paddingLeft: 25,
  },
  topExtra: {
    fontWeight:"bold", 
    fontFamily:RUBIK_MEDIUM
  },
  f11: {
    fontSize:11
  },
  newUpperContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFF3EF',
    paddingVertical: 5,
    paddingLeft: 25,
  },
  extraSpace: {
    paddingBottom: '10%',
  },
  newUpper: {
backgroundColor:"#ffe9e2"
  },
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: SOFT_RED,
    backgroundColor: LIGHT_PEACH,
    justifyContent: 'center',
    alignContent:"center",
    alignItems:"center",
    marginRight: 15,
  },
  overlapImage: {
    height: 90,
    width: 90,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: SOFT_RED,
    backgroundColor: LIGHT_PEACH,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    left: 15,
  },
  cardText: {
    width: '50%',
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: SOFT_RED,
  },
  desc: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 13,
    color: DARK_GRAY,
  },
  lowerContainer: {
    backgroundColor: LIGHT_PEACH,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  inlineText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: BLACK,
    marginRight: 10,
  },
  textMedium: {
    fontFamily: RUBIK_MEDIUM,
  },
  buttonContainer: {
    width: '70%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  textContainer: {
    width: '60%',
    alignSelf: 'center',
    marginLeft: '10%',
    marginBottom: 15,
  },
  text1: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 12,
    color: BLACK,
  },
  text2: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 12,
    color: BROWN,
    marginTop: 3,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    marginHorizontal: '10%',
    backgroundColor: FLORAL_WHITE,
    borderRadius: 30,
    padding: 20,
    elevation: 5,
  },
  modalCancel: {
    alignItems: 'flex-end',
  },
  modalHeadingContainer: {
    marginVertical: 15,
    marginBottom: 20,
  },
  underlinedHeading: {
    borderBottomWidth: 2,
    borderColor: BLACK,
    marginHorizontal: '5%',
    paddingBottom: 10,
  },
  modalIcon: {
    marginBottom: 10,
  },
  modalHeading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 22,
    color: BLACK,
    textAlign: 'center',
  },
  modalHeadingSmall: {
    fontSize: 18,
  },
  modalMessageContainer: {
    marginHorizontal: '8%',
  },
  cancelModalMessage: {
    color: DARK_GRAY,
  },
  modalMessage: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: BLACK,
    lineHeight: 22,
    marginBottom: 10,
    marginHorizontal: '3%',
  },
  modalCheckContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -10,
  },
  modalCheckText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 13,
    color: DARK_GRAY,
    width: '75%',
    marginLeft: -10,
    lineHeight: 18,
  },
  modalBoldText: {
    fontFamily: RUBIK_MEDIUM,
  },
  modalButtonContainer: {
    marginVertical: 10,
  },
  pointsContainer: {
    marginHorizontal: '8%',
  },
  pointsHeading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 20,
    color: BLACK,
    marginTop: '5%',
    marginBottom: 5,
    marginLeft: 15,
  },
  orderNo: {
    fontFamily: RUBIK_REGULAR,
    fontWeight:"bold",
    fontSize: 16,
    color: BLACK,
    marginTop: '5%',
    marginBottom: 5,
    textAlign:"right"
   
  },
  shadedLines: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 13,
    color: BLACK,
    marginRight: '10%',
    marginVertical: 5,
    lineHeight: 20,
  },
  row: {
    flexDirection: 'row',
  },
  dot: {
    marginTop: 12,
    marginRight: 10,
  },
});


