import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items:center;
    background: #FDFDFD;
`;

export const Avatar = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 50px;
    margin: 15px;
`;

export const Name = styled.Text`
    font-size: 20px;
    font-weight: bold;
    flex: 1;
`;

export const Button = styled.TouchableOpacity`
    position: absolute;
    top: 10%;
    right: 5px;
`;