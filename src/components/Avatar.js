import React, {useContext, useState,useEffect} from 'react';
import {partialUpdateCard} from "../http/fieldsApi";
import {Context} from "../index";
import {useParams} from "react-router-dom";

const Avatar = (card) => {
    const {user} = useContext(Context);
    var isAuth = user.isAuth;
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
            await partialUpdateCard(id, formData);
            window.location.reload();
        }
    }

    return (
        isAuth?
            <div>
                <form className="element-photo">
                    <img onClick={upFile} src={avatar} alt=""/>
                    <input type="file" id="uplodfile" onChange={onMainPhotoSelected}/>
                </form>
            </div>
        :
            <div className="element-photo">
                <img src={avatar} alt=""/>
            </div>
    );
};

export default Avatar;
