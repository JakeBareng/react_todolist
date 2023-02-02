import React from "react";

const ToDo = ({todo}) => {
    return (
        <div 
            className={todo.done?"done":"not-done"}
        >
            {todo.todo}
        </div>
    )
}

export default ToDo;