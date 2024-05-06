/* eslint-disable react/prop-types */
import React from 'react';

export const GlobalContext = React.createContext();

export function Context({ children }) {
  const [idMaster, setIdMaster] = React.useState('');

  React.useEffect(() => {
    console.log(idMaster);
  }, [idMaster]);
  return (
    <GlobalContext.Provider value={{ idMaster, setIdMaster }}>
      {children}
    </GlobalContext.Provider>
  );
}
