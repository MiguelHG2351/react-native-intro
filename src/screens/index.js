import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen';
import { SettingScreen } from './SettingScreen';

const Stack = createNativeStackNavigator();

export default function Screens() {
    return (
        <Stack.Navigator initialRouteName="Home Codeland">
            <Stack.Screen name="Home Codeland" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingScreen} />
        </Stack.Navigator>
    )
}
