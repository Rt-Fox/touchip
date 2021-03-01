import React, {useState} from 'react';
import { makeAutoObservable, autorun, runInAction } from "mobx"
import {createFields} from "../http/fieldsApi";


const Modal = () => {

    const click = async (e) => {
        e.preventDefault();
        const formData = {};
        try {
            for (const field in this.refs) {
                formData[field] = this.refs[field].value;
            }
            await createFields(formData);
        } catch (e) {
            console.error(e)
            alert(e.response?.data?.message)
        }

    }
    function  handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className="col-4">
            <button className="btn btn-primary" data-toggle="modal" data-target="#Modal"><div className='krest'></div></button>
            <div className="modal fade" id="Modal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Выберите тип блока</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div id="accordion">
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
                                            <form onSubmit={handleSubmit}>
                                                <div className="btn-group btn-group-toggle d-flex flex-wrap" data-toggle="buttons">
                                                    <label className="btn btn-secondary active">
                                                        <input type="radio" name="options" id="instagram"
                                                               autoComplete="off" checked readOnly />
                                                        instagram
                                                    </label>
                                                    <label className="btn btn-secondary">
                                                        <input type="radio" name="options" id="twitter"
                                                               autoComplete="off" readOnly/>
                                                        twitter
                                                    </label>
                                                    <label className="btn btn-secondary">
                                                        <input type="radio" name="options" id="vk"
                                                               autoComplete="off" readOnly/>
                                                        vk
                                                    </label>
                                                    <label className="btn btn-secondary">
                                                        <input type="radio" name="options" id="telegram"
                                                               autoComplete="off" readOnly/>
                                                        telegram
                                                    </label>
                                                    <label className="btn btn-secondary">
                                                        <input type="radio" name="options" id="tiktok"
                                                               autoComplete="off" readOnly/>
                                                        tiktok
                                                    </label>
                                                    <label className="btn btn-secondary">
                                                        <input type="radio" name="options" id="facebook"
                                                               autoComplete="off" readOnly/>
                                                        facebook
                                                    </label>
                                                    <label className="btn btn-secondary">
                                                        <input type="radio" name="options" id="youtube"
                                                               autoComplete="off" readOnly/>
                                                        youtube
                                                    </label>
                                                    <label className="btn btn-secondary">
                                                        <input type="radio" name="options" id="email"
                                                               autoComplete="off" readOnly/>
                                                        почта
                                                    </label>

                                                    <label className="btn btn-secondary">
                                                        <input type="radio" name="options" id="map"
                                                             value="map"  autoComplete="off" readOnly/>
                                                        Элемент на карте
                                                    </label>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="inputText2"
                                                           className="col-12 col-form-label">Заголовок</label>
                                                    <div className="col-12">
                                                        <input type="text" className="form-control" id="inputText2"
                                                               placeholder="Как будет отображаться в профиле?" readOnly />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="inputText3"
                                                           className="col-12 col-form-label">Ссылка</label>
                                                    <div className="col-12">
                                                        <input type="text" className="form-control"
                                                               id="inputText3" placeholder="Введите никнейм в соцсети, email или ссылку" readOnly/>
                                                    </div>
                                                </div>
                                                <button className="btn btn-secondary" type="submit">Добавить</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
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
                                                                       value="line-1" readOnly/>
                                                                <label htmlFor="line1" className="line-1"> </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                       name="gridRadios" id="line2"
                                                                       value="line-2" readOnly/>
                                                                <label htmlFor="line2" className="line-2"> </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                       name="gridRadios" id="line3"
                                                                       value="line-3" readOnly/>
                                                                <label htmlFor="line3" className="line-3"> </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                       name="gridRadios" id="line4"
                                                                       value="line-4" readOnly/>
                                                                <label htmlFor="line4" className="line-4"> </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="btn btn-secondary" type="submit">Добавить</button>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
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
                                                           placeholder="Как будет отображаться в профиле?" readOnly/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="inputText3"
                                                       className="col-12 col-form-label">Номер телефона</label>
                                                <div className="col-12">
                                                    <input type="text" className="form-control"
                                                           id="inputText3" placeholder="Введите номер телефона" readOnly/>
                                                </div>
                                            </div>
                                            <button className="btn btn-secondary" type="submit">Добавить</button>
                                        </div>
                                    </form>
                                </div>
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
                                                           id="inputText3" placeholder="Он будет отображаться у вас на странице" readOnly/>
                                                </div>
                                                <button className="btn btn-secondary" type="submit">Добавить</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;