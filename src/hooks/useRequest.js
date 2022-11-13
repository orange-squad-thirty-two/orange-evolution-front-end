import { useEffect, useState } from 'react';
import JsCookie from 'js-cookie';
import { api } from '../services/api';
import { useLocation } from 'react-router-dom';

export const useRequestGet = (url) => {
    const { pathname } = useLocation()
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = JsCookie.get('token');
        const fn = async () => {
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
        if (pathname === "/home") {
            fn();
        }
    }, [url, pathname]);

    return { data, loading, error };
};
