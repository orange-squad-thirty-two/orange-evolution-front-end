import { createContext, useContext, useState } from 'react';

const TrailsContext = createContext();

export function TrailsProvider({ children }) {
  const [trailsAll, setTrailsAll] = useState([]);
  const [classesAll, setClassesAll] = useState([]);
  const [modulesClasses, setModulesClasses] = useState([]);
  const [modulesIndex, setModulesIndex] = useState("");

  return (
    <TrailsContext.Provider
      value={{
        trailsAll,
        setTrailsAll,
        classesAll,
        setClassesAll,
        modulesClasses,
        setModulesClasses,
        modulesIndex,
        setModulesIndex
      }}
    >
      {children}
    </TrailsContext.Provider>
  );
}

export const useTrails = () => {
  const contextData = useContext(TrailsContext);
  return contextData;
};
