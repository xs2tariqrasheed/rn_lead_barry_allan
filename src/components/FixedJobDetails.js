import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  Share
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Icon } from 'react-native-elements';
import { updateStarRating } from '../actions/bookings.action';
import { setBlur } from '../actions/blur.action';
import { BLACK, BROWN, LIGHT_PEACH, PEACH } from '../constants/colors';
import { RUBIK_REGULAR, RUBIK_MEDIUM } from '../constants/fonts';

const ImageModal = ({ modalVisible, setModalVisible, imageURI }) => {
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
          <Image source={{ uri: imageURI }} style={styles.modalImage} />
        </View>
      </View>
    </Modal>
  );
};

export default ({ booking, service }) => {
  const dispatch = useDispatch();
  const [stars, setStars] = useState(booking.customer_rating);
  const [modalVisible, setModalVisible] = useState(false);
  const [imageURI, setImageURI] = useState('');

  const name =
    booking.fixers.length > 0
      ? booking.fixers[0].first_name + ' ' + booking.fixers[0].last_name
      : booking.ambassadors[0].first_name +
        ' ' +
        booking.ambassadors[0].last_name;

  const price =
    service?.price_type === 'hourly'
      ? service?.price == null
        ? '0'
        : service?.price * booking?.quantity + ' kr'
      : `${service?.prices[booking?.quantity - 1]} kr`;

  const images = booking?.images;
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Jag fick precis hjälp av i-Fix, gå in på http://i-fix.se/ för att se vilka tjänster dom kan hjälpa dig med',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.starHeading}>
          {booking.customer_rating ? 'Tack för din feedback!' : 'Ge betyg!'}
        </Text>
        <View style={styles.starContainer}>
          {[1, 2, 3, 4, 5].map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.star}
              onPress={() => {
                stars === null && setStars(item);
                stars === null && dispatch(updateStarRating(booking.id, item));
              }}
              disabled={stars !== null}
            >
              <Icon
                name="star"
                type="font-awesome-5"
                color={PEACH}
                size={35}
                solid={stars >= item}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.coloredContainer}>
        <View style={styles.imagesContainer}>
          <Text style={styles.imagesHeading}>Fixat och klart!</Text>
          <ScrollView
            horizontal={true}
            style={styles.images}
            showsHorizontalScrollIndicator={false}
          >
            {images.map((image) => {
              return (
                <TouchableOpacity
                  key={image}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    dispatch(setBlur(true));
                    setImageURI(image);
                  }}
                >
                  <Image source={{ uri: image }} style={styles.image} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <ImageModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          imageURI={imageURI}
        />

         <Text style={styles.fixerName}>Fixare: {name}</Text>

        <View style={styles.lowerContainer}>
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
        </View>
        <TouchableOpacity style={styles.lowerTextContainer} onPress={onShare}>
          <Text style={styles.lowerText}>Dela det du fixat!</Text>
          <View>
            <Icon
              name="share-square"
              type="font-awesome-5"
              color={BROWN}
              size={16}
              solid
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  upperContainer: {
    backgroundColor: '#FFF3EF',
    paddingBottom: 15,
    paddingTop: 5,
  },
  starHeading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 18,
    color: '#2E2E2E',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  star: {
    marginHorizontal: 5,
  },
  coloredContainer: {
    backgroundColor: LIGHT_PEACH,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  imagesContainer: {
    marginBottom: 15,
  },
  imagesHeading: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 14,
    color: BLACK,
    textAlign: 'center',
    marginVertical: 15,
  },
  images: {
    marginHorizontal: '10%',
  },
  image: {
    height: 100,
    width: 75,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  lowerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  lowerText: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 15,
    color: BROWN,
    marginRight: 8,
  },
  fixerName: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 19,
    color: BLACK,
    textAlign: 'center',
  },
  lowerContainer: {
    width: '70%',
    alignSelf: 'center',
    marginTop: 15,
  },
  inlineText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  text: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 14,
    color: BLACK,
    marginRight: 10,
  },
  textMedium: {
    fontFamily: RUBIK_MEDIUM,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    marginHorizontal: '8%',
    elevation: 5,
  },
  modalCancel: {
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 1,
  },
  modalImage: {
    height: 450,
    width: '100%',
    borderRadius: 30,
  },
});
