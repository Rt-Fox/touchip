import React, {useState, useEffect,useContext} from 'react';
import ReactDOM from 'react-dom';
import {partialUpdateField} from "../http/fieldsApi";
import {keys} from "mobx";
import FormFix from "./Form_fix";
import {Context} from "../index";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import Fields from "./Fields";


const Dnd = (field) => {
    const {user} = useContext(Context);
    var isAuth = user.isAuth;
    const  [elementList, setElementList] = useState(field.props)

    const [currentElement, setCurrentElement] = useState(null)

    useEffect(() => {
        setElementList(field.props)
    }, [field.props])

    function dragStartHandler(e, element) {
        setCurrentElement(element)
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
    }
    function onDragEnd(result) {

    }
    return (
        <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragEnd} onDragUpdate={onDragEnd}>
            {
                <div className="row d-flex flex-column align-items-center">
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef} {...provided.droppableProps}
                                className="d-flex flex-column align-items-center row w-100"
                            >
                                {elementList?.map(element =>
                                    <Draggable key={element.id} draggableId={"droppable"} index={element.id}>
                                        {provided => (
                                            <div
                                                className={'fix burger d-flex align-items-center justify-content-center w-100 row'}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
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
                                        )}
                                    </Draggable>
                                )}
                            </div>
                    )}
                    </Droppable>
                </div>
            }
        </DragDropContext>
    );

}

export default Dnd;