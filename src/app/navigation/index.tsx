import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

// Importação das telas
import CaptainsScreen from '../screens/CaptainsScreen'
import ConfigScreen from '../screens/ConfigScreen'
import DrawScreen from '../screens/DrawScreen'
import ModeConfigScreen from '../screens/ModeConfigScreen'
import PlayersScreen from '../screens/PlayersScreen'
import ScoreScreen from '../screens/ScoreScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Players"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Players" component={PlayersScreen} />
        <Stack.Screen name="Config" component={ConfigScreen} />
        <Stack.Screen name="Captains" component={CaptainsScreen} />
        <Stack.Screen name="ModeConfig" component={ModeConfigScreen} />
        <Stack.Screen name="Draw" component={DrawScreen} />
        <Stack.Screen name="Score" component={ScoreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
