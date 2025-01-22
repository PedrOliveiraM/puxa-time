import { HeaderBackButton } from '@/components/header-back-button'
import { Loading } from '@/components/loading'
import { GameProvider } from '@/context/GameContext'
import { colors } from '@/styles/colors'
import {
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
  useFonts,
} from '@expo-google-fonts/rubik'
import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  })

  if (!fontsLoaded) return <Loading />

  return (
    <GameProvider>
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.background }}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              title: '',
              headerShown: true,
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="players"
            options={{
              title: '',
              headerShown: true,
              headerTransparent: true,
              header: () => <HeaderBackButton />,
            }}
          />
          <Stack.Screen
            name="infoTeams"
            options={{
              title: '',
              headerShown: true,
              headerTransparent: true,
              header: () => <HeaderBackButton />,
            }}
          />
          <Stack.Screen
            name="modeSort"
            options={{
              title: '',
              headerShown: true,
              headerTransparent: true,
              header: () => <HeaderBackButton />,
            }}
          />
          <Stack.Screen
            name="playersOrder"
            options={{
              title: '',
              headerShown: true,
              headerTransparent: true,
              header: () => <HeaderBackButton />,
            }}
          />

          <Stack.Screen
            name="playersPriority"
            options={{
              title: '',
              headerShown: true,
              headerTransparent: true,
              header: () => <HeaderBackButton />,
            }}
          />

          <Stack.Screen
            name="playersSkill"
            options={{
              title: '',
              headerShown: true,
              headerTransparent: true,
              header: () => <HeaderBackButton />,
            }}
          />

          <Stack.Screen
            name="captains"
            options={{
              title: '',
              headerShown: true,
              headerTransparent: true,
              header: () => <HeaderBackButton />,
            }}
          />

          <Stack.Screen
            name="drawerTeams"
            options={{
              title: '',
              headerShown: true,
              headerTransparent: true,
              header: () => <HeaderBackButton />,
            }}
          />
        </Stack>
      </GestureHandlerRootView>
    </GameProvider>
  )
}
