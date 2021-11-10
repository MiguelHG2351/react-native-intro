import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../screens/HomeScreen";
import { SettingScreen } from "../screens/SettingScreen";

const Tab = createBottomTabNavigator();

export function NavigationTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarInactiveTintColor: "#000",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}>
      <Tab.Screen name="Home Codeland" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}
