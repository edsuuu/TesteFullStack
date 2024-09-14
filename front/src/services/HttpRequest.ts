import axios, { AxiosInstance } from 'axios';

const HttpRequest: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
});

export { HttpRequest };
