import { useState } from 'react';
import { api } from 'services/api';

import { useAuth } from './auth';

export const useClients = () => {
  const { prepareRequest } = useAuth();
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState(null);

  const getClients = async () => {
    try {
      const res = await prepareRequest(api.get, '/clients');
      if (res.status !== 200) throw res;
      setClients(res.data);
    } catch (error) {
      //
    }
  };

  const getClient = async (id: number) => {
    try {
      const res = await prepareRequest(api.get, `/clients/${id}`);
      if (res.status !== 200) throw res;
      setClient(res.data);
    } catch (error) {
      //
    }
  };

  return { getClients, getClient, clients, client };
};
