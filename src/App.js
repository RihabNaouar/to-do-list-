import React from 'react';
import { useState } from 'react';
import "./App.css"
import todoImage from './Todo.jpg'
import TaskForm from "./components/TaskForm.js"
 function App() { 
 return (
 <div className="App">
  <div className='container'>
    <div className='Todolist'>
  <h2>To-Do-List <img src={todoImage} alt=''/></h2>

  <TaskForm />
    </div>
 </div>
 </div>
 ); 
}
export default App;