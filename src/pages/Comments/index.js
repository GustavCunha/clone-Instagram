import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Container, Loading, CommentContainer, CommentUsername, CommentUserComment, CommentLeftSide, CommentRightSide, ButtonIcon } from './styles';

export default function Comment() {
  const [commentList, setCommentList] = useState([
    {id: '1', name: 'Felipe', description: 'Ola!', like: false},
    {id: '2', name: 'Leonardo', description: 'Que!', like: true},
    {id: '3', name: 'Gustavo', description: 'Prof', like: true},
  ]);

  const loading = false;

  const handleLike = (id) => {
    let updatedCommentList = [...commentList];
    const commentIndex = commentList.findIndex(comment => comment.id === id);
    const updatedObject = {...updatedCommentList[commentIndex]};
    updatedObject.like = !updatedObject.like;
    updatedCommentList[commentIndex] = updatedObject;
    setCommentList(updatedCommentList);
  }

  const renderPost = ({ item }) => {
    const { name, description, id, like } = item;

    return(
      <CommentContainer>
        <CommentLeftSide>
          <CommentUsername>{name}</CommentUsername>
          <CommentUserComment>{description}</CommentUserComment>
        </CommentLeftSide>
        <CommentRightSide>
          <ButtonIcon onPress={() => handleLike(id)} >
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
  
  return(
    <Container>
        <FlatList
        key="comments"
        data={commentList}
        keyExtractor={item => String(item.id)}
        renderItem={renderPost}
        ListFooterComponent={loading && <Loading />}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.1}
      />
    </Container>
  );
}
