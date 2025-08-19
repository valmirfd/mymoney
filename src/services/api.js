import axios from 'axios';

const api = axios.create({//192.168.18.10 - 192.168.1.38
  baseURL: 'http://192.168.1.38:3333',
});

export default api;