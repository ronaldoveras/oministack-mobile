import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
export default function App() {
  return (
    <Routes/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E02051',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
  },
});
