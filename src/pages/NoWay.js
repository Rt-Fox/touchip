import React from 'react';
import {observer} from "mobx-react-lite";

const NoWay = observer(() => {
    return (
        <h1 className="w-100 min-vh-100 d-flex align-items-center justify-content-center">Блин, такого пользователя нет, та ли ссылка?...</h1>
    );
});

export default NoWay;