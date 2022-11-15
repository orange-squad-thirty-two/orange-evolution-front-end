import { createContext, useContext, useState } from 'react';
import { useRequestGet } from '../hooks/useRequest';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [trailsId, setTrailsId] = useState([]);
  const [selectTrailsData, setSelectTrailsData] = useState([]);
  const [userData, setUserData] = useState('');

  const dataTrails = useRequestGet('/trails');
  const dataSelectTrails = useRequestGet('/trails/choose');

  return (
    <GlobalContext.Provider
      value={{
        userData,
        setUserData,
        selectTrailsData,
        setSelectTrailsData,
        setTrailsId,
        trailsId,
        dataTrails,
        dataSelectTrails,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  const contextData = useContext(GlobalContext);
  return contextData;
};
