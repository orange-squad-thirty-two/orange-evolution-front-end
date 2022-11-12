import { useEffect, useState } from 'react';
import JsCookie from 'js-cookie';
import { api } from '../services/api';

export const useRequestGet = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = JsCookie.get('token');
  useEffect(() => {
    const fn = async () => {
      setLoading(true);
      try {
        const response = await api.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fn();
  }, [url]);

  return { data, loading, error };
};
