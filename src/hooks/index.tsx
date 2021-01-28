import React, { ReactNode } from 'react';

import { RouteProviderHook } from './useRoute';

const HooksProvider: React.FC<ReactNode> = ({ children }) => {
  return <RouteProviderHook>{children}</RouteProviderHook>;
};

export default HooksProvider;
