import { all, call, delay, put, select, take } from 'redux-saga/effects';
import NavigationService from '../../../NavigatorService';
import { credentialSelector } from './selectors';
import { AUTH_OFF, AUTH_REQUEST_FAILURE, AUTH_REQUEST_START, AUTH_REQUEST_SUCCESS } from './types';
import { signInSuccess, signInFailure } from './actions';

const mockAuthorize = () => new Promise((resolve) => resolve({ username: 'dummy.usermail.com', token: '6fbu3r93urGVIWd3DG$)/Y)/ygdtd3d' }));

function* logout() {
  while (true) {
    yield take(AUTH_OFF);
    yield NavigationService.navigate('AuthLoading');
  }
}

function* login() {
  while (true) {
    yield take(AUTH_REQUEST_START);
    yield NavigationService.navigate('AuthLoading');
    try {
      const { state_username, state_password } = yield select(credentialSelector);
      const { username, token } = yield call(mockAuthorize, state_username, state_password);
      console.log(username, token);
      yield delay(2000);
      yield put(signInSuccess({ username: username, authToken: token }));
    } catch (err) {
      console.error(err);
      yield put(signInFailure({ error: err }));
    }
  }
}

export default function* rootSaga() {
  yield all([
    login(),
    logout()
  ])
}