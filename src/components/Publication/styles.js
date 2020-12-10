import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 10px;
`;

export const Header = styled.View`
  padding:10px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 10px;
`;

export const Name = styled.Text`
  font-weight: 600;
  font-size: 14px;
`;

export const Main = styled.View``;

export const Buttons = styled.View`
  flex-direction: row;
  margin: 2.5px;
  justify-content: space-between;
`;

export const ButtonIcon = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  margin: 5px 10px;
`;

export const Link = styled.TouchableOpacity`
  padding-left: 10px;
`;

export const Description = styled.Text`
  padding: 10px;
  line-height: 18px;
  font-size: 13px;
`;

export const Author = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

export const Footer = styled.View``;