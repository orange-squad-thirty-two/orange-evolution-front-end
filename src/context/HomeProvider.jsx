import { createContext, useContext, useState } from 'react';

const HomeContext = createContext();

export default function HomeProvider({ children }) {
  const [userData, setUserData] = useState('');
  const [showSlide, setShowSlide] = useState(true);

  return (
    <HomeContext.Provider value={{ userData, setUserData, showSlide, setShowSlide }}>
      {children}
    </HomeContext.Provider>
  );
}

export const useHomeContext = () => {
  const contextData = useContext(HomeContext);

  return contextData;
};
