import { Icon } from 'native-base'
import React from 'react'
import { connect } from 'react-redux'
import { signOutRequest } from '../../redux/auth/actions'
import { userSelector } from '../../redux/auth/selectors'
import { StyledText, StyledTextButton, StyledTouchableOpacity, StyledView } from '../../utils/styled'



function Home({ doLogout, user }) {

    return (
        <StyledView>
            <StyledText>Welcome, {user}</StyledText>
            <StyledTouchableOpacity onPress={doLogout}>
                <StyledTextButton>Logout</StyledTextButton>
            </StyledTouchableOpacity>
        </StyledView>
    )
}

const mapStateToProps = (state) => ({
    user: userSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    doLogout: () => (console.log('logout'), dispatch(signOutRequest()))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
