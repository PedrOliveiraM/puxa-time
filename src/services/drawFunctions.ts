import { Player } from "@/types/IPlayer";
import { Team } from "@/types/ITeams";
// Função para embaralhar um array (para o sorteio aleatório)
const shuffleArray = (array: Player[]): Player[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

// Função para distribuir jogadores para times aleatoriamente e equilibradamente
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

  // Distribuir os jogadores restantes de forma equilibrada
  nonCaptains.forEach(player => {
    // Encontra o primeiro time com menos jogadores que o limite
    const team = teams.find(team => team.players.length < playersPerTeam);
    if (team) {
      team.players.push(player);
    }
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

  // Preenche os times sequencialmente com os não capitães
  let teamIndex = 0; // Índice do time atual
  for (const player of nonCaptains) {
    // Adiciona o jogador ao time atual
    teams[teamIndex].players.push(player);

    // Avança para o próximo time se o atual estiver cheio
    if (teams[teamIndex].players.length === playersPerTeam) {
      teamIndex++;
      if (teamIndex >= numTeams) break; // Para se todos os times estiverem preenchidos
    }
  }

  // Emite um aviso se algum time exceder o limite de jogadores
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
  const captains = players.filter(player => player.isCaptain); // Filtra os capitães
  const priorityPlayers = players.filter(player => player.priority && !player.isCaptain); // Filtra os jogadores com prioridade (exceto capitães)
  const nonPriorityPlayers = players.filter(player => !player.priority && !player.isCaptain); // Resto dos jogadores

  // Verifica se há capitães suficientes para os times
  if (captains.length !== numTeams) {
    console.warn('Número insuficiente de capitães para os times.');
    return [];
  }

  // Embaralha os jogadores com prioridade e os sem prioridade
  const shuffledPriorityPlayers = shuffleArray(priorityPlayers);
  const shuffledNonPriorityPlayers = shuffleArray(nonPriorityPlayers);

  // Inicializa os times com os capitães
  const teams: Team[] = Array.from({ length: numTeams }, (_, index) => ({
    name: `Time ${index + 1}`,
    players: captains[index] ? [captains[index]] : [], // Adiciona o capitão ao time
  }));

  // Preenche os dois primeiros times com jogadores prioritários
  let teamIndex = 0;
  while (shuffledPriorityPlayers.length) {
    // Limita os jogadores prioritários apenas aos dois primeiros times
    if (teamIndex < 2 && teams[teamIndex].players.length < playersPerTeam) {
      teams[teamIndex].players.push(shuffledPriorityPlayers.pop()!);
    }
    teamIndex = (teamIndex + 1) % 2; // Alterna apenas entre os dois primeiros times
  }

  // Preenche os times restantes com jogadores não prioritários
  teamIndex = 0;
  while (shuffledNonPriorityPlayers.length) {
    if (teams[teamIndex].players.length < playersPerTeam) {
      teams[teamIndex].players.push(shuffledNonPriorityPlayers.pop()!);
    }
    teamIndex = (teamIndex + 1) % numTeams;
  }

  // Emite um aviso caso algum time exceda o limite de jogadores
  teams.forEach((team) => {
    if (team.players.length > playersPerTeam) {
      console.warn(`O time ${team.name} excedeu o limite de jogadores por time.`);
    }
  });

  return teams;
};

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
