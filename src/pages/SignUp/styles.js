import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
    behavior: Platform.OS == 'ios' ? 'padding' : 'height'
})`
    background-color: #FFF;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const Title = styled.Text`
    width: 70%;
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    line-height: 20px;
    margin: 0 40px 10px;
    color: #8e8e8e;
`;

export const Input = styled.TextInput`
    height: 45px;
    background-color: #FAFAFA;
    width: 80%;
    margin: 5px;
    border-radius: 5px;
    border: 1px solid #CCC;
    padding: 2px 15px;
`;

export const Button = styled.TouchableOpacity`
    width: 80%;
    height: 40px;
    border-radius: 5px;
    background-color: ${({disabled}) => disabled ? '#b2dffc' : '#4169e1'}; 
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const TextFooter = styled.Text`
    color: #a18e8e;
    width: 75%;
    margin: 20px 40px;
    text-align: center;
    font-size: 12px;
    line-height: 16px;
`;

export const Bold = styled.Text`
    color: #a18e8e;
    width: 75%;
    margin: 20px 40px;
    text-align: center;
    font-size: 12px;
    line-height: 16px;
    font-weight: bold;
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

export const Label = styled.Text`
    font-size: 14px;
    color: #888;
`;

export const Link = styled.TouchableOpacity`
    margin-left: 5px;
`;

export const TextLink = styled.Text`
    font-weight: bold;
    color: #888;
    font-size: 15px;
`;