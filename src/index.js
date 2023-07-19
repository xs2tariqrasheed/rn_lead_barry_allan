import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, SafeAreaView, Platform, View } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './navigation';
import store from './config/store';

export default () => (
  <SafeAreaProvider>
    {Platform.OS === 'android' ? <StatusBar /> : <View style={{height:32, backgroundColor:"#FFE6DD"}}></View>}

    <Provider store={store}>
      <Navigation/>
    </Provider>

    {/* {Platform.OS !== 'android' && <SafeAreaView />} */}
  </SafeAreaProvider>
);
