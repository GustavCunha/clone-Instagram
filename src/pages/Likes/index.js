import React, { useState } from 'react';
import { Container } from './styles';
import { FlatList } from 'react-native';
import Header from '../../components/Header';

export default function Comment(){
  const likes = [
    {id: 1, description: 'Felipe curtiu sua foto.'},
    {id: 2, description: 'Leonardo curtiu sua foto.'},
    {id: 3, description: 'Gustavo curtiu sua foto.'},
    {id: 4, description: 'Tiago curtiu sua foto.'},
    {id: 5, description: 'Maria curtiu sua foto.'},
    {id: 6, description: 'Fernanda curtiu sua foto.'}
  ]

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
                    ListFooterComponent={loading && <Loading />}
                    showsVerticalScrollIndicator={false}
                    onRefresh={refreshList}
                    refreshing={refreshing}
                    onEndReachedThreshold={0.1}
                    onEndReached={() => loadPage()}
                />
            </Container>
        </>
    );
}
