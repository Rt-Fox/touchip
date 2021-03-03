import React, {useState, useEffect,useContext} from 'react';
import {partialUpdateField} from "../http/fieldsApi";
import {keys} from "mobx";
import FormFix from "./Form_fix";
import {Context} from "../index";

const Fields = (field) => {
    const {user} = useContext(Context);
    var isAuth = user.isAuth;

    const  [elementList, setElementList] = useState( field.props )

    const [currentElement, setCurrentElement] = useState(null)

    useEffect(() => {
        setElementList(field.props)
    }, [field.props])

    function dragStartHandler(e, element) {
        setCurrentElement(element)
    }
    function dragEndHandler(e) {
        // e.target.style.background = 'transparent'
    }
    function dragOverHandler(e) {
        e.preventDefault()
        // e.target.style.background = 'lightgray'
    }
    async function dragHandler(e, element) {
        e.preventDefault()
        const newElementList = elementList.map(el => {
            if (el.id === element.id) {
                return {...el, order: currentElement.order}
            }
            if (el.id === currentElement.id) {
                return {...el, order: element.order}
            }
            return el
        })

        newElementList.forEach((element, index) => {
            if (element.order !== elementList[index].order)
                partialUpdateField(element.id, {order: element.order})
        }, [])

        setElementList(newElementList)

        e.target.style.background = 'white'
    }
    const sortElement = (a,b) => {
        return (a.order > b.order) ? 1: -1
    }

    return (
        <div className="d-flex flex-column align-items-center row w-100">
            {elementList?.sort(sortElement).map(element =>
                isAuth&&
                <div
                    key={element.id}
                    onDragStart={(e) => dragStartHandler(e, element)}
                    onDragLeave={(e) => dragEndHandler(e)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dragHandler(e, element)}
                    className={'fix burger d-flex align-items-center justify-content-center w-100 row'}
                    draggable={true}
                >
                    <FormFix props={element}/>
                    <a href={element.link} className={element.title + " col-8 col-sm-7 col-lg-6"}>
                        <div className="">{element.value}</div>
                    </a>
                    <div className="col-2 col-lg-1 d-flex justify-content-end">
                        <svg className="burger_svg" viewBox="0 0 100 80" width="30" height="30">
                            <rect width="100" height="10"></rect>
                            <rect y="30" width="100" height="10"></rect>
                            <rect y="60" width="100" height="10"></rect>
                        </svg>
                    </div>

                </div>
                ||
                <div
                    key={element.id}
                    className={element.title + ' fix burger'}>
                    <a href={element.link}>{element.value}</a>
                </div>
            )}
        </div>
    );
};
export default Fields;
