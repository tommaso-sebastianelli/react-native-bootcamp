import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { signInRequest } from '../../redux/auth/actions';
import { StyledText, StyledTouchableOpacity, StyledView } from '../../utils/styled';
import { StyledTextInput } from './style';

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
            <StyledText style={{marginBottom: 2, fontSize: 22}}>Username</StyledText>
            <StyledTextInput
                onChangeText={text => onChangeUser(text)}
                value={username}
            />
            <StyledText style={{marginBottom: 2, fontSize: 22}}>Password</StyledText>
            <StyledTextInput
                secureTextEntry
                onChangeText={text => onChangePassword(text)}
                value={password}
            />
            <StyledTouchableOpacity disabled={!formValid} onPress={() => doLogin(username, password)}>
                <StyledText >Login</StyledText>
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