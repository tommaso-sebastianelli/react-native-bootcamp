import { AUTH_OFF, AUTH_REQUEST_FAILURE, AUTH_REQUEST_START, AUTH_REQUEST_SUCCESS } from './types';

const initialState = {
    loading: false,
    authToken: null,
    username: null,
    error: null
}

export default function auth(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case AUTH_REQUEST_START:{
            const {} = action.payload;
            return {
                ...state,
                loading: true,
                error: null
            }
        }            
        case AUTH_REQUEST_SUCCESS:{
            const { username, authToken} = action.payload;
            return {
                ...state,
                loading: false,
                username: username,
                authToken: authToken
            }
        }            
        case AUTH_REQUEST_FAILURE:{
            const { error} = action.payload;
            return {
                ...state,
                loading: false,
                error
            }
        } 
        case AUTH_OFF: {
            return {
                ...state,
                loading: false,
                error: null,
                username: null,
                authToken: null
            }
        }
        default:
            return state
    }
}