// ImportActionType   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { INCREASE_AGE } from './ageTypes';

const INITIAL_STATE = {
  age: 27,
  year: 1993
}

// Reducer   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case INCREASE_AGE:
      return state;
    case `${INCREASE_AGE}_SUCCESS`:
      console.log("success");
      return {
        ...state,
        ...action.payload
      }

    case `${INCREASE_AGE}_FAIL`:
      // Perform action
      return state;
    default: return state;
  }
}

