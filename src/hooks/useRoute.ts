import { useHistory, useLocation } from 'react-router-dom';

export const useRoute = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const push = (path = '/', title = '', params = null) => {
    history.push({
      pathname: path,
      state: { pathname, title, params },
    });
  };

  return { push };
};
