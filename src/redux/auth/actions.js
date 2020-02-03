import { AUTH_OFF, AUTH_REQUEST_START } from './types';

export const signInRequest = (user, password) => ({
    type: AUTH_REQUEST_START,
    payload: {
        loading: true,
        user,
        password
    }
});

export const signInSuccess = (user, password) => ({
    type: AUTH_REQUEST_SUCCESS, payload: { username: username, authToken: token, loading: false }
});

export const signInFailure = (user, password) => ({
    type: AUTH_REQUEST_FAILURE, payload: { error: err, loading: false }
});

export const signOutRequest = () => ({
    type: AUTH_OFF
});