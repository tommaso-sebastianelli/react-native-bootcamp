import { AUTH_REQUEST_START } from './types';

export const authRequestStart = (user, password) => ({
    type: AUTH_REQUEST_START,
    payload: {
        loading: true,
        user,
        password
    }
});