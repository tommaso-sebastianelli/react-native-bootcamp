import { AUTH_OFF, AUTH_REQUEST_START } from './types';

export const signInRequest = (user, password) => ({
    type: AUTH_REQUEST_START,
    payload: {
        loading: true,
        user,
        password
    }
});

export const signOutRequest = () => ({
    type: AUTH_OFF
});