import React, { createContext, useContext, useEffect, useState } from 'react';
import { api } from 'services/api';
import {
  AuthProps,
  AuthProviderProps,
  newSessionProps,
  ResponseOK,
  UserData,
} from 'types/auth';

const AuthContext = createContext<AuthProps>({
  loading: false,
  newSession: async () => {},
  prepareRequest: async (req, url, params): Promise<ResponseOK> =>
    req(url, params),
  auth: undefined,
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState<UserData>();

  useEffect(() => {
    const auth_data = localStorage.getItem('@auth');
    if (auth_data) {
      const user_data: UserData = JSON.parse(auth_data);
      setAuth({ ...user_data, isAuth: true, loaded: true });
      api.setHeader('Authorization', `Bearer ${user_data.token}`);
    } else {
      setAuth({ isAuth: false, loaded: true });
    }
  }, []);

  const prepareRequest = async (
    req: any,
    url: string,
    params: any,
  ): Promise<ResponseOK> => {
    if (auth?.token) api.setHeader('Authorization', `Bearer ${auth?.token}`);
    const response = await req(url, params);
    return response;
  };

  const newSession = async (data: newSessionProps) => {
    try {
      setLoading(true);
      const res = await api.post('/session', data);
      if (res.status !== 200) throw res;
      const user_data = res.data as UserData;
      api.setHeader('Authorization', `Bearer ${user_data.token}`);
      localStorage.setItem('@auth', JSON.stringify(user_data));
      setLoading(false);
      window.location.reload();
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, loading, newSession, prepareRequest }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context: AuthProps = useContext<AuthProps>(AuthContext);
  if (!context) {
    throw new Error('The context The Perfil must be within a valid provider');
  }
  return context;
}
