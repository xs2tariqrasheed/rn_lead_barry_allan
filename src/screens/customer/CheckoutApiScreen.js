import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Dimensions,
    Alert,
} from 'react-native';
import axios from 'axios';
import { WebView } from 'react-native-webview';
import { useNavigation, useFocusEffect, useRoute } from '@react-navigation/native';
import { Header } from '../../components/common';
import { RUBIK_REGULAR } from '../../constants/fonts';
import { LIGHT_PEACH, WHITE } from '../../constants/colors';
import { postOrder, getOrder } from '../../api/klarna.api'
import { updateKlarnaPayed, updateBookingStatus, bookingId, klarnaId } from '../../actions/bookings.action';
import { CONFIRMATION_SCREEN } from '../../constants/screens';
import { updateKlarnaStatus } from '../../api/bookings.api';
import { getUserInfo2 } from '../../api/auth.api';


export default () => {
    const route = useRoute();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const bookings = useSelector((state) => state.bookings);
    const [htmlSnippet, setHtmlSnippet] = useState('');
    const [orderId, setOrderId] = useState();
    const services = useSelector((state) => state.services);
    const [orderRow, setOrderRow] = useState([]);
    const [labelBack, setLabelBack] = useState('Avbryt');
    const [user, setUser] = useState({});
    const authState = useSelector((state) => state.auth);


    const totalPrice = () => {
        if (!bookings || bookings.length === 0) {
            return 0;
        }
        return bookings
            .map((booking, i) => {
                const service = services.find((s) => s.id === booking.service_id);
                return booking.status === 'pending'
                    ? service.price_type === 'per_unit'
                        ? service.prices[booking.quantity - 1]
                        : service.price * booking.quantity
                    : 0;
            })
            .reduce((b1, b2) => b1 + b2);
    };

    // const getCheckOutHtlm = async () => {
    //     let currentBookings = bookings.filter((booking) => booking.status === 'pending')
    //     let order_lines = []
        
       
    //     currentBookings.map(booking => {

    //         order_lines.push({
    //             "type": "physical",
    //             "reference": booking.id,
    //             "name": booking.service.title,
    //             "quantity": booking.quantity,
    //             "quantity_unit": "st",
    //             "unit_price": booking.service.prices[0] + "00",
    //             "tax_rate": 2500,
    //             "total_amount": (booking.service.prices[0] * booking.quantity) + "00",
    //             "total_discount_amount": 0,
    //             "total_tax_amount": (booking.service.prices[0] * 0.2 * booking.quantity) + "00"
    //         })
    //     })

    //     let customer_obj = {};
    //     if(authState.currentUser.organization_number != null){
    //         customer_obj = {
    //             "type": "organization",
    //             "organization_registration_id":  authState.currentUser.organization_number
    //         }
    //     }
        
    //     console.log('Look here')
    //     console.log(authState)
    //     const data = {
    //         "purchase_country": "SE",
    //         "purchase_currency": "SEK",
    //         "locale": "sv-SE",
    //         "order_amount": totalPrice() + "00",
    //          "customer": customer_obj,
            
    //         "order_tax_amount": totalPrice() * 0.2 + "00",
    //         "merchant_reference1": bookings.id,
    //         "order_lines": order_lines,
           
    //         "merchant_urls": {
    //             "terms": "https://www.example.com/terms.html",
    //             "checkout": "https://www.example.com/checkout.html",
    //             "confirmation": "https://www.example.com/confirmation.html",
    //             "push": "https://www.example.com/api/push"
    //         }
            
    //     }
    
        
        
        
    //     const response = await postOrder(data)
    //     setHtmlSnippet(response.data.html_snippet)
    //     setOrderId(response.data.order_id)
    //     setOrderRow(order_lines)

    // }

    const getCheckOutHtlm = async () => {
        let currentBookings = bookings.filter((booking) => booking.status === 'pending')
        //if user is company customer switch prices, change this logic in the future to get correct from db
        if(authState.currentUser.organization_number != null){
            currentBookings.forEach(booking => {
                services.forEach(service => {
                    if (booking.service.id === service.id){
                        booking.service.prices = service.prices
                    }
                });
            });
        }
        let order_lines = []
        let totalOrderTaxAmount = Number(0);

        currentBookings.map(booking => {
            let totaltTaxAmount = booking.service.prices[booking.quantity- 1] + "00"
            if(totaltTaxAmount != undefined || totaltTaxAmount != null){
                totalOrderTaxAmount += parseInt(totaltTaxAmount * 0.2)
            }
            order_lines.push({
                "type": "physical",
                "reference": booking.id,
                "name": booking.service.title,
                "quantity": 1,
                "quantity_unit": "st",
                "unit_price": booking.service.prices[booking.quantity-1] + "00",
                "tax_rate": 2500,
                "total_amount": (booking.service.prices[booking.quantity-1]) + "00",
                "total_discount_amount": 0,
                "total_tax_amount": totaltTaxAmount*0.2
            })
        })
        let customer_obj = {};
        if(authState.currentUser.organization_number != null){
            customer_obj = {
            "type": "organization",
            "organization_registration_id": authState.currentUser.organization_number
            }
        }
        
        const data = {
            "purchase_country": "SE",
            "purchase_currency": "SEK",
            "locale": "sv-SE",
            "customer": customer_obj,
            "order_amount": totalPrice() + "00",
            "order_tax_amount": totalOrderTaxAmount,
            "order_lines": order_lines,
            "merchant_urls": {
            "terms": "https://www.example.com/terms.html",
            "checkout": "https://www.example.com/checkout.html",
            "confirmation": "https://www.example.com/confirmation.html",
            "push": "https://www.example.com/api/push"
        }
        }        

        
        const response = await postOrder(data)
        setHtmlSnippet(response.data.html_snippet)
        setOrderId(response.data.order_id)
        setOrderRow(order_lines)
        
    }

    const renderThankYou = async () => {
        const response = await getOrder(orderId)
        if (response) {
            if (response.data.status === "checkout_complete") {

                setLabelBack("Klar")

                setHtmlSnippet(response.data.html_snippet) 
                orderRow.map(row =>{            
                dispatch(updateKlarnaPayed(row.reference, orderId))
                })
            }
        }
    }

    useFocusEffect(

        useCallback(() => {
        
        
        getUserInfo2().then((res) => {
        
        setUser(res.data)
        
        
        }).finally(() => {
        
        getCheckOutHtlm()
        
        });
        
        }, [])
        
        );

    const headerText = <Text style={styles.headerText}>Klarna Payment</Text>;
    const jsCode =
        `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=10.0, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);  window._klarnaCheckout(function(api) {
    api.on({
      'redirect_initiated': function(data) {
        window.ReactNativeWebView.postMessage(data);
      }
    });
  });`
  
    return (
        <View style={styles.container}>
            <Header
                iconLeft={<Text>{labelBack}</Text>}
                text={headerText} 
                color={LIGHT_PEACH} 
                leftPress={() => {
                    if(labelBack != "Klar"){
                        navigation.goBack()
                    
                    }
                    else{
                    navigation.navigate(CONFIRMATION_SCREEN)
             }                      
            }} 
                />
            <View style={{ height: '85%' }}>
                
                    <WebView
                        javaScriptEnabled={true}
                        originWhitelist={["*"]}
                        onNavigationStateChange={(navState) => {
                            // Keep track of going back navigation within component
                            // this.canGoBack = navState.canGoBack;
                        }}
                        injectedJavaScript={jsCode}
                        onMessage={event => {
                            renderThankYou(event.nativeEvent.data)
                        }}
                        source={{ html: htmlSnippet }}
                        style={{ height: 1600 }}
                        scalesPageToFit={false}
                    />
                
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    containerWeb: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        
        height: Dimensions.get('window').height,
        backgroundColor: WHITE,
    },
    headerText: {
        fontFamily: RUBIK_REGULAR,
        fontSize: 17,
    },
    subContainer: {
        flex: 1,
    },
    paymentView: {
        height: Dimensions.get('window').height * 0.8,
    },
    buttonContainer: {
        height: Dimensions.get('window').height * 0.2,
        justifyContent: 'center',
        backgroundColor: WHITE,
    },
});
