import { create } from 'apisauce';

export const api = create({
  baseURL: 'https://api.oriflow.io',
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
  },
});
