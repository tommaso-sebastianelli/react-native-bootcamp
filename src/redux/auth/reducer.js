import { } from './actions';
import { AUTH_REQUEST_START, AUTH_REQUEST_SUCCESS, AUTH_REQUEST_FAILURE } from './types';


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
            const {loading} = action.payload;
            return {
                ...state,
                loading: loading,
            }
        }            
        case AUTH_REQUEST_SUCCESS:{
            const {loading, username, authToken} = action.payload;
            return {
                ...state,
                loading: loading,
                username: username,
                authToken: authToken
            }
        }            
        case AUTH_REQUEST_FAILURE:{
            const {loading, errorMessage} = action.payload;
            return {
                ...state,
                loading: loading,
                error: errorMessage
            }
        }            
        default:
            return state
    }
}