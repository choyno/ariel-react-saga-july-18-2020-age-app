import { all, takeLatest } from 'redux-saga/effects';

// actionTypes   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { DECREASE_AGE  } from './modules/age/ageTypes.js';
import { INCREASE_AGE  } from './modules/age/ageTypes.js';

// sagaActions   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { decreaseAge  } from './modules/age/ageSaga.js';
import { increaseAge  } from './modules/age/ageSaga.js';

export default function* rootSaga() {
  yield all([
    takeLatest(DECREASE_AGE, decreaseAge),
    takeLatest(INCREASE_AGE, increaseAge),
  ])
}

