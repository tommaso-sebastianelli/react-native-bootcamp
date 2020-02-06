import styled from 'styled-components/native';

export const backgroundColor = '#37474f ';
export const primaryColor = '#61dafb';
export const lightColor = '#fff';

export const StyledView = styled.View`
    background: ${backgroundColor};
    height: 100%;
    left: 0;
    padding: 64px;
    top: 0;
    width: 100%;
`;

export const StyledText = styled.Text`
    color: ${lightColor};
    font-size: 25px;
`

export const StyledTouchableOpacity = styled.TouchableOpacity`
    align-items: center;
    border-color: ${primaryColor};
    border-radius: 50px;
    border-width: 2px;
    color: ${primaryColor};
    display: flex;
    margin-top: 16px;
    opacity: ${props => props.disabled ? 0.3 : 1};
    padding: 8px;
    text-align: center;
`

export const StyledTextInput = styled.TextInput`
    background: white,
    border-radius: 50px;
    font-size: 25px;
    marginBottom: 8px;
    opacity: 0.8;
    padding: 8px 16px;
`

export const StyledTextButton = styled(StyledText)`
    color: ${primaryColor}
`