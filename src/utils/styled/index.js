import styled from 'styled-components/native';

const background = '#7986cb';
const fontColor = '#fff';

export const StyledView = styled.View`
    padding: 64px;
    height: 100%;
    width: 100%;
    background: ${background};
    top: 0;
    left: 0;
`;

export const StyledText = styled.Text`
    color: ${fontColor};
    font-size: 25px;
`

export const StyledTouchableOpacity = styled.TouchableOpacity`
    padding: 8px;
    border-width: 2px;
    border-color: ${fontColor};
    border-radius: 50;
    text-align: center;
    display: flex;
    align-items: center;
    margin-top: 16px;
    opacity: ${props => props.disabled ? 0.3 : 1};
`

export const StyledTextInput = styled.TextInput`
    marginBottom: 8px;
    border-radius: 4px;
    font-size: 25px;
    padding: 8px;
    color: 222;
    background: white,
    opacity: 0.8;
`