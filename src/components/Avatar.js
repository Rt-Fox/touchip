import React, {useContext, useState} from 'react';
import {getId} from "../http/userAPI";
import {partialUpdateCard} from "../http/fieldsApi";
import {Context} from "../index";

const Avatar = (card) => {

    const [avatar, setAvatar] = useState(card.props.photo);

    const {user} = useContext(Context)
    var isAuth = user.isAuth;

    async function upFile() {
        var input = document.getElementById("uplodfile");

        var response = input.click();
        console.log(input.value)
        if (input.file) {
            submitFile()
        }

    }
    async function submitFile() {
        var input = document.getElementById("uplodfile");
        let id = await getId();
        setAvatar(input.value)
        await partialUpdateCard(id, {"photo": avatar});

    }
    function handleImageChange(e){
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

    }

    return (
        <div>
            {
                isAuth?
                <form className="element-photo">
                    <img onClick={upFile} src={avatar} alt=""/>
                    <input type="file" id="uplodfile" onClick={(e)=>handleImageChange(e)}/>
                </form>: <div className="element-photo">
                            <img src={avatar} alt=""/>
                        </div>
            }
        </div>

    );
};

export default Avatar;
