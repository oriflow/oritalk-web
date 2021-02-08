import { create } from 'apisauce';

export const api = create({
  baseURL: 'http://54.165.46.212:3333',
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
  },
});
