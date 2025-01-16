import { RelativePathString } from 'expo-router';

export const routes: Record<string, RelativePathString> = {
  ARRIVAL: '/playersOrder' as RelativePathString,
  PRIORITY: '/playersPriority' as RelativePathString,
  SKILL: '/+not-found' as RelativePathString,
  RANDOM: '/captains' as RelativePathString,
};
