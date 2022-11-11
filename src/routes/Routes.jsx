import { Route, Switch } from 'react-router-dom';
import { GlobalProvider } from '../context/GlobalProvider';
import HomeProvider from '../context/HomeProvider';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register/Index';
import Trails from '../pages/Trails/Trails';
import { PrivateRouter } from './PrivateRouter';

export function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRouter>
                <GlobalProvider>
                    <Route exact path="/trails/:id" component={Trails} />
                    <HomeProvider>
                        <Route path="/home" component={Home} />
                    </HomeProvider>
                </GlobalProvider>
            </PrivateRouter>
        </Switch>
    );
}

