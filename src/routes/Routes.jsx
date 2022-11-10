import { Route, Switch, Redirect } from 'react-router-dom';
import HomeProvider from '../context/HomeProvider';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register/Index';

export function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Redirect exact from="/" to="/login" />
      <Route path="/register" component={Register} />
      <HomeProvider>
        <Route path="/home" component={Home} />
      </HomeProvider>
    </Switch>
  );
}
