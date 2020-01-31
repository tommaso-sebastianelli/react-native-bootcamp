import { take, put, all } from 'redux-saga/effects'
import { AUTH_REQUEST_START, AUTH_REQUEST_SUCCESS, AUTH_REQUEST_FAILURE } from './types'

const mockAuthorize = new Promise((resolve) => resolve('6fbu3r93urGVIWd3DG$)/Y)/ygdtd3d'))

function* login() {
  while (true) {
    const { user, password } = yield take(AUTH_REQUEST_START);
    try {
      const token = yield call(mockAuthorize, user, password);
      yield put({ type: AUTH_REQUEST_SUCCESS, payload: { token: token, loading: false } });
    } catch (err) {
      yield put({ type: AUTH_REQUEST_FAILURE, payload: { error: err, loading: false } });
    }
  }
}

export default function* rootSaga() {
  yield all([
    login()
  ])
}