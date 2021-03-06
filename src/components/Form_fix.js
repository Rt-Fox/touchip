import React from 'react';

const FormFix = (element) => {
    return (
        <div className="col-2 col-lg-1">
            <button className="fix_button" data-toggle="modal" data-target={'#' + element.props.id}>
                <div className="button_svg">
                    <i className="fa fa-pencil"></i>
                </div>
            </button>
        </div>
    );
};

export default FormFix;