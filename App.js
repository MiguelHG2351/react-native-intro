import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginForm from './src/components/loginForm';
import Saludar from './src/components/Saludar';

export default function App() {
  function onChangeText() {
    console.log('onChangeText');
  }
  
  return (
    <View style={styles.container}>
      <Text>Siuuuuuuuuuuuuuuuuu!</Text>
      <Text>Xd</Text>
      <Saludar firstName="Russell"/>
      <Saludar firstName="Andre" lastName="Valentin"/>
      <LoginForm onChangeText={onChangeText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
