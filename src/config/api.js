import axios from "axios";
require('dotenv').config();

const api = axios.create({
    baseURL: 'https://developer.marvel.com'
});

api.interceptors.request.use(async config => {
    config.headers = {
        Accept: '*/*'
    };

    return config;
});

export default api;