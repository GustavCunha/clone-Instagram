import axios from 'axios';

const API = axios.create({
    baseURL: 'http://demo5369044.mockable.io/'
});

export default API;