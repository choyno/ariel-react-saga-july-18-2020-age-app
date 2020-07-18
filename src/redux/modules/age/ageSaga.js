import { put, call, delay } from 'redux-saga/effects'
// Actions   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
import { INCREASE_AGE } from './ageTypes';

// reqFunction   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
function* increaseAgeReq(data) {
  yield delay(1000);
  return yield put({type: "AGE_UP_ASYNC", age: data.age + 1})
}


// exportFuntion   (DONT DELETE THIS LINE: USED FOR BATTLECRY DUCK GENERATOR)
export function* increaseAge(action) {
  try {

    const { age } = yield call(increaseAgeReq, action.payload);
    console.log("HERERERRERERER increaseAgeReducer");
    console.log(age);

    yield put({ type: `${INCREASE_AGE}_SUCCESS`, payload: age })
  } catch(e) {
    yield put({ type: `${INCREASE_AGE}_FAIL`, payload: e.response })
  }
}


