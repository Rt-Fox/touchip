import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {partialUpdateCard, retrieveCard} from "../http/fieldsApi";
import Fields from "../components/Fields";
import {observer} from "mobx-react-lite";
import Modal from "../components/modal";
import {getId} from "../http/userAPI";
import Nickname from "../components/Nickname";
import Avatar from "../components/Avatar";
import {Context} from "../index";

const Profile = observer(() => {
    const {user} = useContext(Context);

    const [card, setCard] = useState({});

    const {id} = useParams()
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
        <div className="container mt-5">
            <div className="row d-flex flex-column align-items-center">
                <Avatar props={card} />
                <Nickname props={card} />
            </div>
            <div className="row d-flex flex-column align-items-center">
                <Fields key={card.id} props={card.fields}/>
            </div>
            <div className="row d-flex flex-column align-items-center mb-5">
                {isAuth&&<Modal />}
            </div>
        </div>
    );
});

export default Profile;
