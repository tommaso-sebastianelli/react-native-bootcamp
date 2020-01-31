import React, { useState } from 'react'
import { Button } from 'react-native';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { authRequestStart } from '../../redux/auth/actions';

import styles from './style';



function Login({ doLogin }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUser = text => {
        setUsername(text);
    }

    const onChangePassword = text => {
        setPassword(text);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={text => onChangeUser(text)}
                value={username}
            />
            <TextInput
                style={styles.input}
                secureTextEntry
                onChangeText={text => onChangePassword(text)}
                value={password}
            />
            <Button title="Login" onPress={() => doLogin()}></Button>
        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    doLogin: () => dispatch(authRequestStart('dummyUser', 'dummyPwd'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)