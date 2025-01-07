import { CaptainSelection } from '@/app/components/CaptainSelection'
import { TeamForm } from '@/app/components/teamForm'
import React, { useState } from 'react'
import { Image, SafeAreaView, View } from 'react-native'
import { s } from './styles'

export default function Home() {
  const [totalPlayers, setTotalPlayers] = useState<number>(0)
  const [numberOfTeams, setNumberOfTeams] = useState<number>(0)
  const [playersPerTeam, setPlayersPerTeam] = useState<number>(0)
  const [playerList, setPlayerList] = useState<string[]>([])

  const [stepOne, setStepOne] = useState<boolean>(true)
  const [stepTwo, setStepTwo] = useState<boolean>(false)

  const handleCaptainsSelected = (captains: string[]) => {
    console.log('Capitães selecionados:', captains)
  }

  const handleFinishStepOne = () => {
    setStepOne(false)
    setStepTwo(true)
  }

  const handleCancelStepTwo = () => {
    setStepTwo(false)
    setStepOne(true)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={s.container}>
        <Image source={require('@/assets/Logo.png')} style={s.logo} />

        {stepOne && (
          <TeamForm
            totalPlayers={totalPlayers}
            numberOfTeams={numberOfTeams}
            playersPerTeam={playersPerTeam}
            playerList={playerList}
            setTotalPlayers={setTotalPlayers}
            setNumberOfTeams={setNumberOfTeams}
            setPlayersPerTeam={setPlayersPerTeam}
            setPlayerList={setPlayerList}
            handleFinishStepOne={handleFinishStepOne}
          />
        )}

        {stepTwo && (
          <CaptainSelection
            numberOfTeams={numberOfTeams}
            players={playerList}
            onCaptainsSelected={handleCaptainsSelected}
            handleCancelStepTwo={handleCancelStepTwo}
          />
        )}
      </View>
    </SafeAreaView>
  )
}
