import React, {useState, useEffect} from 'react';
import {partialUpdateField} from "../http/fieldsApi";
import {keys} from "mobx";
import FormFix from "./Form_fix";

const Fields = (user) => {

    const  [elementList, setElementList] = useState( user.props )

    const [currentElement, setCurrentElement] = useState(null)

    useEffect(() => {
        setElementList(user.props)
    }, [user.props])

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
        <div className="d-flex flex-column align-items-center">
            {elementList?.sort(sortElement).map(element =>
                <div
                    key={element.id}
                    onDragStart={(e) => dragStartHandler(e, element)}
                    onDragLeave={(e) => dragEndHandler(e)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dragHandler(e, element)}
                    className={element.title + ' fix burger'}
                    draggable={true}
                >
                    <FormFix props={element}/>

                    <a href={element.link}>{element.id + ': ' + element.value}</a>
                    <svg className="burger_svg" viewBox="0 0 100 80" width="30" height="30">
                        <rect width="100" height="10"></rect>
                        <rect y="30" width="100" height="10"></rect>
                        <rect y="60" width="100" height="10"></rect>
                    </svg>
                </div>
            )}
        </div>
    );
};
export default Fields;
