import React from 'react'
import { View, TextInput, Button, Text } from 'react-native'

export default function LoginForm(props) {
  return (
    <View>
        <Text>
            Este es un formulario de login
        </Text>
        <Text>
            Este es un formulario de login
        </Text>
        <TextInput placeholder="contraseña" onChangeText={props.onChangeText} />
        <Button title="enviar" onPress={() => console.log('enviar')} />
    </View>
    // <TextInput
    //   style={{
    //     height: 40,
    //     borderColor: 'gray',
    //     borderWidth: 1,
    //     margin: 10,
    //     padding: 10,
    //     }}
    //     onChangeText={props.onChangeText}
    //     value={props.value}
    //     placeholder={props.placeholder}
    //     secureTextEntry={props.secureTextEntry}
    // />
    )
}444
