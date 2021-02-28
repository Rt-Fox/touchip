import React from 'react';

const Modal = () => {
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
                                            <form>
                                                <div className="btn-group btn-group-toggle d-flex flex-wrap" data-toggle="buttons">
                                                    <label className="btn btn-secondary active">
                                                        <input type="radio" name="options" id="instagram"
                                                               autoComplete="off" checked />
                                                        instagram
                                                    </label>
                                                    <label className="btn btn-secondary">
                                                        <input type="radio" name="options" id="twitter"
                                                               autoComplete="off"/>
                                                        twitter
                                                    </label>
                                                    <label className="btn btn-secondary">
                                                        <input type="radio" name="options" id="vk"
                                                               autoComplete="off"/>
                                                        vk
                                                    </label>
                                                    <label className="btn btn-secondary">
                                                        <input type="radio" name="options" id="telegram"
                                                               autoComplete="off"/>
                                                        telegram
                                                    </label>
                                                    <label className="btn btn-secondary">
                                                        <input type="radio" name="options" id="tiktok"
                                                               autoComplete="off"/>
                                                        tiktok
                                                    </label>
                                                    <label className="btn btn-secondary">
                                                        <input type="radio" name="options" id="facebook"
                                                               autoComplete="off"/>
                                                        facebook
                                                    </label>
                                                    <label className="btn btn-secondary">
                                                        <input type="radio" name="options" id="youtube"
                                                               autoComplete="off"/>
                                                        youtube
                                                    </label>
                                                    <label className="btn btn-secondary">
                                                        <input type="radio" name="options" id="email"
                                                               autoComplete="off"/>
                                                        почта
                                                    </label>

                                                    <label className="btn btn-secondary">
                                                        <input type="radio" name="options" id="map"
                                                               autoComplete="off"/>
                                                        Элемент на карте
                                                    </label>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="inputText2"
                                                           className="col-12 col-form-label">Заголовок</label>
                                                    <div className="col-12">
                                                        <input type="text" className="form-control" id="inputText2"
                                                               placeholder="Как будет отображаться в профиле?" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label htmlFor="inputText3"
                                                           className="col-12 col-form-label">Ссылка</label>
                                                    <div className="col-12">
                                                        <input type="text" className="form-control"
                                                               id="inputText3" placeholder="Введите никнейм в соцсети, email или ссылку"/>
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
                                                                       name="gridRadios" id="line-1"
                                                                       value="line-1" checked/>
                                                                <label for="line-1" className="line-1"></label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                       name="gridRadios" id="line-2"
                                                                       value="line-2" checked/>
                                                                <label for="line-2" className="line-2"></label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                       name="gridRadios" id="line-3"
                                                                       value="line-3" checked/>
                                                                <label for="line-3" className="line-3"></label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio"
                                                                       name="gridRadios" id="line-4"
                                                                       value="line-4" checked/>
                                                                <label for="line-4" className="line-4"></label>
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
                                                           placeholder="Как будет отображаться в профиле?" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="inputText3"
                                                       className="col-12 col-form-label">Номер телефона</label>
                                                <div className="col-12">
                                                    <input type="text" className="form-control"
                                                           id="inputText3" placeholder="Введите номер телефона"/>
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
                                                           id="inputText3" placeholder="Он будет отображаться у вас на странице"/>
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