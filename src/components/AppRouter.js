import React, {useContext, useState, useEffect} from 'react';
import {Switch, Route, Redirect, useHistory} from 'react-router-dom'
import {publicRoutes} from "../routes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {LOGIN_ROUTE} from "../utils/consts";
import {getId, refresh} from "../http/userAPI";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)
    const history = useHistory()
    let isAuth = true

    useEffect(() => {
        refresh().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
            getId().then((id) => {
                user.setId(id)
                history.push(`/${user.id}`)
            });
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <div>Секундочку...</div>
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
