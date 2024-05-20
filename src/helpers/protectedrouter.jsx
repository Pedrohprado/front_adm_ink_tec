/* eslint-disable react/prop-types */
import React from 'react';
import { GlobalContext } from '../global-context/globalcontext';
import { Navigate } from 'react-router-dom';

function ProtectedRouter({ children }) {
  const { login } = React.useContext(GlobalContext);

  if (login) return children;
  if (!login) return <Navigate to={'/'} />;
  return <div></div>;
}

export default ProtectedRouter;
