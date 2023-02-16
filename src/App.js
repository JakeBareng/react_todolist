import './index.css';
import Title from './components/Title';
import React, { useEffect, useState } from 'react';
import ToDoList from './components/ToDoList';
import AddNewToDo from './components/CreateToDo';
import RemoveFinishedToDo from './components/RemoveFinishedToDo';
import { addNewTask, removeTasks, toggleTask, editTodo } from "./components/Utility";

function App() {
  let jsonData = localStorage.getItem('todos');
  if (jsonData === null) {
    localStorage.setItem('todos',JSON.stringify([]))
    jsonData = localStorage.getItem('todos');
  }
  let data = JSON.parse(jsonData);
  
  const [ toDoList, setToDo ] = useState(data);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(toDoList));
  },[toDoList])

  const addNewToDo = (desc) => {
    setToDo(addNewTask(desc, toDoList))
  }

  const removeFinishedTask = () => {
    setToDo(removeTasks(toDoList))
  }

  const toggle = (id) => {
    setToDo(toggleTask(id,toDoList))
  }

  const editTask = (id,newDesc) => {
    setToDo(editTodo(toDoList,id,newDesc));
  }

  return (
    <div className="App">
      <Title/>
      <div id='interface'>
        <div id='interface-buttons'>
          <RemoveFinishedToDo removeFinishedTask={removeFinishedTask} />
          <AddNewToDo addNewToDo={addNewToDo} />
        </div>
        <ToDoList toDoList={toDoList} toggle={toggle} editTask={editTask}/>
      </div>
    </div>
  );
}

export default App;
