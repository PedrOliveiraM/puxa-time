import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import React, { useEffect } from 'react'
import { Image, Text } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from './components/button'
import { s } from './styles'

export default function Index() {
  const opacity = useSharedValue(0)
  const scale = useSharedValue(0.7)

  useEffect(() => {
    opacity.value = withSpring(1)
    scale.value = withSpring(1)
  }, [])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    }
  })

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#3b5998', '#192f6a', '#2C3A4B']}
        style={s.gradientBackground}
      />
      <Animated.View style={[s.container, animatedStyle]}>
        <Image source={require('@/assets/Logo.png')} style={s.logo} />
        <Text style={s.title}>Vamos puxar os times?</Text>
        <Button style={s.button} onPress={() => router.navigate('/screens/Home/Home')}>
          <Button.Title>Começar</Button.Title>
        </Button>
      </Animated.View>
    </SafeAreaView>
  )
}
