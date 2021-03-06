import React, {useEffect, useState} from 'react';
import {destroyFields, partialUpdateField} from "../http/fieldsApi";

const ModalOpen = (element) => {
    const [title] = useState(element.props.title);
    const [value, setValue] = useState(element.props.value);
    const [link, setLink] = useState(element.props.link);

    useEffect(() => {
        setLink(element.props.link)
    }, [element.props.link])
    useEffect(() => {
        setValue(element.props.value)
    }, [element.props.value])
    var flag;
    if (link.startsWith('tel:')) {
        flag = 'tel:';
    } else if(link.startsWith('mailto:')) {
        flag = 'mailto:';
    }
    function handleValue(event) {
        setValue(event.target.value);
    }
    function handleLink(event) {
        setLink(event.target.value);
    }
    async function handleSubmit() {
        if(title==='phone') {
            await partialUpdateField(element.props.id, {"value": value, "link": 'tel:'+link.replace(flag,'')});
        }else if(title==='email') {
            await partialUpdateField(element.props.id, {"value": value, "link": 'mailto:'+link.replace(flag,'')});
        } else {
            await partialUpdateField(element.props.id, {"value": value, "link": link});
        }
        window.location.reload();

    }
    async function delElement() {
        await destroyFields(element.props.id)
        window.location.reload();
    }
    return (
        <form className="modal fade" id={element.props.id} tabIndex="-1" role="dialog"
              aria-labelledby="fixModalLabel" aria-hidden="true">
            <div className="col-12 d-flex align-content-center justify-content-center modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="fixModalLabel">Редактирование</h5>
                        <button type="button" id={'close' + element.props.id} className="close" data-dismiss="modal"
                                aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {element.props.value &&
                        <input type="text" placeholder="Как будет отображаться в профиле" value={value}
                               onChange={handleValue}/>}
                        {element.props.link &&
                        <input type="text" placeholder="Введите ссылку" value={link.replace(flag,'')} onChange={handleLink}/>}
                        <button type="button" onClick={delElement} className="btn btn-primary danger">Удалить элемент
                        </button>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={handleSubmit} className="btn btn-primary">Сохранить изменения
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ModalOpen;