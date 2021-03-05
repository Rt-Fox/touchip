import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {partialUpdateField,retrieveCard} from "../http/fieldsApi";
import FormFix from "./Form_fix";

async function rebase(id, list, startIndex, endIndex) {
    await partialUpdateField(list[startIndex].id, {"order": endIndex});
    await retrieveCard(id);
}

const reorder = (id, list, startIndex, endIndex) =>{
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    rebase(id, list, startIndex, endIndex)
    return result;
}
class Fields extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            fields: props.fields,
            isAuth: props.isAuth
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }
    onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        const fields =  reorder(
            this.state.id,
            this.state.fields,
            result.source.index,
            result.destination.index
        )
        this.setState({
            fields: fields
        });
    }
    render() {
        return (
            <div>
                {this.state.isAuth?
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided) => (
                            <div
                                className=""
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {this.state.fields?.map((element, index) => (
                                    <Draggable key={element.id} draggableId={element.id.toString()} index={index}>
                                        {(provided) => (
                                            <div
                                                className={'fix burger row d-flex align-items-center justify-content-center'}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <FormFix props={element}/>
                                                <a href={element.link} className={element.title + " col-8 col-sm-7 col-lg-6"}>
                                                    <div>

                                                    </div>
                                                    {(element.title!=="text"&&element.title!=="line-4"&&element.title!=="line-3"&&element.title!=="line-2"&&element.title!=="line-1")?
                                                        <div className='d-flex flex-column align-content-start justify-content-start'>
                                                            <div>{element.title}</div>
                                                            <div>{element.value}</div>
                                                        </div>
                                                        :
                                                        <div className='d-flex flex-column align-content-start justify-content-start'>
                                                            <div>{element.value}</div>
                                                        </div>
                                                    }
                                                </a>
                                                <div className="col-2 col-lg-1 d-flex justify-content-end">
                                                    <svg className="burger_svg" viewBox="0 0 100 80" width="21" height="21">
                                                        <rect width="100" height="7"> </rect>
                                                        <rect y="30" width="100" height="7"> </rect>
                                                        <rect y="60" width="100" height="7"> </rect>
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                :
                this.state.fields?.map(element =>
                    <div className="row d-flex align-items-center justify-content-center">
                        <a href={element.link} className={element.title + " col-8 col-sm-7 col-lg-6"}>
                            <div>{element.value}</div>
                        </a>
                    </div>
                    )}

            </div>
        );
    }
}
export default Fields;