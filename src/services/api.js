import axios from 'axios';

const URI_DEV = 'http://localhost:3333';
const URI_PROD = '';

export const api = axios.create({
  baseURL: URI_DEV,
});

export const loginRequest = async (data) => {
  const user = await api.post('/login', data);
  return user.data;
};
