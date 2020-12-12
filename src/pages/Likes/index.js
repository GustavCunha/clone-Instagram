import React, { useState, useEffect } from 'react';
import { 
  Container,
  LikedContainer, 
  LikedDescription, 
  LikedUsername 
} from './styles';
import { FlatList } from 'react-native';

import api from '../../services/api';

export default function Like() {
  const [likesList, setLikesList] = useState([]);

  const handleGetLikeList = async () => {
    const likeList = await api.get('/posts/likes');
    setLikesList(likeList.data);
  }

  useEffect(() => {
    handleGetLikeList();
  }, []);

  const renderPost = ({ item }) => {
    const { user } = item;

    return(
      <LikedContainer>
        <LikedUsername>{user.user}</LikedUsername>
        <LikedDescription>curtiu sua publicação</LikedDescription>
      </LikedContainer>
    );  
  }

  return(
    <Container>
      <FlatList
        key="list"
        data={likesList}
        keyExtractor={likes => String(likes.id)}
        renderItem={renderPost}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
