import React, { useState } from 'react';
import {Feather, FontAwesome} from '@expo/vector-icons';
import LazyImage from '../LazyImage';

import { 
    Container, 
    Header, 
    Avatar, 
    Name,
    Main, 
    Footer,
    Buttons, 
    ButtonIcon
} from './styles';

export default function Post({item}){
    const [like, setLike] = useState(false);
    const [viewable, setViewable] = useState([]);

    function handleLike(){
        setLike(!like);
      }

    <Container>
        <Header>
            {/* Avatar e Nome  */}
            <Avatar source={{uri: item.author.avatar}}/>
            <Name>{item.author.name}</Name>
        </Header>
        <Main>
            {/* Imagem, Buttons, Description */}
            <LazyImage
                aspectRatio={item.aspectRatio} 
                shouldLoad={viewable.includes(item.id)} 
                smallSource={{ uri: item.small }}
                source={{ uri: item.image }}
            />
            <Buttons>
                <ButtonIcon onPress={handleLike}>
                    {like ? (
                        <FontAwesome name="heart-o" size={24} />
                    ) : (
                        <FontAwesome name="heart" size={24} color="#FF0000" />
                    )}
                </ButtonIcon>
            </Buttons>
        </Main>
        <Footer>
            {/* Comments */}
        </Footer>
        
    </Container>
}