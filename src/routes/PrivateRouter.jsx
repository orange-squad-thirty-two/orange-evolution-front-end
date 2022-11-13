import { Redirect, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

export const PrivateRouter = ({ children, ...rest }) => {
    const cookie = Cookies.get('token');

    return (
        <Route
            {...rest}
            render={() => {
                return !cookie ? <Redirect to="/" /> : children;
            }}
        />
    );
};
export const VerifyToken = ({ children, ...rest }) => {
    const cookie = Cookies.get('token');

    return (
        <Route
            {...rest}
            render={() => {
                return cookie ? <Redirect to="/home" /> : children;
            }}
        />
    );
};