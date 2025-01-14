import { Player } from "@/types/IPlayer";
import { Team } from "@/types/ITeams";

// Função para embaralhar um array (para o sorteio aleatório)
const shuffleArray = (array: Player[]): Player[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

// Função para distribuir jogadores para times aleatoriamente
export const drawTeamsRandomly = (
  players: Player[],
  numTeams: number,
  playersPerTeam: number
): Team[] => {
  // Separar capitães e jogadores restantes
  const captains = players.filter(player => player.isCaptain);
  const nonCaptains = shuffleArray(players.filter(player => !player.isCaptain));

  // Verifica se há capitães suficientes
  if (captains.length < numTeams) {
    console.warn('Número insuficiente de capitães para os times.');
    return [];
  }

  // Inicializa os times com os capitães
  const teams: Team[] = Array.from({ length: numTeams }, (_, index) => ({
    name: `Time ${index + 1}`,
    players: captains[index] ? [captains[index]] : [],
  }));

  // Distribuir os jogadores restantes aleatoriamente
  nonCaptains.forEach((player, index) => {
    const teamIndex = index % numTeams; // Distribuição cíclica
    teams[teamIndex].players.push(player);
  });

  // Valida se os times não excedem o limite de jogadores por time
  teams.forEach(team => {
    if (team.players.length > playersPerTeam) {
      console.warn(`O time ${team.name} excedeu o limite de jogadores por time.`);
    }
  });

  return teams;
};


// Função para distribuir jogadores para os times pela ordem de chegada (baseado no 'position')
export const drawTeamsByArrival = (
  players: Player[],
  numTeams: number,
  playersPerTeam: number
): Team[] => {
  // Filtra os capitães e os demais jogadores
  const captains = players.filter(player => player.isCaptain);
  const nonCaptains = players
    .filter(player => !player.isCaptain)
    .sort((a, b) => (a.position || 0) - (b.position || 0)); // Ordena os não capitães pela posição

  // Verifica se há capitães suficientes para os times
  if (captains.length !== numTeams) {
    console.warn('Número insuficiente de capitães para os times.');
    return [];
  }

  // Inicializa os times com os capitães
  const teams: Team[] = Array.from({ length: numTeams }, (_, index) => ({
    name: `Time ${index + 1}`,
    players: captains[index] ? [captains[index]] : [], // Adiciona o capitão ao time
  }));

  // Distribui os demais jogadores nos times de forma cíclica
  nonCaptains.forEach((player, index) => {
    const teamIndex = index % numTeams; // Distribuição cíclica
    teams[teamIndex].players.push(player);
  });

  // Verifica se os times não excedem o limite de jogadores por time
  teams.forEach(team => {
    if (team.players.length > playersPerTeam) {
      console.warn(`O time ${team.name} excedeu o limite de jogadores por time.`);
    }
  });

  return teams;
};

// Função para distribuir jogadores nos times priorizando aqueles com `priority: true`
export const drawTeamsByPriority = (
  players: Player[],
  numTeams: number,
  playersPerTeam: number
): Team[] => {
  const priorityPlayers = players.filter(player => player.priority);  // Filtra os jogadores com prioridade
  const nonPriorityPlayers = players.filter(player => !player.priority); // Resto dos jogadores

  const sortedPriorityPlayers = shuffleArray(priorityPlayers);
  const sortedNonPriorityPlayers = shuffleArray(nonPriorityPlayers);

  // Cria a estrutura dos times
  const teams: Team[] = Array.from({ length: numTeams }, (_, index) => ({
    name: `Time ${index + 1}`,
    players: [],
  }));

  // Preenche os times com jogadores prioritários, respeitando o número de jogadores por time
  let i = 0;
  while (sortedPriorityPlayers.length && teams[i].players.length < playersPerTeam) {
    teams[i].players.push(sortedPriorityPlayers.pop()!);
    i = (i + 1) % numTeams;
  }

  // Preenche os times restantes com jogadores não prioritários, respeitando o número de jogadores por time
  i = 0;
  while (sortedNonPriorityPlayers.length && teams[i].players.length < playersPerTeam) {
    teams[i].players.push(sortedNonPriorityPlayers.pop()!);
    i = (i + 1) % numTeams;
  }

  // Caso algum time não tenha atingido o número de jogadores, preenche com jogadores restantes
  const allPlayers = [...sortedPriorityPlayers, ...sortedNonPriorityPlayers];
  i = 0;
  while (allPlayers.length) {
    if (teams[i].players.length < playersPerTeam) {
      teams[i].players.push(allPlayers.pop()!);
    }
    i = (i + 1) % numTeams;
  }

  // Atribui um capitão a cada time (o primeiro jogador de cada time)
  teams.forEach((team) => {
    if (team.players.length > 0) {
      team.players[0].isCaptain = true;
    }
  });

  return teams;
}

// Função para distribuir jogadores nos times balanceando pelas habilidades
export const drawTeamsBySkill = (
  players: Player[],
  numTeams: number,
  playersPerTeam: number
): Team[] => {
  // Separa os jogadores por habilidade
  const skillLevels: { [key: string]: Player[] } = {
    iniciante: players.filter(player => player.skill === 'Beginner'),
    intermediario: players.filter(player => player.skill === 'Intermediate'),
    avancado: players.filter(player => player.skill === 'Advanced'),
  };

  // Balanceamento de times de forma que cada time tenha representantes de cada habilidade
  const balancedPlayers: Player[] = [
    ...shuffleArray(skillLevels.iniciante),
    ...shuffleArray(skillLevels.intermediario),
    ...shuffleArray(skillLevels.avancado),
  ];

  const teams: Team[] = Array.from({ length: numTeams }, (_, index) => ({
    name: `Time ${index + 1}`,
    players: balancedPlayers.slice(index * playersPerTeam, (index + 1) * playersPerTeam),
  }));

  // Atribui um capitão a cada time (o primeiro jogador de cada time)
  teams.forEach((team) => {
    if (team.players.length > 0) {
      team.players[0].isCaptain = true;
    }
  });

  return teams;
}
