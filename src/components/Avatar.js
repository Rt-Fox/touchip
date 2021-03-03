import React, {useContext, useState,useEffect} from 'react';
import {getId} from "../http/userAPI";
import {partialUpdateCard, retrieveCard} from "../http/fieldsApi";
import {Context} from "../index";
import {useParams} from "react-router-dom";

const Avatar = (card) => {

    const [avatar, setAvatar] = useState(card.props.photo);
    const {id} = useParams();

    useEffect(() => {
        setAvatar(card.props.photo)
    }, [card.props.photo])

    async function upFile() {
        var input = document.getElementById("uplodfile");
        input.click();
    }

    async function onMainPhotoSelected(e) {
        e.preventDefault();
        if (e.target.files.length) {
            var formData = new FormData();
            formData.append("photo", e.target.files[0]);
            const response = await partialUpdateCard(id, formData);
            window.location.reload();
        }
    }

    return (
        <div>
            <form className="element-photo">
                <img onClick={upFile} src={avatar} alt=""/>
                <input type="file" id="uplodfile" onChange={onMainPhotoSelected}/>
            </form>
        </div>

    );
};

export default Avatar;
