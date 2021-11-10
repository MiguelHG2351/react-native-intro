import React from 'react'
import LoginForm from '../components/loginForm'
import Saludar from '../components/Saludar'
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

export function HomeScreen(props) {
    const { navigation } = props;
    function onChangeText() {
        console.log('onChangeText');
    }

    const goToPage = (pageName) => {
        console.log('goToPage');
        navigation.navigate(pageName);
    }

    return (
        <SafeAreaView>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <Text>Estamos en Home Screen</Text>
            <View style={styles.container}>
                <Text>Siuuuuuuuuuuuuuuuuu!</Text>
                <Text>Xd</Text>
                <Saludar firstName="Andre" lastName="Valentin"/>
                <LoginForm onChangeText={onChangeText} />
            </View>
            <Button onPress={() => goToPage('Settings')} title="Go to Setting" />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
