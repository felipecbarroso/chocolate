import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://jsonplaceholder.typicode.com/',
  // baseURL: process.env.REACT_APP_API,
 baseURL: 'http://localhost:3000/',
})

export default api;
