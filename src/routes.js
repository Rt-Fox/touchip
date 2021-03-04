import {LOGIN_ROUTE, PROFILE_ROUTE, NOWAY_ROUTE} from "./utils/consts";

import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NoWay from "./pages/NoWay";


export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: PROFILE_ROUTE + ':id',
        Component: Profile
    },
    {
        path: NOWAY_ROUTE,
        Component: NoWay
    }
]