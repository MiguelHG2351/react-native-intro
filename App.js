import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { NavigationTab } from './src/components/NavigationTab';
import Screens from './src/screens';
import { NavigationDrawer } from './src/components/NavigationDrawer';

export default function App() {
  return <NavigationContainer>
    {/* <NavigationTab /> */}
      {/* <Screens /> */}
      <NavigationDrawer />
    </NavigationContainer>
}
