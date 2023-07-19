import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import { Overlay } from 'react-native-elements';
import { Icon } from 'native-base';
import { CheckBox, Divider } from 'react-native-elements';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { RUBIK_MEDIUM, RUBIK_MEDIUM_ITALIC, RUBIK_REGULAR } from '../../constants/fonts';
import { Button } from '../common';
import { PEACH, appColor, black, lightOrange } from '../../constants/colors';

const ExtraModal = (props) => {
  const {
    visible,
    closeModal,
    service_type
  } = props;
 
  return (
    <Overlay
      isVisible={visible ? visible : false}
      onBackdropPress={props.toggleOverlay}
      useNativeDriver={true}
      animationIn={props.animationIn}
      animationOut={props.animationOut}
      animationOutTiming={props.animationOutTiming}
      overlayStyle={styles.overlayStyle}
    >
      <View style={styles.wraper}>
        <View style={styles.content}>
          {service_type == "dot-circle" ? (
          <Text style={styles.textStyle}>Hämtning/Lämning från förråd 99:-</Text>
          ) : service_type == "car-side" ? (
           
            <Text style={styles.textStyle}>Glasbehandling 399 :-</Text>
            ) : (
          
          <Text style={styles.textStyle}>Småfix 199 :-</Text>

          )}
         
          {service_type == "dot-circle" ? (
            <View style={styles.textView}>
            <Text style={styles.smallText}>Har du dina bildäck i ett närliggande förråd?</Text>
          </View>

        ) : service_type == "car-side" ? (
          <View style={styles.textView}>
            <Text style={styles.smallText}>Denna glasbehandling stöter bort regn och smuts
            från dina glasrutor så du minskar behovet av
            spolarvätska & vindrutetorkare.</Text>
          </View>

          ) : (
            <View style={styles.textView}>
            <Text style={styles.smallText}>Häng upp dom där tavlorna som ligger och dammar i förrådet eller varför inte hänga upp amplarna du köpte förra året? Passa på medans fixaren är på plats!</Text>
          </View>

          )}

          {service_type == "dot-circle" ? (
            <View style={styles.textView}>
            <Text style={styles.smallText}>Vi fixar det. </Text>
            <Text style={styles.smallText}>Vi hämtar och lämnar dina bildäck till och från förrådet</Text>
            <Text style={styles.smallText}>Max 50m från din parkerade bil.</Text>
          </View>
          ) : service_type == "car-side" ? (
            <View style={styles.textView}> 
            <Text style={styles.smallText}>Det gäller vindruta (fram & bak) samt alla sidofönster (ej glas tak)</Text>
            </View>
          ) :  (
            <>
          <View style={styles.textView}>
            <Text style={styles.smallTextHeading}>Exempel på småfix:</Text>
          </View>

          <View style={styles.textViewBullet}>
            <Text style={styles.smallTextBullet}><Text style={{fontSize:22, fontWeight:"bold"}}>.</Text> Väggdekoration</Text>
          </View>
          <View style={styles.textViewBullet}>
            <Text style={styles.smallTextBullet}><Text style={{fontSize:22, fontWeight:"bold"}}>.</Text> Tempeltavla</Text>
          </View>

          <View style={styles.textViewBullet}>
            <Text style={styles.smallTextBullet}><Text style={{fontSize:22, fontWeight:"bold"}}>.</Text> Fotoramar</Text>
          </View>
          <View style={styles.textViewBullet}>
            <Text style={styles.smallTextBullet}><Text style={{fontSize:22, fontWeight:"bold"}}>.</Text> Mindre reparationer ex, skruva åt </Text>
          </View>
          <View style={styles.textViewBullet}>
            <Text style={styles.smallTextBullet}><Text style={{fontSize:22, fontWeight:"bold"}}> </Text> något som sitter löst.</Text>
          </View>
          <View style={styles.textViewBullet}>
            <Text style={styles.smallTextBullet}><Text style={{fontSize:22, fontWeight:"bold"}}>.</Text> Byta glödlampor</Text>
          </View>

          <View style={styles.textView}>
            <Text style={styles.smallTextItalic}>I denna tjänst ingår ej montering. Endast borra hål + plugg och skruv/ krok Max 4 hål & plugg. Det är fixaren som avgör om småfixet går att utföra.</Text>
          </View>
          </>
          )}
          <View style={{width:"100%", alignContent:"center", alignItems:"center", marginTop:28}}>
            <TouchableOpacity onPress={() => Linking.openURL("http://www.i-fix.se/swish")}>
              <Text style={{fontSize:16, fontWeight:"bold", color:"#B75C5C"}}>Betala här</Text>
            </TouchableOpacity>
          </View>

          <Button
            text="Ok"
            onPress={closeModal}
            color={lightOrange}
            btnStyle={styles.btnStyle}
          />
        </View>
      </View>
    </Overlay>
  );
};
export default ExtraModal;

const styles = StyleSheet.create({
  overlayStyle: {
    backgroundColor: 'transparent',
    // borderTopRightRadius: 30,
    // borderTopLeftRadius: 30,
    // borderBottomRightRadius:30,
    // borderBottomLeftRadius: 30,
    marginLeft: 25,
    marginRight: 25,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingTop: 0,
    paddingRight: 0,
  },
  wraper: {
    backgroundColor: appColor,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  content: {
    width: wp(85),
    borderRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  iconStyle: {
    fontSize: 25,
    alignSelf: 'center',
  },

  textStyle: {
    color: black,
    fontFamily: RUBIK_REGULAR,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    lineHeight: 30,
    textAlign: 'center',
  },
  btnStyle: {
    backgroundColor: lightOrange,
    width: wp(60),
    marginTop: hp(3),
    marginBottom: hp(3),
  },
  btn_Style: {
    backgroundColor: lightOrange,
    width: wp(60),
    marginTop: 0,
    marginBottom: hp(3),
  },
  textView: {
    marginTop: 10,
  },
  textViewBullet: {
    marginTop: 5,

  },
  smallText: {
    color: "#000",
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    lineHeight: 23,
  },
  smallTextBullet: {
    color: "#000",
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    fontWeight:"bold"
  },
  smallTextItalic: {
    color: "#000",
    // fontFamily: RUBIK_MEDIUM_ITALIC,
    fontStyle:"italic",
    fontSize: 14,
    fontWeight:"bold"
  },
  smallTextHeading: {
    color: "#000",
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    marginTop: 10,
    fontWeight:"bold"
  }
});
