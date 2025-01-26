import { Team } from '@/types/ITeams'
import { IconArrowBackUp, IconCheck } from '@tabler/icons-react-native'
import { router } from 'expo-router'
import React from 'react'
import { Image, Modal, Text, View } from 'react-native'
import ConfettiCannon from 'react-native-confetti-cannon'
import { Button } from '../button'
import { ModalTemplate } from '../modal'
import { styles } from './styles'

interface WinnerModalProps {
  winnerTeams: Team[]
  isVisible: boolean
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export function WinnerModal({ isVisible, setIsVisible, winnerTeams }: WinnerModalProps) {
  const [isVisibleModal, setIsVisibleModal] = React.useState(false)

  const handleShowModal = () => {
    setIsVisibleModal(true)
  }

  const finishGame = () => {
    router.replace('/')
  }

  return (
    <View style={styles.container}>
      {isVisible && (
        <Modal transparent={true} animationType="slide" visible={isVisible}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <ConfettiCannon count={200} origin={{ x: -5, y: -20 }} />
              <Text style={styles.title}>🏆 Time Campeão 🏆</Text>
              {winnerTeams.map((team, index) => {
                const trophySource =
                  index === 0
                    ? require('@/assets/trophy-gold.png') // Troféu de ouro
                    : index === 1
                      ? require('@/assets/trophy-silver.png') // Troféu de prata
                      : require('@/assets/trophy-bronze.png') // Troféu de bronze

                return (
                  <View key={index} style={styles.teamContainer}>
                    <Text style={styles.teamName}>{team.name}</Text>
                    <Image source={trophySource} style={styles.trophyImage} />
                    <Text style={styles.stats}>
                      Vitórias: {team.victories} | Empates: {team.draws} | Derrotas:{' '}
                      {team.defeats}
                    </Text>
                    <Text style={styles.players}>
                      Jogadores: {team.players.map(p => p.name).join(', ')}
                    </Text>
                  </View>
                )
              })}

              <View style={styles.buttonContainer}>
                <Button
                  style={styles.buttonBack}
                  onPress={() => setIsVisible(false)}
                  variant="alert"
                >
                  <Button.Title>Voltar</Button.Title>
                  <Button.Icon icon={IconArrowBackUp} color="white" />
                </Button>
                <Button
                  style={styles.buttonFinish}
                  onPress={handleShowModal}
                  variant="success"
                >
                  <Button.Title>Finalizar</Button.Title>
                  <Button.Icon icon={IconCheck} color="white" />
                </Button>
              </View>
            </View>
          </View>
          {isVisibleModal && (
            <ModalTemplate
              title="Finalizar Jogo"
              description="Você realmente deseja finalizar o jogo?"
              cancelText="Cancelar"
              confirmText="Confirmar"
              onConfirm={() => finishGame()}
              onCancel={() => setIsVisibleModal(false)}
            />
          )}
        </Modal>
      )}
    </View>
  )
}
