import React, {useState} from 'react';
import {getId} from "../http/userAPI";
import {partialUpdateCard} from "../http/fieldsApi";

const Avatar = (card) => {
    const [avatar, setAvatar] = useState(card.props.photo);

    async function upFile() {
        var input = document.getElementById("uplodfile");
        input.click();

        console.log(card.props.photo)
        console.log(input.value)
        console.log(input.value!==card.props.photo)

        if (input.value !== '' && input.value !== card.props.photo ) {
            console.log(input.value)
            let id = await getId();
            await partialUpdateCard(id, {photo: avatar});
            setAvatar(input.value)
            console.log(partialUpdateCard(id, {photo: input.value}))
        }
    }

    return (
        <div className="element-photo">
            <img onClick={upFile} src={avatar} alt=""/>
            <input type="file" id="uplodfile" />
        </div>
    );
};

export default Avatar;
