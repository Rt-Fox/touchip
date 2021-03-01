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
    const arr = [0, 'nickname']
    const [name, setName] = useState(arr);
    const {id} = useParams()
    useEffect(() => {
        retrieveCard(id).then(data => setCard(data))
    }, [])


    function handleChange(event) {
        setName({value: event.target.value});
        if (card.owner !== event.target.value) {
            setElement('btn btn-secondary submit visibility')
        } else {
            setElement('btn btn-secondary submit')
        }
    }
    async function handleSubmit() {
        let id = await getId();
        console.log(id)
        console.log(name.value)
        console.log(partialUpdateCard(1, {owner: name.value}))
        partialUpdateCard(1, {owner: name.value})
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
                        value={name[name.length - 1]}
                        onChange={handleChange}
                    />
                    <button className={element} type="submit" onSubmit={handleSubmit()}>Ok</button>
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