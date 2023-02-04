import './App.css';
import Title from './components/Title';
import React, { useState } from 'react';
import todos from './mock-todo.json';
import ToDoList from './components/ToDoList';
import AddNewToDo from './components/CreateToDo';
import RemoveFinishedToDo from './components/RemoveFinishedToDo';
import uniqid from 'uniqid';


function App() {

  const [ toDoList, setToDo ] = useState(todos);

  const toggle = (id) => {
    let item = toDoList.map(todo => {
      return todo.id === id ? {...todo, done: !todo.done} : {...todo}
    })

    setToDo(item);
  }

  const addNewToDo = (description) => {
    const id = uniqid();
    setToDo(oldList => [...oldList, {id:id, todo:description, done:false}])
  }

  const removeFinishedTask = () => {
    setToDo((prevTodos) => {
      return prevTodos.filter((item) => {
        return !item.done
      })
    }) 
  }

  return (
    <div className="App">
      <Title/>
      <AddNewToDo addNewToDo={addNewToDo} />
      <RemoveFinishedToDo removeFinishedTask={removeFinishedTask} />
      <ToDoList toDoList={toDoList} toggle={toggle}/>
    </div>
  );
}

export default App;
