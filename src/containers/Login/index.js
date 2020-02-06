import React, { useCallback, useEffect, useState } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { signInRequest } from '../../redux/auth/actions';
import { StyledText, StyledTextButton, StyledTextInput, StyledTouchableOpacity, StyledView } from '../../utils/styled';

function Login({ doLogin }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        validateForm();
    });

    const onChangeUser = useCallback(text => { setUsername(text) }, []);

    const onChangePassword = useCallback(text => { setPassword(text) }, []);

    const validateForm = useCallback(() => {
        console.log(password, username)
        setFormValid(username.trim().length > 2 && password.length > 2)
    }, [password, username]);

    return (
        <StyledView>
            <Image source={require('../../assets/logo.png')}
                style={{ width: 150, height: 150, alignSelf:"center" }}
                resizeMode='contain' resizeMethod='scale' />
            <StyledText style={{ marginBottom: 2, fontSize: 22 }}>Username</StyledText>
            <StyledTextInput
                onChangeText={text => onChangeUser(text)}
                value={username}
            />
            <StyledText style={{ marginBottom: 2, fontSize: 22 }}>Password</StyledText>
            <StyledTextInput
                secureTextEntry
                onChangeText={text => onChangePassword(text)}
                value={password}
            />
            <StyledTouchableOpacity disabled={!formValid} onPress={() => doLogin(username, password)}>
                <StyledTextButton >Login</StyledTextButton>
            </StyledTouchableOpacity>
        </StyledView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    doLogin: (username, password) => {
        dispatch(signInRequest({ username, password }));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)