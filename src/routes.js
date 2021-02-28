import {LOGIN_ROUTE, PROFILE_ROUTE, NEW_FIELDS} from "./utils/consts";

import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NewFields from "./pages/NewFields";


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
        path: NEW_FIELDS,
        Component: NewFields
    },
]