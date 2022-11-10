import { createContext, useContext, useState } from 'react';
import { useRequest } from '../hooks/useRequest';

const HomeContext = createContext();

export default function HomeProvider({ children }) {
  const [userData, setUserData] = useState('');
  const [showSlide, setShowSlide] = useState(true);

  const { data, loading } = useRequest('/trails');

  return (
    <HomeContext.Provider
      value={{ userData, setUserData, showSlide, setShowSlide, data, loading }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export const useHomeContext = () => {
  const contextData = useContext(HomeContext);

  return contextData;
};
