import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Localizacion from './components/location'
export default function App() {
  return (
    <View style={styles.container}>
      <Localizacion/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B43E6',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

