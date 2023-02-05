import React from "react";
import { useState } from "react";

const ToDo = ({todo, toggle}) => {
    const [showEdit, setIsShown] = useState(false);
    const [showEditForm, setEditForm] = useState(true);

    const handleEvent = () => {
        toggle(todo.id)
    }

    const conditionalRender = () => {
        if (showEdit) {
            return (
                <div 
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                >
                    <div
                    className={todo.done?"done clickable task":"not-done clickable task"} 
                    onClick={handleEvent}
                    >
                        <p>{todo.todo}</p>
                    </div>
                    <button>edit</button>
                </div>
            )
        }
        return (
            <div 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            >
                <div
                className={todo.done?"done clickable task":"not-done clickable task"} 
                >
                    <p>{todo.todo}</p>
                </div>
            </div>
        )

    }

    return conditionalRender();
}

export default ToDo;