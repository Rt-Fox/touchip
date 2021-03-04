import React from 'react';
import {observer} from "mobx-react-lite";

const NoWay = observer(() => {
    return (
        <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">Блин, такого пользователя нет, проверьте ссылку...</div>
    );
});

export default NoWay;