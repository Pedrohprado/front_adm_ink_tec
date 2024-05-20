/* eslint-disable react/prop-types */
import React from 'react';

export const GlobalContext = React.createContext();

export function Context({ children }) {
  const [idMaster, setIdMaster] = React.useState('');
  const [login, setLogin] = React.useState(false);
  const [userName, setUserName] = React.useState('');

  React.useEffect(() => {
    console.log(idMaster);
  }, [idMaster]);
  return (
    <GlobalContext.Provider
      value={{ idMaster, setIdMaster, login, setLogin, userName, setUserName }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
