import { AUTH_REQUEST_FAILURE, AUTH_REQUEST_START, AUTH_REQUEST_SUCCESS } from './types'
import {
  all,
  call,
  delay,
  put,
  take
} from 'redux-saga/effects'

const mockAuthorize = () => new Promise((resolve) => resolve({ username: 'dummy.usermail.com', token: '6fbu3r93urGVIWd3DG$)/Y)/ygdtd3d' }));

function* login() {
  while (true) {
    const { result } = yield take(AUTH_REQUEST_START);
    try {
      const { username, token } = yield call(mockAuthorize, '', ''); // TODO get from state
      console.log(username, token);
      yield delay(2000)
      yield put({ type: AUTH_REQUEST_SUCCESS, payload: { username: username, authToken: token, loading: false } });
    } catch (err) {
      console.error(err);
      yield put({ type: AUTH_REQUEST_FAILURE, payload: { error: err, loading: false } });
    }
  }
}

export default function* rootSaga() {
  yield all([
    login()
  ])
}