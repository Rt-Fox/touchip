import React, {useState} from 'react';
import {createFields} from "../../http/fieldsApi";

const FormSeparator = () => {

    const [title, setTitle] = useState('');

    function handleRadio(event) {
        setTitle(event.target.value)
    }
    async function handleSubmit() {
        const response = await createFields( {"title": title, "value": ' ', "link": ''})
    }

    return (
        <div className="card">
            <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed" data-toggle="collapse"
                            data-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                        Разделитель
                    </button>
                </h5>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                 data-parent="#accordion">
                <div className="card-body">
                    <form>
                        <fieldset className="form-group">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio"
                                               name="gridRadios" id="line1"
                                               value="line-1" onClick={handleRadio}/>
                                        <label htmlFor="line1" className="line-1"> </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio"
                                               name="gridRadios" id="line2"
                                               value="line-2" onClick={handleRadio}/>
                                        <label htmlFor="line2" className="line-2"> </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio"
                                               name="gridRadios" id="line3"
                                               value="line-3" onClick={handleRadio}/>
                                        <label htmlFor="line3" className="line-3"> </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio"
                                               name="gridRadios" id="line4"
                                               value="line-4" onClick={handleRadio}/>
                                        <label htmlFor="line4" className="line-4"> </label>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-secondary" type="button" onClick={handleSubmit}>Добавить</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormSeparator;
