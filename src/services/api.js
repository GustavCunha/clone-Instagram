import axios from 'axios';

const API = axios.create({
    // baseURL: 'http://demo5369044.mockable.io/'
    baseURL: 'http://192.168.1.8:3333/'
});

export default API;