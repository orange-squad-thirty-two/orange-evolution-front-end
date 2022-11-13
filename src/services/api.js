import axios from 'axios';
import JsCookie from 'js-cookie';

const URI_DEV = 'http://localhost:3333';
const URI_PROD = '';

export const api = axios.create({
  baseURL: URI_DEV,
});

export const loginRequest = async (data) => {
  const user = await api.post('/login', data);
  return user.data;
};

export const createSelectTrails = async (data) => {
  const token = JsCookie.get('token');
  const trails = await api.post(
    '/trails/choose',
    { cursos: data },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return trails;
};

export const createNewUser = async (data) => {
  const token = JsCookie.get('token');
  const user = await api.post('/users', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return user.data;
};
