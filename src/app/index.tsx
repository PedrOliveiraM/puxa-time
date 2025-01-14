import { Button } from '@/components/button'
import { s } from '@/styles/styles.index'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={['#3b5998', '#192f6a', '#2C3A4B']}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={[s.container]}>
        <Image source={require('@/assets/Logo.png')} style={s.logo} />
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
