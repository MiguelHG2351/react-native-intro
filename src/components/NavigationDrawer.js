import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { HomeScreen } from '../screens/HomeScreen'
import { SettingScreen } from '../screens/SettingScreen'

const Drawer = createDrawerNavigator()

export function NavigationDrawer() {
    return <Drawer.Navigator>
        <Drawer.Screen name="Home Codeland" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingScreen} />
    </Drawer.Navigator>
}
