import { Button, Text, TextInput, View } from 'react-native';
import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux';
import { signInRequest } from '../../redux/auth/actions';
import styles from './style';

function Login({ doLogin, navigation }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        validateForm();
    });

    const onChangeUser = text => {
        setUsername(text);
    }

    const onChangePassword = text => {
        setPassword(text);
    }

    const validateForm = () => {
        console.log(password, username)
        setFormValid(username.trim().length > 2 && password.length > 2)
    };

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
            <Button disabled={formValid === false} title="Login" onPress={() => doLogin(username, password)}></Button>
        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    doLogin: (username, password) => {
        dispatch(signInRequest({username, password}));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)