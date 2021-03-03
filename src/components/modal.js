import React, {useState} from 'react';
import { makeAutoObservable, autorun, runInAction } from "mobx"
import {createFields} from "../http/fieldsApi";
import FormSocial from "./modal_form/Form_social";
import FormSeparator from "./modal_form/Form_separator";
import FormPhone from "./modal_form/Form_phone";
import FormText from "./modal_form/Form_text";
import FormMail from "./modal_form/Form_mail";
import FormMap from "./modal_form/Form_map";


const Modal = () => {

    return (
        <div className="col-10 col-sm-8 col-lg-6">
            <button className="btn btn-primary" data-toggle="modal" data-target="#Modal"><div className='krest'></div></button>
            <div className="modal fade" id="Modal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="col-10 modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Выберите тип блока</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div id="accordion">
                                <FormSocial />
                                <FormSeparator />
                                <FormPhone />
                                <FormMail />
                                <FormMap/>
                                <FormText />
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
