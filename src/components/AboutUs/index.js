import React, {useCallback} from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button } from '../common';
import { styles } from './style';
import { PEACH } from '../../constants/colors';

export default () => {
  const mailTo = useCallback(async () => {
      await Linking.openURL("mailto:support@i-fix.se");
  });
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.videoContainer}>
        <Icon name="play-circle-outline" type="ionicon" size={50} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.lightTextTop}>
          Har du känt behov av att ta hjälp av en hantverkare men tvekat eller
          haft en dålig upplevelse? Du är inte ensam!
        </Text>

        <Text style={styles.lightText}>
          Många upplever att det är för komplicerat och krångligt, att vi dras in i en djungel av ord som vi inte riktigt förstår. Kommer det bli dyrare än förväntat och kommer hantverkaren ens dyka upp? Det här vill vi ändra på.
        </Text>

        <Text style={styles.headingText}>i-fix gör det enkelt</Text>

        <Text style={styles.lightText}>
          Med I-fix är det enkelt att beställa en tjänst. Vi arbetar med fasta
          priser och det krävs inga offerter. Du slipper alltså onödigt krångel.
        </Text>

        <Text style={styles.headingText}>Vår personal</Text>

        <Text style={styles.lightText}>
          För oss är det viktigt att personalen som kommer hem till dig
          representerar vårt företag, vilket innebär att de är kunniga och
          punktliga. I-fix har satsat på att ha den bäst avlönade personalen i
          vår bransch.
        </Text>

        <Text style={styles.lightTextPara}>
          Det resulterar i en nöjd personal som ger en bättre upplevelse för
          både personalen och kunden.
        </Text>

        <Text style={styles.boldText}>
          Har du några frågor eller funderingar?
        </Text>
      </View>

      <Button text="Maila oss" onPress={mailTo} color={PEACH} />
    </ScrollView>
  );
};
