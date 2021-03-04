import React, {useContext, useState, useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {publicRoutes} from "../routes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {LOGIN_ROUTE} from "../utils/consts";
import {getId, refresh} from "../http/userAPI";


const AppRouter = observer(() => {
    const {user} = useContext(Context);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        refresh().then(data => {
            user.setUser(true);
            getId().then((id) => {
                user.setId(id);
            });
        }).catch().finally(() => setLoading(false))
    }, [user])
    if (loading) {
        return <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">Секундочку...</div>
    }
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
