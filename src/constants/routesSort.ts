import { RelativePathString, router } from 'expo-router';

export const routes: Record<string, RelativePathString> = {
  ARRIVAL: '/playersOrder' as RelativePathString,
  PRIORITY: '/+not-found' as RelativePathString,
  SKILL: '/+not-found' as RelativePathString,
  RANDOM: '/captains' as RelativePathString,
};
