export interface newSessionProps {
  email: string;
  password: string;
}

export interface ResponseOK {
  ok: true;
  problem: null;
  originalError: null;

  data?: any;
  status?: number;
  headers?: any;
  duration?: number;
}

export interface AuthProps {
  auth: UserData | undefined;
  loading: boolean;
  newSession: ({ email, password }: newSessionProps) => Promise<void>;
  prepareRequest: (
    request: any,
    url: string,
    params = null,
  ) => Promise<ResponseOK>;
}

export interface UserData {
  user?: {
    id: string;
    id_user: number;
    name: string;
    email: string;
    cgc: string;
    provider: boolean;
    id_tenant: string;
    password_api: string;
  };
  token?: string;
  isAuth: boolean;
  loaded?: boolean;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
