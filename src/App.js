import './App.css';
import Title from './Title';
import React, { useState } from 'react';
import todos from './mock-todo.json';
import ToDoList from './ToDoList';

function App() {

  const [ toDoList, setToDo ] = useState(todos);

  const toggle = (id) => {
    let item = toDoList.map(todo => {
      return todo.id == id ? {...todo, done: !todo.done} : {...todo}
    })

    setToDo(item);
  }

  return (
    <div className="App">
      <Title/>
      <ToDoList toDoList={toDoList} toggle={toggle}/>
    </div>
  );
}

export default App;
