import { useState } from 'react';
import { api } from 'services/api';

import { useAuth } from './auth';

export const useClients = () => {
  const { prepareRequest } = useAuth();
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(false);

  const getClients = async () => {
    try {
      setLoading(true);
      const res = await prepareRequest(api.get, '/customer/list');
      if (res.status !== 200) throw res;
      setClients(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const getClient = async (id: number) => {
    try {
      setLoading(true);
      const res = await prepareRequest(api.get, `/customer/${id}`);
      if (res.status !== 200) throw res;
      setClient(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return { getClients, getClient, clients, client, loading };
};
