import styled from 'styled-components/native';

export const Container = styled.View``;

export const Title = styled.Text`
  flex: 1;
  background-color: #fff;
`;

export const LikedContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 15px 0 15px;
`;

export const LikedUsername = styled.Text`
  font-weight: bold;
  font-size: 18px;
  flex: 1;
`;

export const LikedDescription = styled.Text`
  font-size: 18px;
  padding-left: 10px;
  flex: 1;
`;
