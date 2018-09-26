import { put, call, takeLatest, select, all } from 'redux-saga/effects';
import constants from '../constants'
import * as actions from '../ducks/users'
import * as api from '../api'

function* tokenRequest(action) {

  try {
    console.log("try")
    const response = yield call(api.tokenRequest)

    if (response.result == true) {


      yield put(actions.tokenSucceeded(response.data))
    } else {
      yield put(actions.tokenFailed({}))
      yield console.log("else")
    }
  } catch (e) {
    yield console.log(e)
    yield put(actions.tokenFailed({}))
  }
}


export default function* diarySaga() {
  yield all([
    takeLatest(constants.TOKEN_REQUEST, tokenRequest)
  ]);
}
