import './index.css';
import Title from './components/Title';
import React, { useEffect, useState } from 'react';
import ToDoList from './components/ToDoList';
import AddNewToDo from './components/CreateToDo';
import RemoveFinishedToDo from './components/RemoveFinishedToDo';
import uniqid from 'uniqid';


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
      <RemoveFinishedToDo removeFinishedTask={removeFinishedTask} />
      <AddNewToDo addNewToDo={addNewToDo} />
      <ToDoList toDoList={toDoList} toggle={toggle}/>
    </div>
  );
}

export default App;
