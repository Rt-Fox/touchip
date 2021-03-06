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
    componentWillReceiveProps(nextProps) {
        if(this.props != nextProps) {
            this.setState({
                isAuth: nextProps.isAuth
            });
        }
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
        console.log(this.state.isAuth,'f re');
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
                                                    {(element.title!=="text"&&element.title!=="line-4"&&element.title!=="line-3"&&element.title!=="line-2"&&element.title!=="line-1")?
                                                        <div className="d-flex align-content-center ">
                                                            <div className='d-flex icons'>
                                                                {(element.title==='email')?
                                                                    <i className={'fa fa-envelope-o'}></i>
                                                                    :
                                                                (element.title==='tiktok')?
                                                                    <img className={'tiktok-svg'} src="/tiktok.svg" alt=""/>
                                                                    :
                                                                <i className={'fa fa-'+element.title }></i>}
                                                            </div>
                                                            <div className='d-flex element-text flex-column justify-content-center'>
                                                                <div>{element.value}</div>
                                                            </div>
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
                    <div key={element.id} className="row d-flex align-items-center justify-content-center">
                        <a href={element.link} className={element.title + " col-9 col-sm-7 col-lg-6"}>
                            {(element.title!=="text"&&element.title!=="line-4"&&element.title!=="line-3"&&element.title!=="line-2"&&element.title!=="line-1")?
                                <div className="d-flex align-content-center">
                                    <div className='d-flex icons'>
                                        {(element.title==='email')?
                                            <i className={'fa fa-envelope-o'}></i>
                                            :
                                            (element.title==='tiktok')?
                                                <img className={'tiktok-svg'} src="/tiktok.svg" alt=""/>
                                                :
                                                <i className={'fa fa-'+element.title }></i>}
                                    </div>
                                    <div className='d-flex element-text flex-column justify-content-center'>
                                        <div>{element.value}</div>
                                    </div>
                                </div>
                                :
                                <div className='d-flex flex-column align-content-start justify-content-start'>
                                    <div>{element.value}</div>
                                </div>
                            }
                        </a>
                    </div>
                    )}
            </div>
        );
    }
}
export default Fields;