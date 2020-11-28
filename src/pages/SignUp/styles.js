import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
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
    background-color: #4169e1; 
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const TextFooter = styled.Text`
    color: #a18e8e;
    width: 80%;
    margin: 20px 40px;
    text-align: center;
    font-size: 12px;
    line-height: 16px;
`;