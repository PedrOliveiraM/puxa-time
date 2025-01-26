import { SkillCardProps } from '@/types/ISkillCard'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export function SkillCard({ item, handleSkillChange }: SkillCardProps) {
  return (
    <View style={styles.playerItem}>
      <Text style={styles.playerText}>
        {item.name.length > 12 ? `${item.name.substring(0, 12)}...` : item.name}
      </Text>

      <View style={styles.skillButtons}>
        <TouchableOpacity
          style={[
            styles.skillButton,
            item.skill === 'Beginner' && styles.selectedSkillButton,
          ]}
          onPress={() => handleSkillChange(item.name, 'Beginner')}
        >
          <Image
            source={require('@/assets/skills/Beginner-icon.png')}
            style={styles.skillImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.skillButton,
            item.skill === 'Intermediate' && styles.selectedSkillButton,
          ]}
          onPress={() => handleSkillChange(item.name, 'Intermediate')}
        >
          <Image
            source={require('@/assets/skills/Intermediate-icon.png')}
            style={styles.skillImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.skillButton,
            item.skill === 'Advanced' && styles.selectedSkillButton,
          ]}
          onPress={() => handleSkillChange(item.name, 'Advanced')}
        >
          <Image
            source={require('@/assets/skills/Advanced-icon.png')}
            style={styles.skillImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
