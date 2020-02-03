import { Button, Text, View } from 'react-native'

import React from 'react'
import { connect } from 'react-redux'
import { signOutRequest } from '../../redux/auth/actions'

function Home({ doLogout }) {

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 32
        }}>
            <Text>Home Page</Text>
            <Button title="Logout" onPress={doLogout}></Button>
        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    doLogout: () => dispatch(signOutRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
