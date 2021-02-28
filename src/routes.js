import {LOGIN_ROUTE, PROFILE_ROUTE} from "./utils/consts";

import Profile from "./pages/Profile";
import Login from "./pages/Login";


export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: PROFILE_ROUTE + ':id',
        Component: Profile
    }
]