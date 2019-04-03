import axios from 'axios';

import store from "@/store";

// dev URL
const HTTP = axios.create({
    baseURL: store.state.devUrl
});

// release URL
const HTTPS = axios.create({
    baseURL: store.state.baseUrl
});

export { HTTP, HTTPS }
