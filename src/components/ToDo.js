import React from "react";

const ToDo = ({todo, toggle}) => {
    const handleEvent = () => {
        toggle(todo.id)
    }
    return (
        <div className={todo.done?"done":"not-done"} onClick={handleEvent}>
            {todo.todo}
        </div>
    )
}

export default ToDo;