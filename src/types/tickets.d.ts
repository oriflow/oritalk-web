export interface TicketModel {
  id_ticket: number;
  id_site: number;
  id_customer: number;
  id_subject: number;
  created_at: string;
  updated_at: string;
  customer: {
    id_customer: number;
    name: string;
    email: string;
    phone: string;
    is_customer: boolean;
    cgc: string;
  };
  subject: {
    id_subject: number;
    all_sites: boolean;
    sites_ids: Array<number>;
  };
  status: {
    id_status: number;
    description: string;
  };
}
