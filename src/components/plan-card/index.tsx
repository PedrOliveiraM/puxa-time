import type { PlanCardProps } from '@/types/IPlanCardProps'
import { IconCheck } from '@tabler/icons-react-native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export function PlanCard({
  title,
  price,
  originalPrice,
  description,
  period,
  features,
  isPopular, // Adicionando a propriedade isPopular
}: PlanCardProps) {
  const billed = period === 'Mensal' ? 'Cobrado mensalmente' : 'Cobrado anualmente'

  return (
    <View style={[styles.card, isPopular && styles.cardPopular]}>
      
      {isPopular && (
        <View style={styles.popularTag}>
          <Text style={styles.popularText}>Mais Popular</Text>
        </View>
      )}
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.priceContainer}>
          <Text style={styles.currency}>De</Text>
          <Text style={styles.originalPrice}>{originalPrice}</Text>
        </View>

        <Text style={styles.discountText}>Por apenas</Text>

        <View style={styles.priceContainer}>
          <Text style={styles.currency}>R$</Text>
          <Text style={styles.price}>{price}</Text>
        </View>

        <Text style={styles.billed}>{billed}</Text>

        <View style={styles.featuresContainer}>
          <Text style={styles.featureTitle}>Recursos</Text>
          {features.map((feature, index) => (
            <View style={styles.featureItem} key={index}>
              <IconCheck />
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Comprar Agora</Text>
      </TouchableOpacity>
    </View>
  )
}
