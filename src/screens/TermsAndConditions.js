import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Icon } from 'react-native-elements';
import { RUBIK_MEDIUM, RUBIK_REGULAR } from '../constants/fonts';
import { BLACK, FLORAL_WHITE, RED } from '../constants/colors';

export default () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headingContainer}>
          <View style={[styles.headingItem, styles.iconContainer]}>
            <TouchableOpacity onPress={navigation.goBack} hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
              <Icon 
                name="chevron-left"
                type="font-awesome-5"
                color={BLACK}
                size={18}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.headingTextContainer}>
            <Text style={styles.headingText}>Villkor I-FIX</Text>
          </View>
          <View style={styles.headingItem} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>Parter</Text>
          <Text style={styles.textDescription}>
          Mr.Success AB, (i-fix) Ekensbergskajen 5  117 71, Stockholm, www.i-fix.se , org. nr. 559017-8686, (nedan i-fix).
Användare är den, fysisk eller juridisk person, som registrerar konto för användning av i-fix´s tjänster. (nedan Kunden). 
Arbetare är den fysiska personen som utför tjänsterna (nedan Fixaren / Utföraren)
          </Text>
          <Text style={styles.textHeading}>Bakgrund</Text>
          <Text style={styles.textDescription}>
          i-fix verkar inom tjänstesektorn och erbjuder olika hushållsnära tjänster. Kunden har genom registrering och/eller användning av i-fix mobilapplikation eller webbplats (nedan gemensamt ”Förmedlingstjänsten, plattformen eller appen”) förklarat sig vara i behov av i-fix tjänster och parterna har med anledning härav kommit överens om följande:
          </Text>

          <Text style={styles.textHeading}>1. Användarkonto</Text>
          <Text style={styles.textDescription}>
          Vid registreringen kommer personlig information lämnas till i-fix. Denna information omfattar bland annat namn, adress, personnummer, mobilnummer. Vidare kommer kund behöva uppge registreringsnummer på det fordon som kan bli föremål för biltvätt och däckbyte tjänsterna . Det åligger Kund att upprätthålla en korrekt och uppdaterad kontoinformation.
           </Text>

           <Text style={styles.textDescription}>
           Den personliga information som i-fix samlar in används för att leverera tjänsten men kan även komma att delas med våra oberoende samarbetspartner för att lämna erbjudanden till Kund om andra produkter eller tjänster.
           </Text>
           <Text style={styles.textDescription}>
           Tjänsten tillhandahålls inte personer som tidigare har brutit mot de Allmänna Villkoren, tidigare av i-fix tillhandahållna villkor eller tillämplig lag.
           </Text>
           <Text style={styles.textDescription}>
           i-fix förbehåller sig även rätten, att efter eget gottfinnande, stänga av användare som använder Tjänsten i strid med de Allmänna Villkoren, tillämplig lag eller på ett sätt som skadar Tjänstens funktionalitet, eller annars framstår som oacceptabelt för i-fix.
           </Text>
           <Text style={styles.textDescription}>
           Som användare är du medveten om att driften av Webbplatsen och/eller Appen kan komma att störas av ett antal faktorer utanför i-fixs kontroll.
           </Text>
           <Text style={styles.textDescription}>
           i-fix ansvarar inte för skada som direkt eller indirekt orsakats av din användning av förmedlingstjänsten eller av att du inte kunnat använda förmedlingstjänsten eller av dess innehåll.  
           </Text>
           <Text style={styles.textDescription}>
           I-fix förbehåller sig rätten att upphöra att tillhandahålla del eller hela förmedlingstjänsten om det sker en regulatorisk förändring eller genom myndighetsbeslut som begränsar i-fixs möjligheter att tillhandahålla förmedlingstjänsten.
           </Text>

           <Text style={styles.textHeading}>2. Användarens ansvar</Text>
          <Text style={styles.textDescription}>
          Som Kund ansvarar du för att dina registrerade uppgifter (förnamn, efternamn samt personnummer) är korrekta och att de överensstämmer med motsvarande folkbokförda uppgifter. Det är endast tillåtet att ha ett konto per användare.
           </Text>
           <Text style={styles.textDescription}>
           Det är endast du som har registrerat dig som kund som får beställa tjänster utifrån det registrerade kontot.  Det är inte tillåtet att låta en annan person använda ditt konto i i-fix. Du åtar dig att se till att andra personer inte kan få tillgång till ditt konto. Om du har anledning att misstänka att någon obehörig har tillgång till ditt konto i i-fix åtar du dig att omedelbart kontakta oss så att vi kan spärra ditt konto i avvaktan på utredning.  

           </Text>
           <Text style={styles.textDescription}>
           Vid misstanke om att ditt konto i i-fix används av andra än dig själv, har i-fix rätt att tills vidare och utan föregående varning stänga av dig från din användning av appen.
           </Text>




          <Text style={styles.textHeading}>3. Utbud av tjänster</Text>
          <Text style={[styles.textDescription, styles.points]}>
          3.1 i-fix tillhandahåller följande tjänster:
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          a) ”Hemservice”, vilket omfattar städning, strykning, fönsterputs, flyttstädning och trädgårdsservice samt annat hushållsarbete som i-fix och Kunden i samråd kommer överens om.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          b) "Fixare" och “Fixartjänster”, vilket omfattar hemnära tjänster med fokus på ROT & RUT-arbeten och innefattar bl.a. möbelmontering, hantverkare, väggmontering. Kunden beställer jobb och förklarar i appen vad som skall göras.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          c) Bilvård , vilket omfattar miljövänlig biltvätt, glasbehandling, däckbyte, lufttryckskontroll samt påfyllning vid behov. Kunden beställer jobb och förklarar i appen vad som skall göras.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          d) ”Specialtjänster”, vilket omfattar tjänster som kunden kommer överens om med i-fix som inte finns under de påvisade tjänsterna. Omfattar jobbet något som ej finns registrerat som tjänst så kommer i-fix förse kunden med offert som ska accepteras av Kunden innan arbetet påbörjas.
          </Text>
          
          <Text style={[styles.textDescription, styles.points]}>
          3.2 Småfix är en tilläggstjänst som erbjuds till kund efter att bokning genomförts och blivit bekräftad. 
Småfix kan vara allt från att skruva åt en hylla som sitter löst till att byta ut glödlampor eller borra några extra hål. 
Småfix är något som du tillsammans med fixaren kommer överens om. 
Det är fixaren som avgör och bedömmer om det kan utföras. 
Fixarens tid, säkerhet eller andra faktorer är det som avgör om det kan genomföras. 
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          3.3 Småfix betalas endast via swish till swishnummret som visas i appen.
          </Text>

          <Text style={[styles.textDescription, styles.points]}>
          3.4 Den tjänst som i-fix tillhandahåller samt vid vilken tidpunkt tjänsten skall utföras överenskommes genom appen och bekräftas av i-fix genom att bekräftelse visas i i-fix mobilapplikation. Kunden accepterar genom att godkänna villkoren i appen.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          3.5 Det är Kundens ansvar att själv vara medveten om den tid och datum Kunden har bokat tjänsten. i-fix tar inget ansvar för att påminna Kunden. Bara om i-fix måste göra ändringar i bokningen kommer Kunden att kontaktas.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          3.6 i-fix har rätt att byta ut den utförare av tjänsten som uppges i orderbekräftelsen i appen.
          </Text>

          <Text style={styles.textHeading}>4. Åtagande</Text>
          <Text style={[styles.textDescription, styles.points]}>
          4.1 i-fix förbinder sig att utföra överenskomna tjänster på ett professionellt och för branschen korrekt sätt. i-fix skall vid utförandet av tjänsten använda sig av kompetent och lämplig personal.
i-fix ska tillhandahålla tjänsten vid den tidpunkt som anges i Orderbekräftelsen. Notera dock att försening eller avbokning kan inträffa som beror på oförutsedda händelser som i-fix rimligen inte kunnat förutse. I sådant fall har TechBuddy rätt att föreslå att flytta fram Tidsbokningen till en med hänsyn till omständigheterna lämplig tidpunkt.
          </Text>

          <Text style={[styles.textDescription, styles.points]}>
          4.2 Kunden ansvarar för att andra medlemmar eller kontaktperson i dennes hushåll uppträder korrekt och ansvarsfullt mot i-fix personal i samband med utförandet av tjänsten.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          4.3 Kunden skall informera och samråda med i-fix personal om samtliga förhållanden som den behöver känna till för att kunna utföra uppdraget professionellt och korrekt. Detta inkluderar strukturell information samt information om var ledningar och rör är dragna, vid beställning av biltvätt och däckbyte skall kundens bil vara parkerad så att i-fix personal kan utföra sitt arbete på ett säkert sätt. I-fix förbehåller sig rätten att ej utföra beställd tjänst ifall de anser att Kunden inte är informerad om förhållandena som är nödvändiga för tjänstens utförande. 
          </Text>

          <Text style={[styles.textDescription, styles.points]}>
          4.4 Kunden skall även informera i-fix om eventuella risker med att utföra ett arbete, såsom gammal tapet, mögel, ruttet material eller andra eventuella förhinder som kan försvåra arbetet.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          4.5 Kunden skall underlätta arbetet i den mån det går för i-fix att utföra tjänsten. Vissa tjänster förutsätter förberedelse för garanterat resultat inom den tidsram i-fix åtagit sig jobbet, såsom bortplockade hinder, att korrekt material finns tillgängligt samt en omöblerad bostad vid flyttstädning. Att man har låshylsan tillgänglig vid byte av bildäck samt ha bilnycklar, garagenycklar / brickor förrådsnycklar redo.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          4.6 Kunden bär fullständigt ansvar för att informationen som förmedlats till I-fix är korrekt, fullständig och så detaljerad som möjligt för att i-fix skall kunna uppskatta tidsåtgång och sedermera fastställa en offert. Då kunden valt att undanhålla eller glömt att berätta väsentlig information för det praktiska arbetet har i-fix rätt att i efterhand fakturera arvode för det extraarbete som tillkommit.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          4.7 ‍Det är inte tillåtet att som kund betala Utförare för utförande av uppdrag i Tjänsten utanför förmedlingstjänsten eller att betala en högre ersättning för ett via Tjänsten utfört uppdrag än som angivits i appen. Inköp som utförare gör som ett led i utförandet av ett uppdrag via Tjänsten för företag kan betalas av Kund utanför plattformen.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          4.8 I-fix förutsätter att varken Kunden eller Kundens närstående anställer i-fixs personal för att utföra tjänster omnämnda i detta avtal. 
Med ”närstående” avses i detta avtal;
          </Text>
          <Text style={styles.textDescription}>
          a) den som är gift eller sammanboende med Kunden; och
           </Text>
           <Text style={styles.textDescription}>
           b) den som i övrigt är nära släkting till Kunden.
           </Text>





          <Text style={[styles.textDescription, styles.points]}>
          4.9 I-fix åtar sig att i erforderlig mån vara så miljövänliga som möjligt i utförandet av tjänsten. i-fix strävar alltid efter att minska sitt miljömässiga avtryck och samarbetar med företag som hjälper i-fix att tillhandahålla miljövänliga medel som håller hög kvalitet.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          4.10 Vid beställning av biltvätt och däckbyte godkänner kund att bilder på Kundens fordon får användas i marknadsföringssyfte. Vid egen användning av bilder kommer i-fix redigera bilder på sådant sätt att registreringsnumret ej går att utläsa.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          4.11 Kunden är medveten om att utförandet av biltvätt sker utifrån rådande förutsättningar på platsen. Bilvårdaren rengör endast åtkomliga delar av fordonet och rengöring sker ej av lösa, skadade eller rostskadade delar. Det är kundens ansvar att fordonet går att komma åt och att fordonet ej blockerar trafik eller är parkerat på ett sådant sätt att utförandet medför risker för Bilvårdaren. Bilvårdaren tar bilder på fordonet före och efter den utförda tjänsten som skickas via appen. Kunden bekräftar härmed att Kunden är fullt införstådd med att det kan vara svårt att få ordentliga bilder på tvättresultat om utförandet sker då det är mörkt ute samt att tvätt resultatet kan variera beroende på väderlek och väglag och andra yttre omständigheter.
          </Text>



          <Text style={[styles.textDescription, styles.points]}>
          4.12 Kunden är medveten om att utförandet av däckbyte sker utifrån rådande förutsättningar på platsen. Det är kundens ansvar att fordonet går att komma åt och att fordonet ej blockerar trafik eller är parkerat på ett sådant sätt att utförandet medför risker för Bilvårdaren
          </Text>

          <Text style={[styles.textDescription, styles.points]}>
          i-fix äger rätt att om särskilda skäl föreligger, med omedelbar verkan häva dessa åtagande. I-fix skall dock därvid omgående informera och samråda med Kunden och kan exempelvis föreslå kund att flytta på bilen till en säkrare plats. Med särskilda skäl avses t.ex. att lyftpunkterna under bilen är skadade eller rostskadade
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          4.13 i-fix äger rätt att om särskilda skäl föreligger, med omedelbar verkan häva dessa åtagande nämnda i punkt 4. I-fix skall dock därvid omgående informera och samråda med Kunden. Med särskilda skäl avses t.ex. att arbetsmiljön är undermålig, osäker, ohälsosam eller annars sådan att i-fix inte kan utföra tjänsten på ett säkert, effektivt och bra sätt eller att samarbetet mellan Kunden och i-fixs personal inte fungerar tillfredsställande.
          </Text>

          <Text style={[styles.textDescription, styles.points]}>
          4.14 Dessa villkor samt i-fixs Integritetspolicy kan komma att ändras eller justeras. Det åligger kunden att hålla sig uppdaterad om gällande villkor, priser och policys inför varje beställning av Tjänster från I-fix.
          </Text>

          <Text style={styles.textHeading}>5. Avgifter och övriga betalningsvillkor</Text>
          <Text style={[styles.textDescription, styles.points]}>
          5.1 Kunden skall till i-fix utge ersättning för utförd tjänst enligt nu gällande priser vilka framgår i offert eller pris som erbjuds i appen.
          </Text>

          <Text style={[styles.textDescription, styles.points]}>
          5.2 i-fix samarbetar med betaltjänsten Klarna som i egen regi sköter betalningen av i-fixs tjänster. 
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          Klarnas villkor för betalning går att finna genom deras hemsida: https://www.klarna.com/se/villkor/ 
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          5.3 Offerten i appen anges i två belopp med anledning av direktavdraget i Lagen om skattereduktion för hushållsnära tjänster (s.k. RUT-avdrag) & reparation, underhåll samt ombyggnad och tillbyggnad ROT avdrag. 
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          Det högre beloppet avser den totala kostnaden för tjänsten och det lägre beloppet avser belopp efter avdragen skattereduktion för arbetskostnaden. Är Kunden berättigad till skattereduktion skall kund boka för rutan “nyttja RUT-avdrag” eller “nyttja ROT-avdrag”. Om Kunden ligger i riskzonen för att skattereduktion ej kommer att medges skall kund INTE bocka för “nyttja RUT-avdrag. Eller “nyttja ROT-avdrag”
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          5.4 Om Kunden i 5.3 har valt att bocka för alternativet “Nyttja RUT-avdrag eller “nyttja ROT-avdrag” så gäller att om Skatteverket inte godkänner Kundens direktavdrag, exempelvis på grund av att Kunden inte är berättigad till skattereduktion, så kommer i-fix debitera hela beloppet för arbetskostnaden.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          5.5 Betalning sker enligt specificerad bokning eller offert. Betalning skall ske senast det förfallodatum som anges på fakturan från Klarna. Vid betalning genom appen kommer offererat belopp reserveras av i-fixs samarbetspartner klarna vid genomförd bokning innan utförd tjänst.
Vid färdigställande av beställt jobb för privatpersoner kommer i-fix att hantera din ansökan om RUT-avdrag eller ROT-avdrag
Därefter kommer i-fix (beroende på summan kunden är berättigad till i RUT/ROT avdraget) att kreditera den slutliga summan till kund.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          Om kund uppgett felaktigt personnummer kommer vi inte att kunna hantera ansökningen, då har i-fix rätt att debitera fullt pris exklusive RUT/ROT-avdrag för den bokade tjänsten.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          För företag kommer pengarna dras permanent och tillhandahållas i-fix. Vid betalning efter förfallodagen utgår dröjsmålsränta enligt Klarnas betalningsvillkor.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          5.6 Administrativa avgifter kan tas ut för administrativt merarbete, exempelvis vid fakturabetalning.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          5.7 Kunden skall meddela i-fix minst 24 timmar i förväg om en specifik avtalad tjänst ej skall utföras. I annat fall skall full ersättning för beställd tjänst erläggas.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          5.8 Anmärkningar på i-fixs fakturor skall skriftligen vara i-fix tillhanda senast 20 dagar efter fakturadatum.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          5.9 I-fix åtar sig att kunna ändra priser för de nämnda tjänsterna i punkt 1.1 utan att behöva meddela kunden. Ett arbete som är överenskommet innan prisförändringen skall inte följa den nya prissättningen och det överenskomna priset består. I-fix förbehåller sig rätten att ändra prissättningen på Tjänsterna utan att meddela Kunden. Det åligger kunden att inför varje bokad Tjänst informera sig om aktuellt pris. Bokat pris gäller, och vid abonnemang ändras priset efter 4 veckor.
          </Text>
         
          <Text style={styles.textHeading}>6. Ansvarsbegränsning, etc.</Text>
          <Text style={[styles.textDescription, styles.points]}>
          6.1 Vid försening av service skall ersättning enligt punkt 5.1 inte utgå för den tid som motsvarar förseningen, och vid helt utebliven service som i-fix åtagit sig skall ingen ersättning enligt punkt 5.1 utgå. Kundens rätt att innehålla ersättning enligt vad nu sagts skall utgöra den enda sanktionen för försenad eller utebliven tjänst enligt detta avtal. I-fix ansvarar inte för skada eller olägenhet som kan uppkomma med anledning av underlåtenhet att uppfylla förpliktelse enligt detta avtal eller på grund av försenad eller utebliven Tjänst utöver vad som uttryckligen anges i dessa villkor. Kunden förbinder sig att inte framställa eventuella krav avseende kostnader för ersättningstjänster, inkomstbortfall eller annan ideell eller ren förmögenhetsskada med anledning av försenad eller utebliven service.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          6.2 Kunden skall erbjuda möjlighet till arbetsstart från och med 20 minuter från utsatt tid. Ifall kunden ej gjort det möjligt för I-fix att påbörja arbetet 20 minuter efter utsatt tid kan I-fix avsäga sig uppdraget. I-fix har då rätt att debitera 100% av offererad tjänstekostnad mot kunden.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          6.3 Kunden ska ha tecknat hemförsäkring. Hemförsäkringen ska täcka de vanligaste förekommande skadorna i hemmet.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          6.4 I-fix har tecknat försäkring för sin personal och för att tillhandahålla de tjänster som nämns i 3.1.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          6.5 Om det visas att i-fix eller dess personal av oaktsamhet (vårdslöshet) förorsakat sak- eller personskada ersätter i-fix sådan skada (direkt skada eller direkt förlust) eller så åtgärdar i-fix skadan/felet.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          6.6 I-fix svarar inte i något fall för ren förmögenhetsskada, indirekta skador, psykiska skador eller förluster, eller följdskador såsom exempelvis produktionsbortfall, utebliven vinst eller förlust i näringsverksamhet.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          6.7 Vid åtgärdandet är det enbart skadan som åtgärdas. Kunden är inte berättigad till värdehöjande åtgärder. Skadevärderingen och skadeersättningen sker i enlighet med villkoren i i-fixs företagsförsäkring.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          6.8 För att kunna framställa anspråk på ersättning eller göra anmärkning mot utförandet av avtalad tjänst skall Kunden inom skälig tid efter utförd tjänst underrätta i-fix därom (se 17 § Konsumenttjänstlagen).
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          6.9 Kunden kan få det svårt att uppfylla sin bevisbörda om mer än 24 timmar förflutit efter utfört arbete varför det rekommenderas att man meddelar i-fix om eventuella fel inom 24 timmar. Detta är framförallt viktigt när det kommer till själva utförandet. När det gäller sakskada rekommenderas att man meddelar i-fix inom fem (5) arbetsdagar efter skadans uppkomst till i-fix. Om det finns omständigheter som föranleder att anmälan om sakskada ej kan ske senast fem (5) arbetsdagar efter utförd tjänst men inom skälig tid görs en bedömning från fall till fall beroende på omständigheterna huruvida Kunden har förlorat sin rätt till ersättning gentemot i-fix.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          6.10 Det är enbart Kunden som har rätt till garanti på utförd tjänst. När resultatet är accepterat av Kunden förlängs ej garanti över till ny innehavare av bostaden. Detta inkluderar även familj, vänner och andra närstående till Kunden.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          6.11 Kunden bär fullt ansvar till att det finns skälig tid för i-fix att uppfylla garanti på utförd tjänst (minst 24h), exempelvis kunna korrigera ej färdigställt arbete. Ifall skälig tid ej erbjudits, har Kunden ej rätt till garanti och Kunden debiteras på hela beloppet.
          </Text>

          <Text style={styles.textHeading}>7. Avtalstid</Text>
          <Text style={[styles.textDescription, styles.points]}>
          7.1 Detta avtal gäller för de leveranser som vid beställning i Förmedlingstjänsten.
          </Text>

          <Text style={styles.textHeading}>8. Uppsägning på grund av avtalsbrott</Text>
          <Text style={[styles.textDescription, styles.points]}>
          8.1 Vardera parten äger rätt att med omedelbar verkan säga upp detta avtal;
          </Text>
          <Text style={styles.textDescription}>
          a) om den andra parten i väsentligt avseende åsidosätter sina skyldigheter enligt detta avtal och ej vidtar full rättelse inom trettio (30) dagar efter skriftligt påpekande därom från den andra parten; eller
           </Text>
           <Text style={styles.textDescription}>
           b) om den andra parten försätts i konkurs, upptar ackordsförhandling, träder i likvidation, underlåter att behörigen infria icke tvistig förbindelse eller eljest kan antas ha kommit på obestånd.
           </Text>


           <Text style={styles.textHeading}>9. Meddelanden</Text>
          <Text style={[styles.textDescription, styles.points]}>
          9.1 Meddelanden föranledda av detta avtal skall skickas skriftligen till part till villkor@i-fix.se 
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          9.2 Om parts adress eller telefonnummer ändras skall denne skriftligen meddela motparten om ny adress/telefonnummer alternativt ändra sina privata uppgifter i Förmedlingstjänsten.
          </Text>
          <Text style={[styles.textDescription, styles.points]}>
          9.3 Överenskomna avvikelser från detta avtal skall, för att gälla, upprättas skriftligen och undertecknas av båda parter.
‍
          </Text>

          <Text style={styles.textHeading}>10. Tvist</Text>
          <Text style={[styles.textDescription, styles.points]}>
          10.1 Tvist angående tolkningen eller tillämpningen av detta avtal skall i första instans avgöras i Stockholms tingsrätt.
          </Text>

          <Text style={styles.textHeading}>11. Personuppgiftslag/GDPR</Text>
          <Text style={[styles.textDescription, styles.points]}>
          11.1 Genom användande av i-fixs Tjänster och Förmedlingstjänsten godkänner Kunden att dennes personuppgifter lagras. I-fix använder de personuppgifter som Kunden lämnat i syfte att kunna uppfylla sina tjänster mot Kunden så effektivt som möjligt och för att ha möjlighet att erbjuda Kunden tilläggstjänster samt lämna erbjudanden som utgör komplement till tjänsterna. Förutom att i-fix därvid behandlar personuppgifterna internt inom företaget, använder sig i-fix även av utomstående företag som bidrar i-fix med ändamålsmässig användning av lagrade uppgifter. Kunder har enligt reglerna i EU:s Dataskyddsförordning möjlighet att kontakta i-fix för information om lagringen av personuppgifter. Mer information går att finna i i-fixs Integritetspolicy.
          </Text>

          <Text style={styles.textHeading}>12. Immateriella rättigheter</Text>
          <Text style={styles.textDescription}>
          Allt material i Tjänsten, inklusive Webbplatsens och Appens layout omfattas av upphovsrätt, varumärkesrätt, patent eller andra immateriella rättigheter. Om inte annat anges är allt material på Webbplatsen och i Appen i-fixs skyddade egendom.
          </Text>
          <Text style={styles.textDescription}>
          Du får skriva ut enskilda sidor från Webbplatsen och Appen men du får i övrigt inte kopiera, reproducera, publicera, ladda upp, skicka eller distribuera något material eller någon information på Webbplatsen eller Appen utan föregående skriftligt tillstånd från i-fix.
          </Text>
          <Text style={styles.textDescription}>
          Du bör alltid fråga om lov innan du länkar till Webbplatsen eftersom en länkning kan innebära att du anses göra innehållet tillgängligt för allmänheten. Du får göra en förflyttande länk till Webbplatsens startsida, d.v.s. en länk som ”förflyttar” läsaren helt till Webbplatsen i samma eller nytt fönster, så länge dessa är fullständiga fönster. Du får dock inte indexera innehållet på Webbplatsen eller Appen och baserat på detta automatgenerera länkar på din egen hemsida. Inte heller får du länka in Webbplatsens material i ett framesystem eller Pop-up fönster. Du bör alltid tänka på att det kan finnas andra än i-fix som har rättigheter till materialet på Webbplatsen och Appen och att dessa då också måste ge sitt tillstånd.
          </Text>
          <Text style={styles.textDescription}>
          All otillåten användning av i-fix immateriella rättigheter kan medföra ersättningsskyldighet och/eller straffansvar.
          </Text>
          <Text style={styles.textDescription}>
          Senast uppdaterad den 20:e Augusti 2021
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FLORAL_WHITE,
  },
  scrollContainer: {
    paddingBottom: '10%',
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '14%',
    marginHorizontal: '6%',
  },
  headingItem: {
    width: '30%',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'flex-start',
  },
  headingTextContainer: {
    width: '40%',
    alignItems: 'center',
  },
  headingText: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 19,
    color: BLACK,
  },
  textContainer: {
    marginHorizontal: '10%',
    marginTop: 10,
  },
  textHeading: {
    fontFamily: RUBIK_MEDIUM,
    fontSize: 16,
    color: BLACK,
    marginTop: 12,
  },
  textDescription: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 13,
    color: BLACK,
    marginTop: 6,
  },
  points: {
    marginTop: 10,
  },
});
