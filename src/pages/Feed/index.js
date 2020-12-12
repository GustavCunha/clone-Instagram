import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, FlatList,Button , View, ScrollView, TextInput} from 'react-native';
import axios from 'axios'
import LazyImage from '../../components/LazyImage';
import {Feather, FontAwesome} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Publication from '../../components/Publication';

import { 
  Container, 
  Post, 
  Header, 
  Avatar, 
  Name, 
  Description, 
  Loading, 
  Buttons, 
  ButtonContainer,
  ButtonIcon 
} from './styles';

import api from '../../services/api';

export default function Feed() {
  const [error, setError] = useState('');
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [viewable, setViewable] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [text, setText] = useState('')
  const [comentarios, setComentarios] = useState([]);
  const [like, setLike] = useState(false);
  

  const navigation = useNavigation();

  const MAX_LENGTH = 250;

  // async function loadPage(pageNumber = page, shouldRefresh = false) {
  //   if (pageNumber === total) return;
  //   if (loading) return;

  //   setLoading(true);
  //   axios
  //   .get(`https://5fa103ace21bab0016dfd97e.mockapi.io/api/v1/feed?page=${pageNumber}&limit=4`)
  //   .then(response => {
  //     const totalItems = response.headers["x-total-count"]
  //     const data = response.data
  //     //console.log(data)
  //     setLoading(false)
  //     setTotal(Math.floor(totalItems / 4));
  //     setPage(pageNumber + 1);
  //     setFeed(shouldRefresh ? data : [...feed, ...data]);
  //   })
  //   .catch(err => {
  //     setError(err.message);
  //     setLoading(true)
  //   })
  // }

  const loadPage = async (pageNumber = page, shouldRefresh = false) => {
    if (pageNumber === total) return;
    if (loading) return; 

    const feedList = await api
      .get('/posts')
      .catch(err => {
        setError(err.message);
        setLoading(true);
      })

      // const totalItems = feedList.headers["x-total-count"];
      // const data = feedList.data;
      // setLoading(false);
      // setTotal(Math.floor(totalItems / 4));
      // setPage(pageNumber + 1);
      // setFeed(shouldRefresh ? data : [...feed, ...data]);
      setFeed(feedList.data);
  }

  async function refreshList() {
    setRefreshing(true);
    
    await loadPage(1, true);

    setRefreshing(false);
  }

  const onGet = (id) => {
    try {

      const value = AsyncStorage.getItem(id);

      if (value !== null) {
        // We have data!!
        setComentarios(value)
      } 
    } catch (err) {
      // Error saving data
    }
  }

  // const onSave = async (id) => {
  //   try {
  //     await AsyncStorage.setItem(id, text);
  //     setComentarios([...comentarios, ...text])
  //   } catch (error) {
  //     // Error saving data
  //   }
  // }

  useEffect(() => {
    loadPage();
  }, []);

  function handleLike(){
    setLike(!like);
  }

  function handleToComment(){
    navigation.navigate('Message');
  }

  function handleToLikes(){
    navigation.navigate('Likes');
  }

  const renderPost = ({item}) => {
    // const { image, comments, user, description, _id } = item;

    console.log(item.user.name);

    return(
      <Publication item={item}/>
    );  
    
  }
  
  const handleViewableChanged = useCallback(({ changed }) => {
    setViewable(changed.map(({ item }) => item.id));
  }, []);

  return (
    <Container>
      <FlatList
        key="list"
        data={feed}
        keyExtractor={item => String(item._id)}
        renderItem={renderPost}
        ListFooterComponent={loading && <Loading />}
        showsVerticalScrollIndicator={false}
        onRefresh={refreshList}
        refreshing={refreshing}
        onEndReachedThreshold={0.1}
        onEndReached={() => loadPage()}
      />
    </Container>
  );
}

const styles = StyleSheet.create(
  {text: {
    fontSize: 30,
    lineHeight: 33,
    color: "#333333",
    padding: 16,
    paddingTop: 16,
    minHeight: 170,
    borderTopWidth: 1,
    borderColor: "rgba(212,211,211, 0.3)"
}})
