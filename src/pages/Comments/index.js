import React, { useState } from 'react';
import { Container } from './styles';
import { FlatList } from 'react-native';
import Header from '../../components/Header';

export default function Comment(){
    return(
        <>
            <Header>
                <Title>Comentários</Title>
            </Header>
            <Container>
                <FlatList
                    key="list"
                    data={feed}
                    keyExtractor={comentarios => String(comentarios.id)}
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
