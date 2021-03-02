import React, {useState} from 'react';
import {createFields} from "../../http/fieldsApi";

const FormMap = () => {

    const [value, setValue] = useState('');
    const [link, setLink] = useState('');


    function handleValue(event) {
        setValue(event.target.value)
    }
    function handleLink(event) {
        setLink(event.target.value)
    }
    async function handleSubmit() {
        const response = await createFields( {"title": 'map', "value": value, "link": link})
    }
    return (
        <div className="card">
            <div className="card-header" id="headingSix">
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse"
                            data-target="#collapseSix" aria-expanded="false"
                            aria-controls="collapseSix">
                        Элемент на карте
                    </button>
                </h5>
            </div>
            <form id="collapseSix" className="collapse" aria-labelledby="headingSix"
                  data-parent="#accordion">
                <div className="card-body">
                    <div className="form-group row">
                        <label htmlFor="inputText5"
                               className="col-12 col-form-label">Заголовок</label>
                        <div className="col-12">
                            <input type="text" className="form-control" id="inputText5"
                                   placeholder="Как будет отображаться в профиле?" onChange={handleValue}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputText3"
                               className="col-12 col-form-label">Введите ссылку на элемент на карте</label>
                        <div className="col-12">
                            <input type="text" className="form-control"
                                   id="inputText3" placeholder="Введите ссылку" onChange={handleLink}/>
                        </div>
                    </div>
                    <button className="btn btn-secondary" type="button" onClick={handleSubmit}>Добавить</button>
                </div>
            </form>
        </div>
    );
};

export default FormMap;
