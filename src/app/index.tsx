import { Button } from '@/components/button'
import { s } from '@/styles/styles.index'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import React, { useEffect } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'

export default function Index() {
  const scale = useSharedValue(1)

  // Configura a animação de escala
  useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.1, { duration: 1000 }),
      -1, // Repetir para sempre
      true // Inverte a animação (vai e volta)
    )
  }, [])

  // Estilo animado
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#3b5998', '#192f6a', '#2C3A4B']}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={[s.container]}>
        {/* Logo com animação */}
        <Animated.View style={animatedStyle}>
          <Image source={require('@/assets/Logo.png')} style={s.logo} />
        </Animated.View>

        {/* Textos e botão */}
        <Text style={s.title}>Boas vindas ao Puxa Time!</Text>
        <Text style={s.subTitle}>
          Uma nova forma de escolher e organizar seu futebol.
        </Text>
        <Button style={s.button} onPress={() => router.push('/players')}>
          <Button.Title>Começar</Button.Title>
        </Button>
      </View>
    </SafeAreaView>
  )
}
