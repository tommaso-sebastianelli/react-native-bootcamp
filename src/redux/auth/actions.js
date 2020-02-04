import { AUTH_OFF, AUTH_REQUEST_START, AUTH_REQUEST_SUCCESS } from './types';

export const signInRequest = (payload) => ({
    type: AUTH_REQUEST_START,
    payload
});

export const signInSuccess = (payload) => ({
    type: AUTH_REQUEST_SUCCESS, payload
});

export const signInFailure = (payload) => ({
    type: AUTH_REQUEST_FAILURE, payload
});

export const signOutRequest = (payload) => ({
    type: AUTH_OFF, payload
});