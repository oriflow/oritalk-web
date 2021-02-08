import React, { ReactNode } from 'react';

import { AuthProvider } from './auth';
import { RouteProviderHook } from './useRoute';

export const HooksProvider: React.FC<ReactNode> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export const RouteProvider: React.FC<ReactNode> = ({ children }) => {
  return (
    <RouteProviderHook>
      <AuthProvider>{children}</AuthProvider>
    </RouteProviderHook>
  );
};
