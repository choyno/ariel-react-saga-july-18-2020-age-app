// ImportActionType   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { DECREASE_AGE } from './ageTypes';
import { INCREASE_AGE } from './ageTypes';

// Action Creators   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export function decreaseAge(data) {
  return { type: DECREASE_AGE , payload: data };
}

export function increaseAge(data) {
  return { type: INCREASE_AGE , payload: data };
}

