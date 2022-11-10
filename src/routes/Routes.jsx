import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register/Index';
import Trails from '../pages/Trails/Trails';

export function Routes() {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Redirect exact from="/" to="/login" />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
            <Route exact path="/trails/:id" component={Trails} />
        </Switch>
    );
}
