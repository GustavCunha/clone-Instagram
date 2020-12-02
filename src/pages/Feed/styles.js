import styled from 'styled-components/native';

export const Container = styled.View`
  
`;

export const Post = styled.View`
  margin-top: 10px;
`;

export const Header = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 10px;
`;

export const Buttons = styled.View`
  flex-direction: row;
  margin: 5px;
  justify-content: space-between;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
`;

export const ButtonIcon = styled.TouchableOpacity`
  margin: 5px 10px;
`;

export const Name = styled.Text`
  font-weight: 600;
`;

export const Description = styled.Text`
  padding: 15px;
  line-height: 18px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999'
})`
  margin: 30px 0;
`;