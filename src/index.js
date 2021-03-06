import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import FieldsStore from "./store/FieldsStore";
import CardsStore from "./store/CardsStore";

import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        cards: new CardsStore(),
        fields: new FieldsStore(),
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);
