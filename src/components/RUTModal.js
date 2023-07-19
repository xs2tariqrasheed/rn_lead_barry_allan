import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { setBlur } from '../actions/blur.action';
import { Button } from './common';
import { BLACK, BROWN, FLORAL_WHITE, PEACH } from '../constants/colors';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../constants/fonts';

export default ({ modalVisible, setModalVisible }) => {
  const dispatch = useDispatch();

  const WEB_URL =
    'https://www.skatteverket.se/privat/fastigheterochbostad/rotochrutarbete/villkorforattfarutavdrag.4.3810a01c150939e893f2b9d.html';

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
            <Text style={styles.modalHeading}>RUT-avdrag?</Text>
          </View>

          <ScrollView
            style={styles.modalScrollContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.modalMessageContainer}>
              <Text style={styles.modalMessage}>
                Denna tjänst omfattas av RUT-avdraget vilket innebär att du får
                dra av{' '}
                <Text style={styles.modalBoldText}>
                  50% av arbetskostnaden.
                </Text>{' '}
                Det är därför du ser halva priset i appen.
              </Text>
            </View>

            <View style={styles.modalMessageContainer}>
              <Text style={styles.modalMessage}>
                Efter din bokning hanterar ifix din RUT ansökan med
                skatteverket.
              </Text>
              <Text style={styles.modalMessage}>
                Vår samarbetspartner Klarna reserverar alltid hela summan summan
                inklusive RUT och{' '}
                <Text style={styles.modalBoldText}>
                  efter att skatteverket godkänt ditt RUT-avdrag så drar Klarna
                  av 50% av det reserverade beloppet.
                </Text>
              </Text>
              <Text style={styles.modalMessage}>
                Vilket resulterar i att du endast betalar halva priset.
              </Text>
            </View>

            <View style={styles.modalMessageContainer}>
              <Text style={styles.modalMessage}>
                För att utnyttja rutavdraget måste du eller personen du
                beställer tjänsten åt, helt eller delvis bo i bostaden där
                tjänsten utförs. Du kan även utföra en RUT-berättigad tjänst på
                dina föräldrars folkbokförings adress, men göra RUT-avdraget på
                ditt personnummer (om du är över 18 år) En väldigt uppskattad
                present för våra äldre.
              </Text>
            </View>

            <View style={styles.modalMessageContainer}>
              <Text style={styles.modalMessage}>
                Skriv isf ditt personnummer men dina föräldrars adress när du
                bokar, samt bocka för “Tjänsten utförs i mina föräldrars
                bostad”.
              </Text>
            </View>

            <View style={styles.modalMessageContainer}>
              <Text style={styles.modalMessage}>
                Läs mer om regler och vad som gäller RUT avdrag på{' '}
                <Text
                  style={styles.modalBrownText}
                  onPress={() => Linking.openURL(WEB_URL)}
                >
                  Skatteverkets hemsida
                </Text>
              </Text>
            </View>
          </ScrollView>

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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    marginHorizontal: '8%',
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
  modalHeading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 22,
    color: BLACK,
    textAlign: 'center',
  },
  modalScrollContainer: {
    height: '60%',
  },
  modalMessageContainer: {
    marginBottom: 15,
  },
  modalMessage: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    color: BLACK,
    lineHeight: 25,
    marginHorizontal: 5,
  },
  modalBoldText: {
    fontFamily: RUBIK_MEDIUM,
  },
  modalBrownText: {
    color: BROWN,
  },
  modalButtonContainer: {
    marginVertical: 10,
  },
});
