// ImportActionType   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { DECREASE_AGE } from './ageTypes';
import { INCREASE_AGE } from './ageTypes';

const INITIAL_STATE = {
  age: 27,
  year: 1993
}

// Reducer   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case DECREASE_AGE:
    case INCREASE_AGE:
      return state;
    case `${DECREASE_AGE}_SUCCESS`:
    case `${INCREASE_AGE}_SUCCESS`:
      return {
        ...state,
        ...action.payload
      }
    case `${DECREASE_AGE}_FAIL`:
    case `${INCREASE_AGE}_FAIL`:
      // Perform action
      return state;
    default: return state;
  }
}

