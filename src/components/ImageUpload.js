import React, {useContext, useState} from 'react';
import {getId} from "../http/userAPI";
import {partialUpdateCard} from "../http/fieldsApi";
import {Context} from "../index";

const ImageUpload = (card) => {

    const [avatar, setAvatar] = useState(card.props.photo);
    console.log(card)
    function handleSubmit(e) {
        e.preventDefault();

    }

    function handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setAvatar(reader.result)
        }

        reader.readAsDataURL(file)
    }


    let {imagePreviewUrl} = avatar;
    let imagePreview = null;
    if (imagePreviewUrl) {
        imagePreview = (<img src={imagePreviewUrl} />);
    } else {
        imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
        <div className="previewComponent">
            <form onSubmit={(e)=>handleSubmit}>
                <input className="fileInput"
                       type="file"
                       onChange={handleImageChange} />
                <button className="submitButton"
                        type="submit"
                        onClick={handleSubmit}>Upload Image</button>
            </form>
            <div className="imgPreview">
                {imagePreview}
            </div>
        </div>
    )

}
export default ImageUpload;