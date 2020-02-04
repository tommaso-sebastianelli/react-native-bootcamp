import { all, delay, put, take } from 'redux-saga/effects';
import NavigationService from '../../../NavigatorService';
import Toast from '../../utils/toast';
import { signInFailure, signInSuccess } from './actions';
import { AUTH_OFF, AUTH_REQUEST_START } from './types';


const mockAuthorize = (username, password) => (console.log(`credentials: ${username} ${password}`), new Promise((resolve) =>
  (username === 'Tommaso' && password === 'aaa')
    ? resolve({ status: 200, username: username, token: '6fbu3r93urGVIWd3DG$)/Y)/ygdtd3d' })
    : resolve({ status: 401 })
));


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
        yield Toast.showSuccess(`Welcome ${username}`)
      } else {
        yield Toast.showError('Authentication failed')
        yield put(signInFailure({ error: status }));
      }
    } catch (err) {
      yield Toast.showError('Authentication failed')
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