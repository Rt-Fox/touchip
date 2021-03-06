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
import ModalOpen from "../components/ModalOpen";

const Profile = observer(() => {
    const {user} = useContext(Context);
    const [loading, setLoading] = useState(true);
    const [card, setCard] = useState('');
    const [flag, setFlag] = useState(false);
    const {id} = useParams();
    useEffect(() => {
        retrieveCard(id).then(data => setCard(data)).finally(() => setLoading(false))
    }, [id])
    if(!flag) {
        var isAuth = user.isAuth;
        if (user.id === card.page_path) {
            user.setIsAuth(true);
            isAuth = user.isAuth;
        } else {
            user.setIsAuth(false);
            isAuth = user.isAuth;
        }
    } else {
        user.setIsAuth(false);
        isAuth = user.isAuth;
    }
    function preview() {
        setFlag(!flag);
        user.setIsAuth(!flag);
        isAuth = user.isAuth;
    }
    if (loading) {
        return <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">Секундочку...</div>
    }
    function dnd(isAuth) {
        if(isAuth) {
            return <Fields id={id} fields={card.fields}  isAuth={true}/>
        } else {
            return <Fields id={id} fields={card.fields}  isAuth={false}/>
        }
    }
    console.log(flag, 'fl')
    console.log(user.isAuth, 'user.isAuth')
    console.log(isAuth, 'isAuth')
    return (
        card?
            <div>
                <div className="container user-info pt-1 pb-4">
                    <div className="row d-flex flex-column align-items-center">
                        <Avatar props={card} />
                        <Nickname props={card} />
                        {(isAuth||flag)&&<button className="preview" onClick={preview}>
                            {!flag?
                            <i className="fa fa-eye"></i>
                            :
                            <i className="fa fa-eye-slash"></i>}
                        </button>}
                    </div>
                </div>
                <div className="container main mt-3">
                    {card &&dnd(user.isAuth)}
                    <div className="row d-flex flex-column align-items-center">
                        {isAuth&&<Modal />}
                    </div>
                    {card.fields?.map(element =>
                        <ModalOpen key={element.id} props={element} />
                    )}
                </div>
            </div>
            :
            <NoWay />
    );
});

export default Profile;
