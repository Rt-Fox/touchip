import React, {useEffect, useState, useContext} from 'react';
import {useParams, useHistory} from 'react-router-dom'
import {retrieveCard} from "../http/fieldsApi";
import Fields from "../components/Fields";
import {NEW_FIELDS} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Modal from "../components/modal";

const Profile = observer(() => {
    const {cards, fields} = useContext(Context)
    const [card, setCard] = useState({})
    const {id} = useParams()
    useEffect(() => {
        retrieveCard(id).then(data => setCard(data))
    }, [])
    return (
        <div className="container mt-5">
            <div className="row d-flex flex-column align-items-center">
                <div className="element-photo">
                    <img src={card.photo} alt=""/>
                </div>
                <h2 className="">
                    <input
                        type="text"
                        value={card.owner}
                    />
                </h2>
                <div className="col-4">
                    <Fields key={cards.id} props={card.fields}/>
                </div>
                <Modal />
            </div>
        </div>
    );
});

export default Profile;