import React, { useState } from 'react';
import { Container } from './styles';
import { FlatList } from 'react-native';
import Header from '../../components/Header';

export default function Comment(){
    const [likes, setLikes] = useState([
        {id: 1, name: 'Felipe', description: 'curtiu seu post.'},
        {id: 2, name: 'Leonardo', description: 'curtiu seu post.'},
        {id: 3, name: 'Gustavo', description: 'curtiu seu post.'}
    ]);

    const liked = (id) => {
        const likeList = likes.find(whoLiked => whoLiked.id === id);
        setLikes(likeList);
    }

    const renderPost = ({likes}) => {
        return(
            <Publication likes={likes}/>
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
