import React, { useCallback, useState } from 'react';
import {Feather, FontAwesome} from '@expo/vector-icons';
import LazyImage from '../LazyImage';
import { useNavigation } from '@react-navigation/native'
import { 
    Author,
    Avatar,
    ButtonIcon,
    Buttons,
    Container, 
    Description,
    Footer, 
    Header,
    Link,
    Main,
    Name,
} from './styles';
import { TouchableOpacity, View, Text } from 'react-native';


export default function Publication({item}){
    const [like, setLike] = useState(false);
    const [viewable, setViewable] = useState([]);
    const navigation = useNavigation();
    
    function handleLike(){
        setLike(!like);
    }    

    function handleToLikes(){
        navigation.navigate('Likes');
    }

    function handleToComments(){
        navigation.navigate('Comment', {imageId: item.id});
    }
    return(
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
                    <View style={{flexDirection: 'row'}}>
                        <ButtonIcon onPress={handleLike} >
                            {!like ? (
                                <FontAwesome name="heart-o" size={24} color="#000"/>
                            ) : (
                                <FontAwesome name="heart" size={24} color="#FF0000" />
                            )}
                        </ButtonIcon>
                        <ButtonIcon onPress={handleToComments}>
                            <Feather name="message-circle" size={24} />
                        </ButtonIcon>
                        <ButtonIcon >
                            <Feather name="send" size={24} />
                        </ButtonIcon>
                    </View>
                    <ButtonIcon >
                        <Feather name="bookmark" size={24} />
                    </ButtonIcon>
                </Buttons>
                <Link onPress={handleToLikes}>
                    <Text>Curtido por ...</Text>
                </Link>
                <Description>
                    <Author>{item.author.name}</Author> {item.description} 
                </Description>
            </Main>
            <Footer>
                {/* Comments */}
            </Footer>
            
        </Container>
    );
}