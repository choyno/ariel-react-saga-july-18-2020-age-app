import { all, takeLatest } from 'redux-saga/effects';

// actionTypes   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { INCREASE_AGE  } from './modules/age/ageTypes.js';

// sagaActions   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { increaseAge  } from './modules/age/ageSaga.js';

export default function* rootSaga() {
  yield all([
    takeLatest(INCREASE_AGE, increaseAge),
  ])
}

