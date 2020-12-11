import styled from 'styled-components/native';

export const Title = styled.Text`
    flex: 1;
    background-color: #fff;
`;

export const CommentContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px 0 15px;
`;

export const CommentUsername = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const CommentUserComment = styled.Text`
  font-size: 18px;
  padding-left: 5px;
`;

export const CommentLeftSide = styled.View`
  display: flex;
  flex-direction: row;
`;

export const CommentRightSide = styled.View``;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999'
})`
  margin: 30px 0;
`;

export const ButtonIcon = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  margin: 5px 10px;
`;

export const Container = styled.View``;
