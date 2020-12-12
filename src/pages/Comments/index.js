import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { 
  Container, 
  Loading, 
  CommentContainer, 
  CommentUsername, 
  CommentUserComment,
} from './styles';

import api from '../../services/api';

export default function Comment() {
  const [commentsList, setCommentsList] = useState([]);

  const loading = false;

  const handleGetCommentList = async () => {
    const commentList = await api.get('/posts/comments');
    setCommentsList(commentList.data);
  }

  useEffect(() => {
    handleGetCommentList();
  }, []);

  const renderPost = ({ item }) => {
    const { user, text } = item;

    return(
      <CommentContainer>
        <CommentUsername>{user.user}</CommentUsername>
        <CommentUserComment>{text}</CommentUserComment>
      </CommentContainer>
    );  
  }
  
  return(
    <Container>
        <FlatList
          key="comments"
          data={commentsList}
          keyExtractor={item => String(item._id)}
          renderItem={renderPost}
          ListFooterComponent={loading && <Loading />}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
      />
    </Container>
  );
}
