import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import { connect } from 'react-redux'
import { isAuthenticatedSelector } from '../../redux/auth/selectors';

function AuthLoadingScreen(props) {
    const { authenticated, loading, navigation } = props;

    useEffect(() => {
        if (!loading) {
            console.log(`authenticated: ${authenticated}`);
            navigation.navigate(authenticated ? 'App' : 'Auth');
        }
    }, [authenticated]);

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 32
        }}>
            <Text>Loading....</Text>
        </View>
    )
}

const mapStateToProps = (state) => ({
    authenticated: isAuthenticatedSelector(state),
    loading: state.authReducer.loading
})

export default connect(mapStateToProps, null)(AuthLoadingScreen)
