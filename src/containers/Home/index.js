import { Button, Text, View } from 'react-native'

import React from 'react'
import { connect } from 'react-redux'
import { signOutRequest } from '../../redux/auth/actions'

function Home({ doLogout, navigation }) {

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 32
        }}>
            <Text>Home Page</Text>
            <Button title="Logout" onPress={() => doLogout(navigation)}></Button>
        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    doLogout: (navigation) => {
        dispatch(signOutRequest());
        navigation.navigate('AuthLoading');
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
