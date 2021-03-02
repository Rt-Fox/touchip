import React, {useState} from 'react';
import {createFields} from "../../http/fieldsApi";

const FormText = () => {
    const [value, setValue] = useState('');


    function handleValue(event) {
        setValue(event.target.value)
    }
    async function handleSubmit() {
        const response = await createFields( {"title": 'text', "value": value, "link": null})
    }

    return (
        <div className="card">
            <div className="card-header" id="heading4">
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse"
                            data-target="#collapse4" aria-expanded="false"
                            aria-controls="collapse4">
                        Текстовое поле
                    </button>
                </h5>
            </div>
            <div id="collapse4" className="collapse" aria-labelledby="heading4"
                 data-parent="#accordion">
                <div className="card-body">
                    <form>
                        <label htmlFor="inputText3"
                               className="col-12 col-form-label">Введите текст</label>
                        <div className="col-12">
                            <input type="text" className="form-control"
                                   id="inputText3" placeholder="Он будет отображаться у вас на странице" onChange={handleValue}/>
                        </div>
                        <button className="btn btn-secondary" type="button" onClick={handleSubmit}>Добавить</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormText;
