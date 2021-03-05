import React, {useState} from 'react';
import {createFields} from "../../http/fieldsApi";

const FormPhone = () => {

    const [value, setValue] = useState('');
    const [link, setLink] = useState('');


    function handleValue(event) {
        setValue(event.target.value)
    }
    function handleLink(event) {
        setLink('tel:' + event.target.value)
    }
    async function handleSubmit() {
        await createFields( {"title": 'phone', "value": value, "link": link});
        window.location.reload();
    }

    return (
        <div className="card">
            <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse"
                            data-target="#collapseThree" aria-expanded="false"
                            aria-controls="collapseThree">
                        Телефон
                    </button>
                </h5>
            </div>
            <form id="collapseThree" className="collapse" aria-labelledby="headingThree"
                  data-parent="#accordion">
                <div className="card-body">
                    <div className="form-group row">
                        <label htmlFor="inputText2"
                               className="col-12 col-form-label">Заголовок</label>
                        <div className="col-12">
                            <input type="text" className="form-control" id="inputText2"
                                   placeholder="Как будет отображаться в профиле?" onChange={handleValue}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputText3"
                               className="col-12 col-form-label">Номер телефона</label>
                        <div className="col-12">
                            <input type="text" className="form-control"
                                   id="inputText3" placeholder="Введите номер телефона" onChange={handleLink}/>
                        </div>
                    </div>
                    <button className="btn btn-secondary" type="button" onClick={handleSubmit}>Добавить</button>
                </div>
            </form>
        </div>
    );
};

export default FormPhone;
