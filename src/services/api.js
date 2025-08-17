import axios from 'axios';

const api = axios.create({//192.168.18.10
  baseURL: 'http://192.168.18.10:3333',
});

export default api;