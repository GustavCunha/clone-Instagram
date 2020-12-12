import axios from 'axios';

const API = axios.create({
    // baseURL: 'http://demo5369044.mockable.io/'
    baseURL: 'http://10.0.0.7:3333/'
});

export default API;