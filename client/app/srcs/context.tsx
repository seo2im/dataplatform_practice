import React, { createContext, useState } from 'react';

export const Store = createContext();
const ContextProvider: React.FC = ({ children }) => {
  const [id, setId] = useState<number|null>(null);
  const [name, setName] = useState<string>('');

  return (
    <Store.Provider value={{ id, setId, name, setName }}>
      {children}
    </Store.Provider>
  )
}

export default ContextProvider;
