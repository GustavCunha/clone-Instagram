import React, { useState, useEffect } from 'react';
import { 
  Container,
  LikedContainer, 
  LikedDescription, 
  LikedUsername 
} from './styles';
import { FlatList } from 'react-native';

import api from '../../services/api';
import { useRoute } from '@react-navigation/native';

export default function Like() {
  const [likesList, setLikesList] = useState([]);
  const route = useRoute();
  const {itemId} = route.params;

  async function getLikesInPost(){

    let list = await api.get(`/posts/listLikes/${itemId}`);
    // console.log(list.data);
    setLikesList(list.data);
  }

  const handleGetLikeList = async () => {
    const likeList = await api.get('/posts/likes');
    setLikesList(likeList.data);
  }

  useEffect(() => {
    getLikesInPost();
  }, []);

  const renderPost = ({ item }) => {
    const { user } = item;

    return(
      <LikedContainer>
        <LikedUsername>{item}</LikedUsername>
        <LikedDescription>curtiu sua publicação</LikedDescription>
      </LikedContainer>
    );  
  }

  return(
    <Container>
      <FlatList
        key="list"
        data={likesList}
        keyExtractor={likes => String(likes)}
        renderItem={renderPost}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
