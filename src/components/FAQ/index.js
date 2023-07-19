import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from './style';
import { BLACK } from '../../constants/colors';

const Questions = ({ item }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <View style={styles.textContainer}>
      <TouchableOpacity
        style={styles.questionContainer}
        onPress={() => setShowAnswer(!showAnswer)}
      >
        <Text style={styles.question}>{item.question}</Text>
        <Icon
          name={showAnswer ? 'chevron-up' : 'chevron-down'}
          type="font-awesome-5"
          color={BLACK}
          size={15}
          style={styles.arrow}
        />
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
  const carWash = [
    {
      question: 'Tvättar ni bilar under vintern?',
      answer:
        'Under perioden 1 Dec - 31 Mars tvättar vi bara bilar som står parkerade i garage & P-hus',
    },
    {
      question: 'Min bil är smutsig/full av snö.',
      answer:
        'Vi kommer inte tvätta din bil om den är hårt nedsmutsad, lerig eller full av snö.',
    },
  ];

  const tireChange = [
    {
      question: 'Kan ni flytta på min bil ifall det skulle behövas?',
      answer:
        'Pga. Försäkringsrelaterade frågor så får vi tyvärr inte flytta på din bil.',
    },
    {
      question:
        'Kan någon anhörig till mig flytta bilen samt öppna upp garaget?',
      answer:
        'Ja så länge hen har körkort - Vi förstår att du har mycket att göra. Du som beställare ansvarar för vem du vill ska sköta kontakten med oss.',
    },
    {
      question: 'Byter ni bildäck under vintern ?',
      answer:
        'Under perioden 1 Dec - 31 Mars byter vi bara på bilar som står parkerade i garage & P-hus Däckbytet tar 20-40 min beroende på omständigheter.',
    },
  ];

  const curtains = [
    {
      question: 'Kan ni köpa gardiner åt mig?',
      answer: 'Tyvärr är det inte en tjänst vi gör för tillfället.',
    },
    {
      question: 'Jag är osäker på om mina markeringar är raka?',
      answer:
        'i-fix har rätt mätinstrument för att säkerställa att allt hänger rakt.',
    },
  ];

  const paintings = [
    {
      question: 'Jag är osäker på om mina markeringar är raka?',
      answer:
        'i-fix har rätt mätinstrument för att säkerställa att allt hänger rakt.',
    },
    {
      question: 'Kan ni köpa spegel åt mig?',
      answer: 'Tyvärr är det inte en tjänst vi gör för tillfället.',
    },
  ];

  const tvMounting = [
    {
      question: 'Kan ni köpa väggfästet åt mig?',
      answer: 'Tyvärr är det inte en tjänst vi gör för tillfället.',
    },
  ];

  const furniture = [
    {
      question: 'Hur lång tid tar det att montera en möbel?',
      answer:
        'Det är svårt att beräkna tid då det beror på många faktorer vissa möbler är mer komplexa än andra.',
    },
    {
      question: 'Varför betalar jag för 2 fixare ?',
      answer:
        '2 fixare är det minsta vi skickar ut på våra uppdrag, Det går alltid snabbare att montera möbler när man är 2 personer och oftast kan det innebära tunga lyft. Efter montering är det också enklare att placera ut en möbel på rätt plats.',
    },
  ];

  const shelves = [
    {
      question: 'Hur lång tid tar det att montera en hylla?',
      answer:
        'Det är svårt att beräkna en tid då det beror på många faktorer, vissa hyllor är mer komplexa än andra.',
    },
    {
      question: 'Varför betalar jag för 2 fixare ?',
      answer:
        '2 fixare är det minsta vi skickar ut på våra uppdrag, Det går alltid snabbare att montera hyllor när man är 2 personer och oftast kan det innebära tunga lyft. Efter montering är det också enklare att placera ut en möbel på rätt plats.',
    },
  ];

  const QUESTIONS = {
    ['Biltvätt']: carWash,
    ['Däckbyte']: tireChange,
    ['Hänga upp gardiner']: curtains,
    ['Hänga upp tavlor/speglar']: paintings,
    ['TV-montering']: tvMounting,
    ['Montering av möbler']: furniture,
    ['Hänga upp hyllor']: shelves,
  };

  const headings = [
    'Biltvätt',
    'Däckbyte',
    'Hänga upp gardiner',
    'Hänga upp tavlor/speglar',
    'TV-montering',
    'Montering av möbler',
    'Hänga upp hyllor',
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {headings.map((heading, index) => (
        <View key={index}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>{heading}</Text>
          </View>
          {QUESTIONS[heading].map((item, i) => (
            <Questions key={i} item={item} />
          ))}
        </View>
      ))}
    </ScrollView>
  );
};
