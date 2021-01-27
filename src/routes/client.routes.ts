import UserDataPage from 'pages/userdata';

export const clients_routes = [
  {
    name: 'Perfil',
    component: UserDataPage,
    path: '/clients/:id',
    private: true,
  },
];
