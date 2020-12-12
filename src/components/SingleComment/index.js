import React, { useState } from 'react';
import {FontAwesome} from '@expo/vector-icons';
import { CommentContainer, CommentUsername, CommentUserComment, CommentLeftSide, CommentRightSide, ButtonIcon } from './styles';

const SingleComment = ({ user, description }) => {
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
  };
  return(
    <CommentContainer>
      <CommentLeftSide>
        <CommentUsername>{user.name}</CommentUsername>
        <CommentUserComment>{description}</CommentUserComment>
      </CommentLeftSide>
      <CommentRightSide>
        <ButtonIcon onPress={handleLike} >
          {!like ? (
            <FontAwesome name="heart-o" size={16} color="#000"/>
          ) : (
            <FontAwesome name="heart" size={16} color="#FF0000" />
          )}
        </ButtonIcon>
      </CommentRightSide>
    </CommentContainer>
  );
}

export default SingleComment;