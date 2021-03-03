import React, {useEffect, useState, useContext} from 'react';
import {getId} from "../http/userAPI";
import {partialUpdateCard} from "../http/fieldsApi";
import {useParams} from "react-router-dom";
import {Context} from "../index";

const Nickname = (card) => {
    const {user} = useContext(Context);
    var isAuth = user.isAuth;

    const [element, setElement] = useState('btn btn-secondary submit')
    const [name, setName] = useState(card.props.displayed_name);
    const {id} = useParams()

    useEffect(() => {
        setName(card.props.displayed_name)
    }, [card.props.displayed_name])

    function handleChange(event) {
        event.preventDefault();
        setName(event.target.value);
        if (card.props.displayed_name !== event.target.value) {
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
        isAuth?
        <h2 className="Title">
            <input
                key={id}
                type="text"
                value={name || ''}
                onChange={handleChange}
            />
            <button className={element} type="submit" onClick={handleSubmit}>Ok</button>
        </h2>
        :
        <h2 className="Title">{name || ''}</h2>
    );
};

export default Nickname;
