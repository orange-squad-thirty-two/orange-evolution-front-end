import { useEffect, useState } from 'react';
import JsCookie from 'js-cookie';
import { api } from '../services/api';

export const useRequest = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fn = async () => {
      const token = JsCookie.get('token');
      setLoading(true);
      try {
        const response = await api.get(url, {
          headers: {
            Authorization: token,
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
