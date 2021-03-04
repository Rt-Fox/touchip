import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {retrieveCard} from "../http/fieldsApi";

import {observer} from "mobx-react-lite";
import Modal from "../components/Modal";
import Nickname from "../components/Nickname";
import Avatar from "../components/Avatar";
import {Context} from "../index";
import Fields from "../components/Fields";
import NoWay from "./NoWay";

const Profile = observer(() => {
    const {user} = useContext(Context);

    const [card, setCard] = useState('');
    const {id} = useParams();
    useEffect(() => {
        retrieveCard(id).then(data => setCard(data))
    }, [id])
    var isAuth = user.isAuth;
    if (user.id === card.page_path) {
        user.setIsAuth(true);
        isAuth = user.isAuth;
    } else {
        user.setIsAuth(false);
        isAuth = user.isAuth;
    }
    return (
        card?
            <div className="container mt-5">
                <div className="row d-flex flex-column align-items-center">
                    <Avatar props={card} />
                    <Nickname props={card} />
                </div>
                {card&&<Fields id={id} fields={card.fields}  isAuth={isAuth}/>}
                <div className="row d-flex flex-column align-items-center mb-5">
                    {isAuth&&<Modal />}
                </div>
            </div>
            :
            <NoWay />
    );
});

export default Profile;
