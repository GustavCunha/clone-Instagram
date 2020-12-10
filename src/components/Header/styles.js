import React from 'react';
import { Dimensions } from "react-native";
import styled from 'styled-components/native';

const screenWidth = Math.round(Dimensions.get('window').width);

export const Container = styled.View`
    flex: 1;
    /* min-width: ${screenWidth}px; */
    min-height: 50px;
    flex-direction: row;    
    justify-content: center;
    align-items: center;
`;

export const HeaderContainer = styled.View`
    display: flex;
    flex-direction: row;
    padding: 0 20px;
    width: 100%;
    justify-content: space-between;
`

export const Box = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;