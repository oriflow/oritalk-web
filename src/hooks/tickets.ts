/* eslint-disable prefer-const */
import { useState } from 'react';
import { api } from 'services/api';
import { TicketModel } from 'types/tickets';

import { useAuth } from './auth';

export const useTickets = () => {
  const { prepareRequest } = useAuth();
  const [tickets, setTickets] = useState<TicketModel[]>([]);
  const [ticket, setTicket] = useState<TicketModel>();

  const getTickets = async () => {
    try {
      const res = await prepareRequest(api.get, '/ticket/list');
      if (res.status !== 200) throw res;
      setTickets(res.data);
    } catch (error) {
      //
    }
  };

  const [ticketsByStatus, setTicketsByStatus] = useState([]);
  const getTicketsByStatus = async (params: any) => {
    try {
      const res = await prepareRequest(api.get, '/status/list');
      if (res.status !== 200) throw res;
      let Data = [] as any;
      res.data.map(async (item: any) => {
        const data = await getTicketsWithStatus({
          ...params,
          ids_status: item.id,
        });
        Data.push(data);
      });
      setTicketsByStatus(Data);
    } catch (error) {
      //
    }
  };

  const getTicketsWithStatus = async (params: any) => {
    try {
      const res = await prepareRequest(api.get, '/ticket/list', params);
      if (res.status !== 200) throw res;
      return res.data;
    } catch (error) {
      return false;
    }
  };

  const getTicket = async (id: number) => {
    try {
      const res = await prepareRequest(api.get, `/ticket/${id}`);
      if (res.status !== 200) throw res;
      setTicket(res.data);
    } catch (error) {
      //
    }
  };

  return {
    getTickets,
    getTicket,
    getTicketsByStatus,
    ticketsByStatus,
    tickets,
    ticket,
  };
};
