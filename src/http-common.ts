import axios from 'axios';

import store from "@/store";

const HTTP = axios.create({
    baseURL: store.state.devUrl
});

const HTTPS = axios.create({
    baseURL: store.state.baseUrl
});

export { HTTP, HTTPS }
