import { ReactComponent as ajuda } from 'assets/icons/ajuda.svg';
import { ReactComponent as ajustes } from 'assets/icons/ajustes.svg';
import { ReactComponent as clientes } from 'assets/icons/clientes.svg';
import { ReactComponent as financeiro } from 'assets/icons/financeiro.svg';
import { ReactComponent as home } from 'assets/icons/home.svg';
import { ReactComponent as sair } from 'assets/icons/sair.svg';
import { ReactComponent as tickets } from 'assets/icons/tickets.svg';
//
import ClientsPage from 'pages/clients';
import FinancesPage from 'pages/finances';
import HomePage from 'pages/home';
import TicketsPage from 'pages/tickets';
import UserDataPage from 'pages/userdata';

export const menu = [
  {
    name: 'Início',
    path: '/home',
    private: true,
    icon: home,
    component: HomePage,
  },
  {
    name: 'Tickets',
    path: '/tickets',
    private: true,
    icon: tickets,
    component: TicketsPage,
  },
  {
    name: 'Financeiro',
    path: '/finances',
    private: true,
    icon: financeiro,
    component: FinancesPage,
  },
  {
    name: 'Clientes',
    path: '/clients',
    private: true,
    icon: clientes,
    component: ClientsPage,
    child: [
      {
        name: 'Perfil',
        component: UserDataPage,
        path: '/profile',
        private: true,
      },
    ],
  },
  {
    name: 'Ajustes',
    path: '/settings',
    private: true,
    icon: ajustes,
  },
  {
    name: 'Ajuda',
    path: '/help',
    private: true,
    icon: ajuda,
  },
  {
    name: 'Sair',
    path: '/logout',
    private: true,
    icon: sair,
  },
];
