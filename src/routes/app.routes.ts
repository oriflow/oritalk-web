import CallPage from 'pages/call';
import CallsPage from 'pages/calls';
import UserDataPage from 'pages/client';

export const app_routes = [
  {
    name: 'Perfil',
    component: UserDataPage,
    path: '/clients/:id',
    private: true,
  },

  {
    name: 'Atendimentos',
    path: '/tickets/:id',
    private: true,
    component: CallsPage,
  },

  {
    name: 'Atendimentos',
    path: '/tickets/:id/calls',
    private: true,
    component: CallPage,
  },
];
