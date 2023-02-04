import React from "react";

const RemoveFinishedToDo = ({removeFinishedTask}) => {
    return (
        <button onClick={removeFinishedTask}>Remove Finished Tasks</button>
    ) 
}

export default RemoveFinishedToDo;