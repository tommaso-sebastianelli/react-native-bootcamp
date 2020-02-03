import { AUTH_OFF, AUTH_REQUEST_FAILURE, AUTH_REQUEST_START, AUTH_REQUEST_SUCCESS } from './types'
import {
  all,
  call,
  delay,
  put,
  take
} from 'redux-saga/effects'

import NavigationService from '../../../NavigatorService';

const mockAuthorize = () => new Promise((resolve) => resolve({ username: 'dummy.usermail.com', token: '6fbu3r93urGVIWd3DG$)/Y)/ygdtd3d' }));

function* logout() {
  while (true) {
    yield take(AUTH_OFF);
    yield call(() => NavigationService.navigate('AuthLoading'));
  }
}

function* login() {
  while (true) {
    yield take(AUTH_REQUEST_START);
    yield call(() => NavigationService.navigate('AuthLoading'));
    try {
      const { username, token } = yield call(mockAuthorize, '', ''); // TODO get from state
      console.log(username, token);
      yield delay(2000);
      yield put({ type: AUTH_REQUEST_SUCCESS, payload: { username: username, authToken: token, loading: false } });
    } catch (err) {
      console.error(err);
      yield put({ type: AUTH_REQUEST_FAILURE, payload: { error: err, loading: false } });
    }
  }
}

export default function* rootSaga() {
  yield all([
    login(),
    logout()
  ])
}