import { createSelector } from 'reselect'

const isAuthenticated = (state) => {
    const { authReducer } = state;
    return authReducer.authToken !== null && typeof authReducer.authToken === 'string' && authReducer.authToken.length > 0;
}

const user = (state) => {
    const { authReducer } = state;
    return authReducer.username;
}

export const isAuthenticatedSelector = createSelector(
    [isAuthenticated],
    authenticated => authenticated
)

export const userSelector = createSelector(
    [user],
    user => user
)
