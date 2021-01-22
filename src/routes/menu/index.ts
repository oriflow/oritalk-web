import ClientsPage from 'pages/clients';
import FinancesPage from 'pages/finances';
import HomePage from 'pages/home';
import TicketsPage from 'pages/tickets';
import UserDataPage from 'pages/userdata';
import {
  MdMessage,
  MdHome,
  MdAttachMoney,
  MdPeople,
  MdSettings,
  MdHelp,
  MdExitToApp,
} from 'react-icons/md';

export const menu = [
  {
    name: 'Início',
    path: '/home',
    private: true,
    icon: MdHome,
    component: HomePage,
  },
  {
    name: 'Tickets',
    path: '/tickets',
    private: true,
    icon: MdMessage,
    component: TicketsPage,
  },
  {
    name: 'Financeiro',
    path: '/finances',
    private: true,
    icon: MdAttachMoney,
    component: FinancesPage,
  },
  {
    name: 'Clientes',
    path: '/clients',
    private: true,
    icon: MdPeople,
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
    icon: MdSettings,
  },
  {
    name: 'Ajuda',
    path: '/help',
    private: true,
    icon: MdHelp,
  },
  {
    name: 'Sair',
    path: '/logout',
    private: true,
    icon: MdExitToApp,
  },
];
