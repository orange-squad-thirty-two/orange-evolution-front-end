import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

export const PrivateRouter = ({ children }) => {
  const cookie = Cookies.get('token');

  if (!cookie) {
    return <Redirect to="/" />;
  }

  return <>{children}</>;
};
