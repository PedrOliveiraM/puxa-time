import { Player } from '@/types/IPlayer'
import { SkillLevel } from '@/types/ISkill'
import { Team } from '@/types/ITeams'
import { Alert } from 'react-native'
// Função para embaralhar um array (para o sorteio aleatório)
const shuffleArray = (array: Player[]): Player[] => {
  return [...array].sort(() => Math.random() - 0.5)
}

// Função para distribuir jogadores para times aleatoriamente e equilibradamente
export const drawTeamsRandomly = (
  players: Player[],
  numTeams: number,
  playersPerTeam: number
): Team[] => {
  // Separar capitães e jogadores restantes
  const captains = players.filter(player => player.isCaptain)
  const nonCaptains = shuffleArray(players.filter(player => !player.isCaptain))

  // Verifica se há capitães suficientes
  if (captains.length < numTeams) {
    return []
  }

  // Inicializa os times com os capitães
  const teams: Team[] = Array.from({ length: numTeams }, (_, index) => {
    const captain = captains[index]
    return {
      name: captain ? `Time do ${captain.name}` : `Time ${index + 1}`,
      players: captain ? [captain] : [],
      score: 0,
      defeats: 0,
      draws: 0,
      victories: 0,
    }
  })

  // Distribuir os jogadores restantes de forma equilibrada
  nonCaptains.forEach(player => {
    // Encontra o primeiro time com menos jogadores que o limite
    const team = teams.find(team => team.players.length < playersPerTeam)
    if (team) {
      team.players.push(player)
    }
  })

  // Valida se os times não excedem o limite de jogadores por time
  teams.forEach(team => {
    if (team.players.length > playersPerTeam) {
      Alert.alert(`O time ${team.name} excedeu o limite de jogadores por time.`)
    }
  })

  return teams
}

// Função para distribuir jogadores para os times pela ordem de chegada (baseado no 'position')
export const drawTeamsByArrival = (
  players: Player[],
  numTeams: number,
  playersPerTeam: number
): Team[] => {
  // Filtra os capitães e os demais jogadores
  const captains = players.filter(player => player.isCaptain)
  const nonCaptains = players
    .filter(player => !player.isCaptain)
    .sort((a, b) => (a.position || 0) - (b.position || 0)) // Ordena os não capitães pela posição

  // Verifica se há capitães suficientes para os times
  if (captains.length !== numTeams) {
    return []
  }

  // Inicializa os times com os capitães
  const teams: Team[] = Array.from({ length: numTeams }, (_, index) => {
    const captain = captains[index]
    return {
      name: captain ? `Time do ${captain.name}` : `Time ${index + 1}`,
      players: captain ? [captain] : [],
      score: 0,
      defeats: 0,
      draws: 0,
      victories: 0,
    }
  })

  // Preenche os times sequencialmente com os não capitães
  let teamIndex = 0 // Índice do time atual
  for (const player of nonCaptains) {
    // Adiciona o jogador ao time atual
    teams[teamIndex].players.push(player)

    // Avança para o próximo time se o atual estiver cheio
    if (teams[teamIndex].players.length === playersPerTeam) {
      teamIndex++
      if (teamIndex >= numTeams) break // Para se todos os times estiverem preenchidos
    }
  }

  // Emite um aviso se algum time exceder o limite de jogadores
  teams.forEach(team => {
    if (team.players.length > playersPerTeam) {
      Alert.alert(`O time ${team.name} excedeu o limite de jogadores por time.`)
    }
  })

  return teams
}

// Função para distribuir jogadores nos times priorizando aqueles com `priority: true`
export const drawTeamsByPriority = (
  players: Player[],
  numTeams: number,
  playersPerTeam: number
): Team[] => {
  const captains = players.filter(player => player.isCaptain) // Filtra os capitães
  const priorityPlayers = players.filter(player => player.priority && !player.isCaptain) // Filtra os jogadores com prioridade (exceto capitães)
  const nonPriorityPlayers = players.filter(
    player => !player.priority && !player.isCaptain
  ) // Resto dos jogadores

  // Verifica se há capitães suficientes para os times
  if (captains.length !== numTeams) {
    return []
  }

  // Embaralha os jogadores com prioridade e os sem prioridade
  const shuffledPriorityPlayers = shuffleArray(priorityPlayers)
  const shuffledNonPriorityPlayers = shuffleArray(nonPriorityPlayers)

  // Inicializa os times com os capitães
  const teams: Team[] = Array.from({ length: numTeams }, (_, index) => {
    const captain = captains[index]
    return {
      name: captain ? `Time do ${captain.name}` : `Time ${index + 1}`,
      players: captain ? [captain] : [],
      score: 0,
      defeats: 0,
      draws: 0,
      victories: 0,
    }
  })

  // Preenche os dois primeiros times com jogadores prioritários
  let teamIndex = 0
  while (shuffledPriorityPlayers.length) {
    // Limita os jogadores prioritários apenas aos dois primeiros times
    if (teamIndex < 2 && teams[teamIndex].players.length < playersPerTeam) {
      teams[teamIndex].players.push(shuffledPriorityPlayers.pop()!)
    }
    teamIndex = (teamIndex + 1) % 2 // Alterna apenas entre os dois primeiros times
  }

  // Preenche os times restantes com jogadores não prioritários
  teamIndex = 0
  while (shuffledNonPriorityPlayers.length) {
    if (teams[teamIndex].players.length < playersPerTeam) {
      teams[teamIndex].players.push(shuffledNonPriorityPlayers.pop()!)
    }
    teamIndex = (teamIndex + 1) % numTeams
  }

  // Emite um aviso caso algum time exceda o limite de jogadores
  teams.forEach(team => {
    if (team.players.length > playersPerTeam) {
      Alert.alert(`O time ${team.name} excedeu o limite de jogadores por time.`)
    }
  })

  return teams
}
// Função para calcular a pontuação de um time
const calculateTeamScore = (team: Team): number => {
  return team.players.reduce((total, player) => {
    switch (player.skill) {
      case 'Beginner':
        return total + 1
      case 'Intermediate':
        return total + 1.5
      case 'Advanced':
        return total + 2
      default:
        return total
    }
  }, 0)
}

// Função para rebalancear os times
const rebalanceTeams = (teams: Team[], playersPerTeam: number): Team[] => {
  // Ordena os times pela pontuação
  teams.sort((a, b) => (a.score || 0) - (b.score || 0))

  // Rebalanceamento iterativo para maior precisão
  let needRebalance = true
  while (needRebalance) {
    needRebalance = false
    // Encontrar os times com maior e menor pontuação
    const maxTeam = teams[teams.length - 1]
    const minTeam = teams[0]

    // Verificar se há necessidade de rebalanceamento
    if (maxTeam && minTeam && Math.abs(maxTeam.score - minTeam.score) > 1) {
      // Tenta encontrar um jogador para trocar entre os times
      for (const skill of ['Advanced', 'Intermediate', 'Beginner'] as SkillLevel[]) {
        const maxPlayerIndex = maxTeam.players.findIndex(player => player.skill === skill)
        const minPlayerIndex = minTeam.players.findIndex(player => player.skill === skill)

        if (maxPlayerIndex !== -1 && minTeam.players.length < playersPerTeam) {
          const maxPlayer = maxTeam.players.splice(maxPlayerIndex, 1)[0]
          minTeam.players.push(maxPlayer)

          // Recalcular as pontuações
          maxTeam.score = calculateTeamScore(maxTeam)
          minTeam.score = calculateTeamScore(minTeam)

          needRebalance = true
          break
        }
      }
    }
  }

  return teams
}

// Função principal para formar os times
export const drawTeamsBySkill = (
  players: Player[],
  numTeams: number,
  playersPerTeam: number
): Team[] => {
  // Filtra os capitães e remove-os da lista de jogadores
  const captains = players.filter(player => player.isCaptain)
  const remainingPlayers = players.filter(player => !player.isCaptain)

  if (captains.length < numTeams) {
    throw new Error('Número insuficiente de capitães para formar os times.')
  }

  // Separa os jogadores por habilidade
  const skillLevels: { [key in SkillLevel]: Player[] } = {
    Beginner: shuffleArray(
      remainingPlayers.filter(player => player.skill === 'Beginner')
    ),
    Intermediate: shuffleArray(
      remainingPlayers.filter(player => player.skill === 'Intermediate')
    ),
    Advanced: shuffleArray(
      remainingPlayers.filter(player => player.skill === 'Advanced')
    ),
  }

  // Inicializa os times com os capitães
  const teams: Team[] = Array.from({ length: numTeams }, (_, index) => {
    const captain = captains[index]
    return {
      name: captain ? `Time do ${captain.name}` : `Time ${index + 1}`,
      players: captain ? [captain] : [],
      score: 0,
      defeats: 0,
      draws: 0,
      victories: 0,
    }
  })

  // Função para preencher times de forma balanceada
  const distributePlayers = (players: Player[], teams: Team[]) => {
    let playerIndex = 0
    while (playerIndex < players.length) {
      teams.forEach(team => {
        if (team.players.length < playersPerTeam && playerIndex < players.length) {
          team.players.push(players[playerIndex])
          playerIndex++
        }
      })
    }
  }

  // Distribui jogadores balanceadamente por habilidade
  distributePlayers(skillLevels.Beginner, teams)
  distributePlayers(skillLevels.Intermediate, teams)
  distributePlayers(skillLevels.Advanced, teams)

  teams.forEach(team => {
    team.score = calculateTeamScore(team)
  })

  // Rebalancear os times
  rebalanceTeams(teams, playersPerTeam)

  return teams
}
