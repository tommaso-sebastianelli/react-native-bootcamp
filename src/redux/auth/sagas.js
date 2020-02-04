import { Toast } from 'native-base';
import { all, call, delay, put, select, take } from 'redux-saga/effects';
import NavigationService from '../../../NavigatorService';
import { signInFailure, signInSuccess } from './actions';
import { AUTH_OFF, AUTH_REQUEST_START } from './types';


const mockAuthorize = (username, password) => (console.log(`credentials: ${username} ${password}`), new Promise((resolve) =>
  (username === 'AAA' && password === 'aaa')
    ? resolve({ status: 200, username: 'dummy.usermail.com', token: '6fbu3r93urGVIWd3DG$)/Y)/ygdtd3d' })
    : resolve({ status: 401 })
));
const showErrorToast = function () {
  Toast.show({
    text: 'SignIn failed.'
  });
}

function* logout() {
  while (true) {
    yield take(AUTH_OFF);
    yield NavigationService.navigate('AuthLoading');
  }
}

function* login() {
  while (true) {
    const { payload } = yield take(AUTH_REQUEST_START);
    yield NavigationService.navigate('AuthLoading');
    try {
      const { status, username, token } = yield mockAuthorize(payload.username, payload.password);
      yield delay(2000);
      if (status === 200) {
        yield put(signInSuccess({ username: username, authToken: token }))
      } else {
        yield showErrorToast();
        yield put(signInFailure({ error: status }));
      }
    } catch (err) {
      yield showErrorToast();
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