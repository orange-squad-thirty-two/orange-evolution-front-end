import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register/Index';

export function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Redirect exact from="/" to="/login" />
      <Route path="/register" component={Register} />
    </Switch>
  );
}
