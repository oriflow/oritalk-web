import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

interface RoutePropsContext {
  push: (path: string, title?: string) => Promise<void>;
  initial_path: string;
  title: string;
}

interface RouteProps {
  children: React.ReactNode;
}

const RouteContext = createContext<RoutePropsContext>({
  push: async () => {},
  initial_path: '',
  title: '',
});

export const RouteProviderHook: React.FC<RouteProps> = ({ children }) => {
  const history = useHistory();
  const {
    pathname,
  }: {
    pathname: string;
  } = useLocation();

  const [initial_path, setInitial] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (!initial_path) {
      setInitial(pathname);
    }
  }, [pathname, initial_path]);

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
  const context = useContext<RoutePropsContext>(RouteContext);
  if (!context) {
    throw new Error('The context The Perfil must be within a valid provider');
  }
  return context;
}
