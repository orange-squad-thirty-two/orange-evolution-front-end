import { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

export default function AdminProvider({ children }) {
  const [dataClasses, setDataClesses] = useState([]);
  return (
    <AdminContext.Provider value={{ dataClasses, setDataClesses }}>
      {children}
    </AdminContext.Provider>
  );
}

export const useAdmin = () => {
  const adim = useContext(AdminContext);

  return adim;
};
