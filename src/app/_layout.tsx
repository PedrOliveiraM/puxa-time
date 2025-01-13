import { colors } from '@/styles/colors'
import {
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
  useFonts,
} from '@expo-google-fonts/rubik'
import { Stack } from 'expo-router'
import React, { useCallback } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Loading } from './components/loading'

const gestureHandlerStyle = { flex: 1 }

const Layout: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  })

  const screenOptions = useCallback(
    () => ({
      headerShown: false,
      contentStyle: { backgroundColor: colors.background },
    }),
    []
  )

  if (!fontsLoaded) return <Loading />

  return (
    <GestureHandlerRootView style={gestureHandlerStyle}>
      <Stack screenOptions={screenOptions()} />
    </GestureHandlerRootView>
  )
}

export default Layout
