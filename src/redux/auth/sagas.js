import { take, put, all, call } from 'redux-saga/effects'
import { AUTH_REQUEST_START, AUTH_REQUEST_SUCCESS, AUTH_REQUEST_FAILURE } from './types'

const mockAuthorize = () => new Promise((resolve) => resolve({ username: 'dummy.usermail.com', token: '6fbu3r93urGVIWd3DG$)/Y)/ygdtd3d' }));

function* login() {
  while (true) {
    const {result} = yield take(AUTH_REQUEST_START);
    try {
      const {username, token} = yield call(mockAuthorize, '', ''); // TODO get from state
      console.log(username, token);
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