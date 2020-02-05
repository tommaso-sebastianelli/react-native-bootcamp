import { Spinner } from 'native-base';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { isAuthenticatedSelector } from '../../redux/auth/selectors';
import { StyledView } from '../../utils/styled';


function AuthLoadingScreen(props) {
    const { authenticated, loading, navigation } = props;

    useEffect(() => {
        console.log(`authenticated: ${authenticated}`);
        if (!loading) {
            console.log(`redirecting to ${authenticated ? 'App' : 'Auth'}`);
            navigation.navigate(authenticated ? 'App' : 'Auth');
        }
    }, [authenticated, loading]);

    return (
        <StyledView>
            <Spinner color="white" />
        </StyledView>
    )
}

const mapStateToProps = (state) => ({
    authenticated: isAuthenticatedSelector(state),
    loading: state.authReducer.loading
})

export default connect(mapStateToProps, null)(AuthLoadingScreen)
