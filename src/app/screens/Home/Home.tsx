import { CaptainSelection } from '@/app/components/CaptainSelection'
import { TeamDraw } from '@/app/components/TeamDraw'
import { TeamForm } from '@/app/components/teamForm'
import React, { useState } from 'react'
import { Image, SafeAreaView, View } from 'react-native'
import { s } from './styles'

enum Step {
  STEP_ONE = 0,
  STEP_TWO = 1,
  STEP_THREE = 2,
}

export default function Home() {
  const [totalPlayers, setTotalPlayers] = useState<number>(0)
  const [numberOfTeams, setNumberOfTeams] = useState<number>(0)
  const [playersPerTeam, setPlayersPerTeam] = useState<number>(0)
  const [playerList, setPlayerList] = useState<string[]>([])

  const [currentStep, setCurrentStep] = useState<Step>(Step.STEP_ONE)

  const handleCaptainsSelected = (captains: string[]) => {
    handleNextStep()
    console.log('Capitães selecionados:', captains)
  }

  const handleNextStep = () => {
    if (currentStep === Step.STEP_ONE) {
      setCurrentStep(Step.STEP_TWO)
    } else if (currentStep === Step.STEP_TWO) {
      setCurrentStep(Step.STEP_THREE)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep === Step.STEP_TWO) {
      setCurrentStep(Step.STEP_ONE)
    } else if (currentStep === Step.STEP_THREE) {
      setCurrentStep(Step.STEP_TWO)
    }
  }

  return (
    <SafeAreaView style={s.safeArea}>
      <View style={s.container}>
        <Image source={require('@/assets/Logo.png')} style={s.logo} />
        {currentStep === Step.STEP_ONE && (
          <TeamForm
            totalPlayers={totalPlayers}
            numberOfTeams={numberOfTeams}
            playersPerTeam={playersPerTeam}
            playerList={playerList}
            setTotalPlayers={setTotalPlayers}
            setNumberOfTeams={setNumberOfTeams}
            setPlayersPerTeam={setPlayersPerTeam}
            setPlayerList={setPlayerList}
            handleNextStep={handleNextStep}
          />
        )}

        {currentStep === Step.STEP_TWO && (
          <CaptainSelection
            numberOfTeams={numberOfTeams}
            players={playerList}
            onCaptainsSelected={handleCaptainsSelected}
            handlePreviousStep={handlePreviousStep}
            handleNextStep={handleNextStep}
          />
        )}

        {currentStep === Step.STEP_THREE && (
          <TeamDraw
            numberOfTeams={numberOfTeams}
            playersPerTeam={playersPerTeam}
            players={playerList}
            handlePreviousStep={handlePreviousStep}
          />
        )}
      </View>
    </SafeAreaView>
  )
}
