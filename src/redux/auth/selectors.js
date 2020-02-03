import { createSelector } from 'reselect'

isAuthenticated = (state) => {
    const { authReducer } = state;
    return authReducer.authToken !== null && typeof authReducer.authToken === 'string' && authReducer.authToken.length > 0;
}

export const isAuthenticatedSelector = createSelector(
    [isAuthenticated],
    authenticated => authenticated
)

export const credentialSelector = (state) => {
    const { authReducer } = state;
    return {username: authReducer.username, password: authReducer.password}
}