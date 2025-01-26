import { ModalProps } from '@/types/IModal'
import React from 'react'
import { Text, View } from 'react-native'
import { Button } from '../button'
import { styles } from './styles'

export function ModalTemplate({
  title,
  description,
  onCancel,
  onConfirm,
  cancelText = 'Cancelar',
  confirmText = 'Confirmar',
}: ModalProps) {
  return (
    <View style={styles.modalBackground}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.description}>{description}</Text>

        <View style={styles.buttonContainer}>
          <Button onPress={onCancel} style={styles.cancelButton} variant="alert">
            <Button.Title>{cancelText}</Button.Title>
          </Button>
          <Button onPress={onConfirm} style={styles.confirmButton} variant="default">
            <Button.Title>{confirmText}</Button.Title>
          </Button>
        </View>
      </View>
    </View>
  )
}
