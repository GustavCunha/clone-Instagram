import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items:center;
`;

export const Avatar = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 20px;
`;

export const Name = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
    position: absolute;
    top: 10%;
    right: 5px;
`;