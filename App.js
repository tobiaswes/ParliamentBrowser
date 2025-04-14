import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IndexScreen from './screens/IndexScreen';
import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Hem">
        <Stack.Screen name="Hem" component={IndexScreen} />
        <Stack.Screen name="Lista" component={ListScreen} />
        <Stack.Screen name="Detaljer" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}