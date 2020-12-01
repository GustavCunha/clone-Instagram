import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    background-color: #FFF;
    justify-content: center;
    align-items: center;
    flex:1;
`;

export const InputContainer = styled.View`
    width: 90%;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
`;

export const Input = styled.TextInput`
    height: 40px;
    background-color: #FAFAFA;
    width: 90%;
    margin: 5px;
    border-radius: 5px;
    border: 1px solid #CCC;
    padding: 2px 15px;
`;

export const Button = styled(RectButton)`
    width: 90%;
    height: 40px;
    border-radius: 5px;
    background-color: #4169e1; 
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    // #2d5ff5 ou #4169e1 ou #0095f6 ou #385185
`;

export const Label = styled.Text`
    font-size: 14px;
    color: #888;
`;

export const Footer = styled.View`
    position: absolute;
    bottom: 0;
    background-color: #FAFAFA;
    height: 50px;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-top-width: 1px;
    border-top-color: #CCC;
`;

export const Link = styled.TouchableOpacity`
    margin-left: 5px;
`;

export const TextLink = styled.Text`
    font-weight: bold;
    color: ${({bgColor}) => bgColor};
    font-size: 15px;
`;