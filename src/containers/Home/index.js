import React from 'react'
import { connect } from 'react-redux'
import { signOutRequest } from '../../redux/auth/actions'
import { StyledView, StyledText, StyledTouchableOpacity } from '../../utils/styled'


function Home({ doLogout }) {

    return (
        <StyledView>
            <StyledText>Welcome</StyledText>
            <StyledTouchableOpacity onPress={doLogout}>
                <StyledText>Logout</StyledText>
            </StyledTouchableOpacity>
        </StyledView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    doLogout: () => (console.log('logout'),dispatch(signOutRequest()))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
