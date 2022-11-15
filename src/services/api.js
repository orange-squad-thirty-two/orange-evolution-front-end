import axios from 'axios';
import JsCookie from 'js-cookie';

const URI_DEV = 'http://localhost:3333';
const URI_PROD = 'https://app-orange-evolution.herokuapp.com/';

export const api = axios.create({
  baseURL: URI_DEV,
});

export const loginRequest = async (data) => {
  const user = await api.post('/login', data);
  return user.data;
};

export const loginAdminRequest = async (data) => {
  const user = await api.post('/login/admin', data);
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

export const createNewClasses = async (data, curso_id) => {
  const token = JsCookie.get('token');
  const user = await api.post(`/classes/${curso_id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return user.data;
};

export const updateClasses = async (curso_id, aula_id, data) => {
  const token = JsCookie.get('token');
  const user = await api.put(`/classes/${curso_id}/${aula_id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return user.data;
};
