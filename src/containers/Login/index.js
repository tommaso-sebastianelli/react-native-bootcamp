import { Button, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react'

import { connect } from 'react-redux';
import { signInRequest } from '../../redux/auth/actions';
import styles from './style';

function Login({ doLogin, navigation }) {

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
            <Text>Username</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => onChangeUser(text)}
                value={username}
            />
            <Text>Password</Text>
            <TextInput
                style={styles.input}
                secureTextEntry
                onChangeText={text => onChangePassword(text)}
                value={password}
            />
            <Button title="Login" onPress={() => doLogin(navigation)}></Button>
        </View>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    doLogin: (navigation) => {
        dispatch(signInRequest('dummyUser', 'dummyPwd'));
        navigation.navigate('AuthLoading'); // FIXME
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)