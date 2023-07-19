import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Icon } from 'react-native-elements';
import { Overlay } from '../../components';
import { Header, Button } from '../../components/common';
import { RUBIK_REGULAR } from '../../constants/fonts';
import {
  WHITE,
  BLACK,
  PEACH,
  LIGHT_PEACH,
  FLORAL_WHITE,
  EERIE_BLACK,
} from '../../constants/colors';
import {
  ABOUT_US_SCREEN,
  CONTACT_SCREEN,
  FAQ_SCREEN,
  TERMS_AND_CONDITIONS,
} from '../../constants/screens';

const Questions = ({ item }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <View style={styles.textContainer}>
      <TouchableOpacity style={styles.questionContainer} onPress={() => setShowAnswer(!showAnswer)}>
        <Text style={styles.question}>{item.question}</Text>
        <View>
          <Icon
            name={showAnswer ? 'chevron-up' : 'chevron-down'}
            type="font-awesome-5"
            color={BLACK}
            size={15}
          />
        </View>
      </TouchableOpacity>

      {showAnswer && (
        <View style={styles.answerContainer}>
          <Text style={styles.answerText}>{item.answer}</Text>
        </View>
      )}
    </View>
  );
};

export default () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const dummyData = [
    {
      question: 'Hur långt innan kan jag avboka?',
      answer: 'Avbokning ska ske minst 24 timmar innan bokad tjänst.',
    },
    {
      question: 'Får jag pengarna tillbaka vid avbokning?',
      answer:
        'Ja. Om du avbokar minst 24 h innan jobbet ska utföras betalas hela summan tillbaka.',
    },
    {
      question: 'Kan jag ändra datum och tid på min beställning?',
      answer:
        'Det går inte att boka om en tid i appen, Du måste först avboka din beställning och sedan boka ett nytt datum & tid. Detta 24h innan jobbet ska utföras för att få tillbaka pengarna.',
    },
    {
      question: 'Hur avbokar jag?',
      answer:
        'Du avbokar genom att gå till din profil längst ner till höger i appen. Under kommande fix klickar du på tjänsten du vill avboka. Klicka sedan på “avboka”',
    },
    {
      question: 'I vilka städer kan man beställa era tjänster?',
      answer:
        'Just nu är vi verksamma i Stockholm. Fler städer kommer inom kort.',
    },
    {
      question: 'Täcks era tjänster av försäkring?',
      answer:
        'Vi har en ansvarsförsäkring som täcker person- och sakskador upp till 10 miljoner SEK.',
    },
  ];

  const leftIcon = (
    <Icon
      name={visible ? 'times' : 'bars'}
      type="font-awesome-5"
      color={EERIE_BLACK}
      size={22}
    />
  );
  const headerText = <Text style={styles.headerText}>Kontakt</Text>;

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const navigate = (screen) => {
    toggleOverlay();
    navigation.navigate(screen);
  };
  const mailTo = useCallback(async () => {
    await Linking.openURL("mailto:mailto:hej@i-fix.se");
});
  return (
    <View style={styles.container}>
      <Header
        iconLeft={leftIcon}
        text={headerText}
        color={LIGHT_PEACH}
        leftPress={toggleOverlay}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headingTop}>
          Har du några frågor eller funderingar?
        </Text>
        <Button text="Maila oss" onPress={mailTo} color={PEACH} />

        <Text style={styles.heading}>Vanliga frågor</Text>

        {dummyData.map((item, index) => (
          <Questions key={index} item={item} />
        ))}
      </ScrollView>
      <Overlay
        visible={visible}
        toggle={toggleOverlay}
        aboutPress={() => navigate(ABOUT_US_SCREEN)}
        FAQPress={() => navigate(FAQ_SCREEN)}
        contactPress={() => navigate(CONTACT_SCREEN)}
        policyPress={() => navigate(TERMS_AND_CONDITIONS)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FLORAL_WHITE,
  },
  headerText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 18,
  },
  scrollContainer: {
    paddingBottom: '15%',
  },
  headingTop: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 22,
    color: BLACK,
    marginHorizontal: '10%',
    marginVertical: '5%',
    marginTop: '12%',
  },
  heading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 25,
    color: BLACK,
    marginHorizontal: '10%',
    marginTop: 20,
    marginBottom: 10,
  },
  textContainer: {
    marginHorizontal: '10%',
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  question: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    color: BLACK,
    width: '80%',
  },
  answerContainer: {
    width: '85%',
    marginVertical: 5,
  },
  answerText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 14,
    color: BLACK,
    lineHeight: 20,
  },
});
