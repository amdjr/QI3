/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Tela1 from './src/pages/Tela1';
import Tela2 from './src/pages/Tela2';
import Tela3 from './src/pages/Tela3';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Tela1"
          component={Tela1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Tela2"
          component={Tela2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Tela3"
          component={Tela3}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
