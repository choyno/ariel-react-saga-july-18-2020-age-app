import { put, call, delay } from 'redux-saga/effects'
// Actions   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { DECREASE_AGE } from './ageTypes';
import { INCREASE_AGE } from './ageTypes';

// reqFunction   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
function* decreaseAgeReq(data) {
  yield delay(1000);
  return yield put({type: "AGE_UP_ASYNC", data: { age: data.age - 1, year: data.year - 1}})
}

function* increaseAgeReq(data) {
  yield delay(1000);
  return yield put({type: "AGE_UP_ASYNC", data: { age: data.age + 1, year: data.year + 1}})
}


// exportFuntion   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export function* decreaseAge(action) {
  try {
    const { data } = yield call(decreaseAgeReq, action.payload);
    yield put({ type: `${DECREASE_AGE}_SUCCESS`, payload: data })
  } catch(e) {
    yield put({ type: `${DECREASE_AGE}_FAIL`, payload: e.response })
  }
}

export function* increaseAge(action) {
  try {
    const { data } = yield call(increaseAgeReq, action.payload);
    yield put({ type: `${INCREASE_AGE}_SUCCESS`, payload: data })
  } catch(e) {
    yield put({ type: `${INCREASE_AGE}_FAIL`, payload: e.response })
  }
}


