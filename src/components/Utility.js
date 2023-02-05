import uniqid from 'uniqid';
export const toggleTask = (id,toDoList) => {
    return toDoList.map(todo => {
      return todo.id === id ? {...todo, done: !todo.done} : {...todo}
    })
}

export const addNewTask = (description, toDoList) => {
    const id = uniqid();
    return [...toDoList, {id:id, todo:description, done:false}]
}

export const removeTasks = (toDoList) => {
    return toDoList.filter((item) => {
        return !item.done
    })
}

export const editTodo = (toDoList, id, newDesc) => {
    return toDoList.map(todo => {
        return todo.id === id ? {...todo, todo: newDesc} : {...todo}
      })
}
