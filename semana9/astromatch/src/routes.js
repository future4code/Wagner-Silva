import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Matchs from './components/Matchs/Matchs';
import Register from './components/Register/Register';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={Home} />
                <Route path={"/login"} component={Login} />
                <Route path={"/register"} component={Register} />
                <Route path={"/matchs"} component={Matchs} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;