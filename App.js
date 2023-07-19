import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View} from 'react-native';

import Main from './src';

export default function App() {
  return (
    <>
      <Main/>
      <StatusBar style="auto" />
    </>
  );
}
