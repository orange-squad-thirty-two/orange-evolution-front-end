import { Route, Switch } from 'react-router-dom';
import AdminProvider from '../context/AdminProvider';
import { GlobalProvider } from '../context/GlobalProvider';
import HomeProvider from '../context/HomeProvider';
import { TrailsProvider } from '../context/TrailsProvider';
import AdminPage from '../pages/Admin';
import Home from '../pages/Home';
import Login from '../pages/Login';
import LoginAdmin from '../pages/LoginAdmin';
import ModulesClasses from '../pages/ModulesClasses';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register/Index';
import Trails from '../pages/Trails';
import { PrivateRouter, VerifyToken } from './PrivateRouter';

export function Routes() {
  return (
    <GlobalProvider>
      <AdminProvider>
        <HomeProvider>
          <TrailsProvider>
            <Switch>
              <VerifyToken exact path="/">
                <Login />
              </VerifyToken>
              <VerifyToken exact path="/login/admin">
                <LoginAdmin />
              </VerifyToken>
              <VerifyToken exact path="/register">
                <Register />
              </VerifyToken>
              <PrivateRouter exact path="/trail/:id/:classeName/:modulesClasses">
                <ModulesClasses />
              </PrivateRouter>
              <PrivateRouter exact path="/trails/:id">
                <Trails />
              </PrivateRouter>
              <PrivateRouter exact path="/home">
                <Home />
              </PrivateRouter>
              <PrivateRouter exact path="/admin">
                <AdminPage />
              </PrivateRouter>
              <Route path="*" component={NotFound} />
            </Switch>
          </TrailsProvider>
        </HomeProvider>
      </AdminProvider>
    </GlobalProvider>
  );
}
