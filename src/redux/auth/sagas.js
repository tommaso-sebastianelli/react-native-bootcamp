import { AUTH_OFF, AUTH_REQUEST_START } from './types'
import {
  all,
  call,
  delay,
  put,
  take
} from 'redux-saga/effects'
import {signInFailure, signInSuccess} from './actions';

import NavigationService from '../../../NavigatorService';

const mockAuthorize = () => new Promise((resolve) => resolve({ username: 'dummy.usermail.com', token: '6fbu3r93urGVIWd3DG$)/Y)/ygdtd3d' }));

function* login() {
  while (true) {
    const { result } = yield take(AUTH_REQUEST_START);
    yield call(() => NavigationService.navigate('AuthLoading'));
    try {
      const { username, token } = yield call(mockAuthorize, '', ''); // TODO get from state
      console.log(username, token);
      yield delay(2000);
      yield put(signInSuccess);
    } catch (err) {
      console.error(err);
      yield put(signInFailure);
    }
  }
}

function* logout() {
  while (true) {
    yield take(AUTH_OFF);
    yield call(() => NavigationService.navigate('AuthLoading'));
  }
}

export default function* rootSaga() {
  yield all([
    login(),
    logout()
  ])
}