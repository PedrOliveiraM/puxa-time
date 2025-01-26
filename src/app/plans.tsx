import { PlanCard } from '@/components/plan-card'
import { PLANS } from '@/constants/plans'
import { styles } from '@/styles/styles.plans'
import React, { useState } from 'react'
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native'
import SwitchSelector from 'react-native-switch-selector'

export default function Plans() {
  const [isAnnual, setIsAnnual] = useState(false)

  // Filtra os planos com base na seleção mensal/anual
  const filteredPlans = Object.values(PLANS).filter(plan =>
    isAnnual ? plan.productName.includes('annual') : plan.productName.includes('monthly')
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image source={require('@/assets/Logo.png')} style={styles.logo} />
        <Text style={styles.header}>Escolha seu plano</Text>

        <SwitchSelector
          options={[
            { label: 'Mensal', value: false },
            { label: 'Anual', value: true },
          ]}
          initial={0} // Índice inicial (0 para Mensal)
          onPress={(value: boolean) => setIsAnnual(value)}
          textColor="#000" // Cor do texto não selecionado
          selectedColor="#fff" // Cor do texto selecionado
          buttonColor="#007AFF" // Cor do botão selecionado
          backgroundColor="#f0f0f0" // Cor do fundo do switch
          style={styles.switchSelector}
        />

        <FlatList
          data={filteredPlans}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          renderItem={({ item }) => (
            <PlanCard
              title={item.title}
              price={item.price}
              originalPrice={item.originalPrice}
              description={item.description}
              period={isAnnual ? 'Anual' : 'Mensal'}
              isPopular={item.isPopular}
              features={item.features}
            />
          )}
        />
      </View>
    </SafeAreaView>
  )
}
