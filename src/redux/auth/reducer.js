import { } from './actions';
import { AUTH_REQUEST_START, AUTH_REQUEST_SUCCESS, AUTH_REQUEST_FAILURE } from './types';


const initialState = {
    loading: false,
    authToken: null,
    username: null,
    error: null
}

export default function auth(state = initialState, action) {
    switch (action.type) {
        case AUTH_REQUEST_START:{
            const {loading} = action.payload;
            return {
                ...state,
                loading: loading,
            }
        }            
        case AUTH_REQUEST_SUCCESS:{
            const {loading, user, authToken: token} = action.payload;
            return {
                ...state,
                loading: loading,
                username: user,
                authToken: token
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