import React, {useState} from 'react';
import {createFields} from "../../http/fieldsApi";


const FormSocial = () => {

    const [title, setTitle] = useState('instagram');
    const [value, setValue] = useState('');
    const [link, setLink] = useState('');

    function handleRadio(event) {
        setTitle(event.target.children[0].id)
    }
    function handleValue(event) {
        setValue(event.target.value)
    }
    function handleLink(event) {
        setLink(event.target.value)
    }
    async function handleSubmit() {
        await createFields( {"title": title, "value": value, "link": link});
        window.location.reload();
    }
    return (
        <div className="card">
            <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse"
                            data-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                        Соц. сети
                    </button>
                </h5>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                 data-parent="#accordion">
                <div className="card-body">
                    <form>
                        <div className="btn-group btn-group-toggle d-flex flex-wrap" data-toggle="buttons">
                            <label className="btn btn-secondary active" onClick={handleRadio}>
                                <input type="radio" name="options" id="instagram"/>
                                instagram
                            </label>
                            <label className="btn btn-secondary" onClick={handleRadio}>
                                <input type="radio" name="options" id="twitter"/>
                                twitter
                            </label>
                            <label className="btn btn-secondary" onClick={handleRadio}>
                                <input type="radio" name="options" id="telegram" />
                                telegram
                            </label>
                            <label className="btn btn-secondary" onClick={handleRadio}>
                                <input type="radio" name="options" id="tiktok" />
                                tiktok
                            </label>
                            <label className="btn btn-secondary" onClick={handleRadio}>
                                <input type="radio" name="options" id="vk" />
                                vk
                            </label>
                            <label className="btn btn-secondary" onClick={handleRadio}>
                                <input type="radio" name="options" id="facebook" />
                                facebook
                            </label>
                            <label className="btn btn-secondary" onClick={handleRadio}>
                                <input type="radio" name="options" id="youtube" />
                                youtube
                            </label>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputText2"
                                   className="col-12 col-form-label">Заголовок</label>
                            <div className="col-12">
                                <input type="text" className="form-control" id="inputText2" onChange={handleValue}
                                       placeholder="Как будет отображаться в профиле?" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputText3"
                                   className="col-12 col-form-label">Ссылка</label>
                            <div className="col-12">
                                <input type="text" className="form-control" onChange={handleLink}
                                       id="inputText3" placeholder="Введите никнейм в соцсети или ссылку" />
                            </div>
                        </div>
                        <button className="btn btn-secondary" type="button" onClick={handleSubmit}>Добавить</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default FormSocial;
