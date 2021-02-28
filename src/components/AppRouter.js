import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {publicRoutes} from "../routes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {LOGIN_ROUTE} from "../utils/consts";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    let isAuth = true
    return (
        <Switch>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={LOGIN_ROUTE}/>
        </Switch>
    );
});

export default AppRouter;
