/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const RouteContext = createContext({
  push: (_path: string, _title?: any, _?: any): void => {},
  initial_path: '',
  title: '',
});

export const RouteProviderHook = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const history = useHistory();
  const {
    pathname,
  }: {
    pathname: string;
  } = useLocation();

  const [initial_path, setInitial] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    setInitial(pathname);
  }, []);

  const push = async (path = '/', title1 = '', params = null) => {
    setTitle(title1);
    history.push({
      pathname: path,
      state: { pathname, title: title1, params },
    });
  };

  return (
    <RouteContext.Provider value={{ push, initial_path, title }}>
      {children}
    </RouteContext.Provider>
  );
};

export function useRoute() {
  const context = useContext(RouteContext);
  if (!context) {
    throw new Error('The context The Perfil must be within a valid provider');
  }
  return context;
}
