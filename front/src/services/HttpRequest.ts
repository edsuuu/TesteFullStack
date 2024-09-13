import axios, { AxiosInstance } from 'axios';

const HttpRequest: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
});

const ImagemApi = (company_key: string, path: string) => {
    return `https://api.forca-de-vendas.integrador.backup.e-catalogos.net/images/${company_key}/${path}`;
};

export { HttpRequest, ImagemApi };
