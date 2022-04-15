import axios from "axios";
//require('dotenv').config();

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/'
});

api.interceptors.request.use(async config => {
    config.headers = {
        Accept: '*/*',
        'If-None-Match': 'f0fbae65eb2f8f28bdeea0a29be8749a4e67acb3'
    };

    return config;
});

export default api;