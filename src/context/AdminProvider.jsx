import { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

export default function AdminProvider({ children }) {
  const [dataClasses, setDataClesses] = useState([]);
  const [trailIdSelected, setTrailIdSelected] = useState('');
  const [selectedClassesId, setSelectedClassesId] = useState('');
  const [dataClassesEdit, setDataClassesEdit] = useState(null);
  const [showSlide, setShowSlide] = useState(true);
  const [isDeleted, setIsDeleted] = useState(false);
  const [inputValues, setInputValues] = useState({
    titulo: '',
    tipo: '',
    criador: '',
    url: '',
    duracao: '',
  });

  return (
    <AdminContext.Provider
      value={{
        dataClasses,
        setDataClesses,
        isDeleted,
        setIsDeleted,
        showSlide,
        setShowSlide,
        trailIdSelected,
        setTrailIdSelected,
        setSelectedClassesId,
        selectedClassesId,
        dataClassesEdit,
        setDataClassesEdit,
        inputValues,
        setInputValues,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export const useAdmin = () => {
  const adim = useContext(AdminContext);

  return adim;
};
