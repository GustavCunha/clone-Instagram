import React, { useState } from 'react';
import { Title } from './styles';
import { FlatList } from 'react-native';
import Header from '../../components/Header';

import api from '../../services/api';

export default function Like(){
    const [likes, setLikes] = useState([
        {id: 1, name: 'Felipe', description: 'curtiu seu post.'},
        {id: 2, name: 'Leonardo', description: 'curtiu seu post.'},
        {id: 3, name: 'Gustavo', description: 'curtiu seu post.'}
    ]);

    const liked = (id) => {
        const likeList = likes.find(whoLiked => whoLiked.id === id);
        setLikes(likeList);
    }

    const renderPost = ({ item }) => {
      const { name, description, id } = item;
  
      return(
        <LikedContainer>
          <LikedUsername>{name}</LikedUsername>
          <LikedDescription>{description}</LikedDescription>
        </LikedContainer>
      );  
    }

    return(
        <>
            <Header>
                <Title>Likes</Title>
            </Header>
            <Container>
                <FlatList
                    key="list"
                    data={likes}
                    keyExtractor={likes => String(likes.id)}
                    renderItem={renderPost}
                    showsVerticalScrollIndicator={false}
                />
            </Container>
        </>
    );
}
