import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {partialUpdateCard} from "../http/fieldsApi";
import FormFix from "./Form_fix";

function reorder(id, list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    rebase(id, result);
    return result;
}
async function rebase(id, body) {
    await partialUpdateCard(id,{'fields': body})
}
class Fields extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            fields: props.fields,
            isAuth: props.isAuth
        };
        console.log(props.isAuth)
        this.onDragEnd = this.onDragEnd.bind(this);
    }
    onDragEnd(result) {
        if (!result.destination) {
            return;
        }

        const fields = reorder(
            this.state.id,
            this.state.fields,
            result.source.index,
            result.destination.index
        );

        this.setState({
            fields
        });
    }

    render() {
        return (
            <div>
                {this.state.isAuth?
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                className=""
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {this.state.fields?.map((element, index) => (
                                    <Draggable key={index} draggableId={index.toString()} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                className={'fix burger row d-flex align-items-center justify-content-center'}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <FormFix props={element}/>
                                                <a href={element.link} className={element.title + " col-8 col-sm-7 col-lg-6"}>
                                                    <div>{element.value}</div>
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