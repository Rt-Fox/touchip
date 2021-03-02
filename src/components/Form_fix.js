import React, {useEffect, useState} from 'react';
import {getId} from "../http/userAPI";
import {destroyFields, partialUpdateField} from "../http/fieldsApi";

const FormFix = (element) => {
    const [value, setValue] = useState(element.props.value);
    const [link, setLink] = useState(element.props.link);

    function handleValue(event) {
        setValue(event.target.value);
    }
    function handleLink(event) {
        setLink(event.target.value);
    }
    async function fixFields(id) {
        var fixForm = document.forms.fix;
        var formData = new FormData(fixForm);
        return null
    }
    async function handleSubmit() {
        const response = await partialUpdateField(element.props.id, {"value": value, "link": link})
        var r = document.getElementById("close" + element.props.id).click();
        window.location.reload();
    }
    async function delElement() {
        await destroyFields(element.props.id)
        window.location.reload();
    }
    
    return (
        <div>
            <button className="fix_button" data-toggle="modal" data-target={'#' +element.props.id}>
                <svg className="button_svg" version="1.0" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 1025.000000 1280.000000"
                     preserveAspectRatio="xMidYMid meet">
                    <metadata>
                        Created by potrace 1.15, written by Peter Selinger 2001-2017
                    </metadata>
                    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                       fill="#000000" stroke="none">
                        <path d="M8422 12784 c-30 -8 -57 -12 -62 -9 -4 3 -17 -3 -28 -13 -11 -9 -564
-735 -1229 -1612 -665 -877 -2075 -2736 -3133 -4130 -1058 -1394 -2048 -2698
-2199 -2898 l-276 -364 -746 -1866 c-520 -1301 -744 -1871 -737 -1879 7 -9 61
22 206 121 109 74 865 586 1680 1139 l1484 1006 385 508 c212 279 596 785 853
1123 256 338 1240 1634 2185 2880 945 1246 2107 2777 2582 3403 475 626 861
1142 858 1147 -3 5 -8 36 -10 69 -12 189 -156 431 -405 680 -357 357 -840 640
-1190 697 -105 17 -150 17 -218 -2z"/>
                    </g>
                </svg>
            </button>
            <form className="modal fade" id={element.props.id} tabIndex="-1" role="dialog"
                 aria-labelledby="fixModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="fixModalLabel">Modal title</h5>
                            <button type="button" id={'close' + element.props.id}  className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {element.props.value&&<input type="text" placeholder="Как будет отображаться в профиле" value={value} onChange={handleValue}/>}
                            {element.props.link&&<input type="text" placeholder="Введите ссылку" value={link} onChange={handleLink} />}
                            <button type="button" onClick={delElement}  className="btn btn-primary danger">Удалить элемент</button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={handleSubmit} className="btn btn-primary">Сохранить изменения</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormFix;