// import React, { Component } from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   ScrollView,
//   Dimensions,
//   BackHandler,
//   Alert,
// } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import KlarnaPaymentView from 'react-native-klarna-inapp-sdk';
// import { submitAuthToken } from '../../api/bookings.api';
// import { Button, Header } from '../../components/common';
// import { RUBIK_REGULAR } from '../../constants/fonts';
// import { LIGHT_PEACH, PEACH, WHITE } from '../../constants/colors';
// import { CONFIRMATION_SCREEN } from '../../constants/screens';

// class CheckoutScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.myRef = React.createRef();
//     this.state = {
//       paymentViewLoaded: false,
//     };
//   }

//   componentDidMount() {
//     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

//     this.myRef.current.initialize(this.props.token, 'my_apps_return_url');
//   }

//   componentWillUnmount() {
//     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
//   }

//   handleBackButton() {
//     return true;
//   }

//   onInitialized = () => {
//     this.myRef.current.load();
//   };

//   onLoaded = () => {
//     this.setState({ paymentViewLoaded: true });
//   };

//   buyButtonPressed = () => {
//     this.myRef.current.authorize();
//   };

//   onAuthorized = (event) => {
//     let params = event.nativeEvent;

//     if (params.approved) {
//       submitAuthToken(params.authToken)
//         .then((res) => {
//           Alert.alert('Betalning genomförd!', 'Betalning har godkänts');
//           this.props.navigation.navigate(CONFIRMATION_SCREEN, {
//             bookings: res.data,
//           });
//         })
//         .catch(() => Alert.alert('Error!', 'Unable to complete payment'));
//     }else{
//       alert("Not approved")
//     }
//   };

//   render() {
//     const headerText = <Text style={styles.headerText}>Klarna Payment</Text>;

//     return (
//       <View style={styles.container}>
//         <Header text={headerText} color={LIGHT_PEACH} />
//         <View style={styles.subContainer}>
//           <ScrollView>
//             <KlarnaPaymentView
//               style={styles.paymentView}
//               category={'pay_now'}
//               ref={this.myRef}
//               onInitialized={this.onInitialized}
//               onLoaded={this.onLoaded}
//               onAuthorized={this.onAuthorized}
//             />
//           </ScrollView>
//           <View style={styles.buttonContainer}>
//             <Button
//               text="Pay now"
//               color={PEACH}
//               disabled={!this.state.paymentViewLoaded}
//               onPress={this.buyButtonPressed}
//             />
//             <Button text="Avbryt" onPress={this.props.navigation.goBack} />
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// export default () => {
//   const route = useRoute();
//   const navigation = useNavigation();

//   return <CheckoutScreen token={route.params.token} navigation={navigation} />;
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: Dimensions.get('window').height,
//     backgroundColor: WHITE,
//   },
//   headerText: {
//     fontFamily: RUBIK_REGULAR,
//     fontSize: 17,
//   },
//   subContainer: {
//     flex: 1,
//   },
//   paymentView: {
//     height: Dimensions.get('window').height * 0.8,
//   },
//   buttonContainer: {
//     height: Dimensions.get('window').height * 0.2,
//     justifyContent: 'center',
//     backgroundColor: WHITE,
//   },
// });
