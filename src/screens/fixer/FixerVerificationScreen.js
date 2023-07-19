import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Icon } from 'react-native-elements';
import { setNewUser } from '../../actions/auth.action';
import { Button } from '../../components/common';
import { useNavigation } from '@react-navigation/native';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../../constants/fonts';
import { BLACK, BROWN, LIGHT_PEACH, PEACH } from '../../constants/colors';
import { SIGNUP_SCREEN_FIXER } from '../../constants/screens';

export default () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const doneVerification = () => {
    dispatch(setNewUser(false));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={doneVerification}
        >
          <Icon
            name="chevron-left"
            type="font-awesome-5"
            color={BLACK}
            size={18}
          />
        </TouchableOpacity>

        <View style={styles.headingContainer}>
          <Text style={styles.headingTop}>You´re almost done!</Text>
          <Text style={styles.headingText}>
            Please send us the following documents to{' '}
            <Text style={styles.brownText}>work@i-fix.se</Text> and put your{' '}
            <Text style={styles.boldText}>personal number</Text> in the{' '}
            <Text style={styles.boldText}>subject field.</Text>
          </Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.pointerHeading}>A picture of your:</Text>
          <View style={styles.pointerContainer}>
            <Icon
              name="circle"
              type="font-awesome-5"
              color={BLACK}
              size={6}
              solid
              style={styles.dotIcon}
            />
            <Text style={styles.pointerText}>Passport</Text>
          </View>
          <View style={styles.pointerContainer}>
            <Icon
              name="circle"
              type="font-awesome-5"
              color={BLACK}
              size={6}
              solid
              style={styles.dotIcon}
            />
            <Text style={styles.pointerText}>
              ID-card or a document which shows your personal or coordination number
            </Text>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.pointerHeading}>
            If you will work with a vehicle please send us the following
            documents:
          </Text>
          <View style={styles.pointerContainer}>
            <Icon
              name="circle"
              type="font-awesome-5"
              color={BLACK}
              size={6}
              solid
              style={styles.dotIcon}
            />
            <Text style={styles.pointerText}>
              A document that confirms your vehicle insurance, and contains both
              the insurance company’s name, as well as your insurance number.
            </Text>
          </View>
          <View style={styles.pointerContainer}>
            <Icon
              name="circle"
              type="font-awesome-5"
              color={BLACK}
              size={6}
              solid
              style={styles.dotIcon}
            />
            <Text style={styles.pointerText}>
              Driving license (or your ID card in case you drive a scooter
              without license plate and are born before October 1st 1994).
            </Text>
          </View>
          <View style={styles.pointerContainer}>
            <Icon
              name="circle"
              type="font-awesome-5"
              color={BLACK}
              size={6}
              solid
              style={styles.dotIcon}
            />
            <Text style={styles.pointerText}>
              Your scooter’s insurance number.
            </Text>
          </View>

          <Text style={styles.pointerHeading}>
            Lastly, we need an“Extract from the criminal records registry”.
          </Text>
          <Text style={[styles.pointerText, styles.text]}>
            This is a common procedure when applying for work in
            domestic/property services.
          </Text>

          <Text style={styles.pointerHeading}>
            Why do I have to apply for this ?
          </Text>
          <Text style={[styles.pointerText, styles.text]}>
            The purpose of the criminal records register extract is to provide
            you with information that may be registered about you in the
            criminal records registry. The extract is NOT meant to be used as a
            certificate to show that you do not have a criminal record. Some of
            the i-fix workers will work inside our customers’ homes. Therefore
            we want to make sure to maximize our customers’ safety. Please note
            that i-fix HR department will decide whether your records will
            affect your application or work position at i-fix.{' '}
            <Text style={styles.boldText}>
              FYI: The fact that a person has a record does not mean that they
              position at ifix.
            </Text>
          </Text>

          <View style={styles.pointerContainer}>
            <Text style={styles.pointNumber}>1.</Text>
            <View>
              <Text style={styles.pointerText}>
                Start by{' '}
              </Text>
              <TouchableOpacity  onPress={() => Linking.openURL("https://polisen.se/siteassets/blanketter/polisens-blanketter-442-3.pdf")}>
              <Text style={styles.brownText}>fill in this form.</Text>
              </TouchableOpacity>
              <Text style={styles.pointerText}>
                Watch <Text style={styles.brownText}>this video</Text> on how to
                fill it in correctly.
              </Text>
            </View>
          </View>

          <View style={styles.pointerContainer}>
            <Text style={styles.pointNumber}>2.</Text>
            <Text style={[styles.pointerText, styles.pointerText2]}>
              After you apply, it takes about 2 weeks to receive the envelope in
              your mailbox.{' '}
              <Text style={styles.boldText}>
                IMPORTANT! Please do not open the envelope, as we will open it
                together upon signing your work contract.
              </Text>
            </Text>
          </View>
        </View>

        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>Thank you for applying,</Text>
          <Text style={styles.bottomText}>we will contact you by email!</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button text="Done" color={PEACH} onPress={doneVerification} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_PEACH,
  },
  scrollContainer: {
    paddingBottom: '10%',
  },
  iconContainer: {
    alignItems: 'flex-start',
    marginHorizontal: '6%',
    marginTop: '14%',
  },
  headingContainer: {
    marginHorizontal: '14%',
    marginTop: '5%',
    borderBottomWidth: 2,
    borderColor: BLACK,
    paddingBottom: 15,
  },
  headingTop: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 26,
    color: BLACK,
    marginBottom: 15,
  },
  headingText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 19,
    color: BLACK,
  },
  brownText: {
    color: BROWN,
  },
  boldText: {
    fontFamily: RUBIK_MEDIUM,
  },
  textContainer: {
    marginHorizontal: '15%',
  },
  pointerHeading: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: BLACK,
    marginTop: 15,
  },
  pointerContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  dotIcon: {
    marginTop: 6,
    marginRight: 10,
  },
  pointerText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: BLACK,
  },
  text: {
    marginTop: 10,
  },
  pointNumber: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 14,
    color: BLACK,
    marginTop: 1,
    marginRight: 10,
  },
  pointerText2: {
    width: '95%',
  },
  bottomTextContainer: {
    marginTop: '10%',
  },
  bottomText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: BLACK,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 15,
  },
});
