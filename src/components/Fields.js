import React, {useState} from 'react';

const Fields = (user) => {

    const  [elementList, setElementList] = useState( user.props )

    const [currentElement, setCurrentElement] = useState(null)

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
    function dragHandler(e, element) {
        e.preventDefault()
        console.log(element)
        setElementList(elementList.map(el => {
            if (el.id === element.id) {
                return {...el, order: currentElement.order}
            }
            if (el.id === currentElement.id) {
                return {...el, order: element.order}
            }
            return el
        }))
        e.target.style.background = 'white'
    }
    const sortElement = (a,b) => {
        return (a.order > b.order) ? 1: -1
    }
    return (
        <div className="d-flex flex-column align-items-center">
            {elementList.sort(sortElement).map(element =>

                <div
                    onDragStart={(e) => dragStartHandler(e, element)}
                    onDragLeave={(e) => dragEndHandler(e)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dragHandler(e, element)}
                    className={element.title + ' burger'}
                    draggable={true}
                >

                    <a href={element.link}>{element.value}</a>
                    <svg viewBox="0 0 100 80" width="30" height="30">
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