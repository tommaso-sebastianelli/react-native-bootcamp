import React from 'react'
import { connect } from 'react-redux'
import { signOutRequest } from '../../redux/auth/actions'
import { StyledView, StyledText, StyledTouchableOpacity } from '../../utils/styled'
import { userSelector } from '../../redux/auth/selectors'


function Home({ doLogout, user }) {

    return (
        <StyledView>
            <StyledText>Welcome, {user}</StyledText>
            <StyledTouchableOpacity onPress={doLogout}>
                <StyledText>Logout</StyledText>
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
