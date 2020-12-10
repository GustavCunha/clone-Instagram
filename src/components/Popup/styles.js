import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
    position: absolute;
    top: 50px;
    right: 0;
    margin-right: 15px;
    z-index: 9;
    width: 100px;
    height: 100px;
    background-color: #F1D2C3;
`;

export const Button = styled(RectButton)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    padding: 10px;
    text-align: justify;
    font-size: 14px;
`;