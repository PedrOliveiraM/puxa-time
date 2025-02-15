import { SkillCardProps } from '@/types/ISkillCard';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const skillLevels = [
  { level: 1, icon: require('@/assets/skills/Advanced-icon.png') },
  { level: 2, icon: require('@/assets/skills/Advanced-icon.png') },
  { level: 3, icon: require('@/assets/skills/Advanced-icon.png') },
  { level: 4, icon: require('@/assets/skills/Advanced-icon.png') },
  { level: 5, icon: require('@/assets/skills/Advanced-icon.png') },
];

export function SkillCard({ item, handleSkillChange }: SkillCardProps) {
  return (
    <View style={styles.playerItem}>
      <Text style={styles.playerText} numberOfLines={1} ellipsizeMode="tail">
        {item.name}
      </Text>
      
      <View style={styles.skillButtonsContainer}>
        {skillLevels.map(({ level, icon }) => (
          <TouchableOpacity
            key={level}
            style={[styles.skillButton, item.skill! >= level && styles.selectedSkillButton]}
            onPress={() => handleSkillChange(item.name, level)}
          >
            {item.skill! >= level ? (
              <Image source={icon} style={styles.skillImage} />
            ) : (
              <View style={styles.circle} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
