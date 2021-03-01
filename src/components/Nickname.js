import React, {useEffect, useState} from 'react';
import {getId} from "../http/userAPI";
import {partialUpdateCard} from "../http/fieldsApi";
import {useParams} from "react-router-dom";

const Nickname = (card) => {
    const [element, setElement] = useState('btn btn-secondary submit')
    const [name, setName] = useState(card.props.displayed_name);
    const {id} = useParams()

    useEffect(() => {
        setName(card.props.displayed_name)
    }, [card.props.displayed_name])

    function handleChange(event) {
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
        <h2 className="Title">
            <input
                key={name}
                type="text"
                value={name}
                onChange={handleChange}
            />
            <button className={element} type="submit" onClick={handleSubmit}>Ok</button>
        </h2>
    );
};

export default Nickname;
