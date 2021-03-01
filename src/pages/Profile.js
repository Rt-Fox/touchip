import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {partialUpdateCard, retrieveCard} from "../http/fieldsApi";
import Fields from "../components/Fields";
import {observer} from "mobx-react-lite";
import Modal from "../components/modal";
import {getId} from "../http/userAPI";

const Profile = observer(() => {
    const [card, setCard] = useState({})
    const [element, setElement] = useState('btn btn-secondary submit')
    const [name, setName] = useState(card.displayed_name);
    const {id} = useParams()

    useEffect(() => {
        retrieveCard(id).then(data => setCard(data))
    }, [id])

    useEffect(() => {
        setName(card.displayed_name)
    }, [card.displayed_name])


    function handleChange(event) {
        setName(event.target.value);
        if (card.displayed_name !== event.target.value) {
            setElement('btn btn-secondary submit visibility')
        } else {
            setElement('btn btn-secondary submit')
        }
    }

    async function handleSubmit() {
        let id = await getId();
        await partialUpdateCard(id, {displayed_name: name})
        setElement('btn btn-secondary submit')
    }


    return (
        <div className="container mt-5">
            <div className="row d-flex flex-column align-items-center">
                <div className="element-photo">
                    <img src={card.photo} alt=""/>
                </div>
                <h2 className="Title">
                    <input
                        type="text"
                        value={name}
                        onChange={handleChange}
                    />
                    <button className={element} type="submit" onClick={handleSubmit}>Ok</button>
                </h2>
                <div className="col-4">
                    <Fields key={card.id} props={card.fields}/>
                </div>
                <Modal />
            </div>
        </div>
    );
});

export default Profile;