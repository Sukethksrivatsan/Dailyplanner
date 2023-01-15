import React from "react";
import { useState } from "react";
import './App.css'
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id!==id))
  };
  
  const headingstyling={
  color:'red',
  backgroundColor:'black',
  };
  const[tasks,setTasks]=useState([
    {
        id:1,
        text:'Doctors appointment',
        day:'5th january 2023',
        reminder:true,
    },
    {
        id:12,
        text:'Movie Date',
        day:'7th january 2023',
        reminder:true,
    },
    {
        id:3,
        text:'Shopping',
        day:'15th january 2023',
        reminder:true,
    }]);
  const togglereminder=(id)=>{
    setTasks(tasks.map((task)=>
    task.id===id?{...task,reminder:!task.reminder}:task))
    };
  return (
  <div className="lifeofsuketh">
  <h1>Primary goals in life as a 22 year old</h1>
  <ul className="lifelessonslist">
    <li>
      learn coding, sustainable future
    </li>
    <li>be open to things and never rigid
    </li>
    <li>
      always keep learning and stay inquisitive,keep quizzing 
    </li>
    <li>
      never give up, never ever give up
    </li>
    <li>
      try freelancing
    </li>
  </ul>
  <h2 style={headingstyling}><Header title={"qqcprez"}/></h2>
    <p className='container'>
    {tasks.length>0 ?<Tasks tasks={tasks} onDelete={deleteTask}/>:'No task '}
    </p>
  </div>
  );
//css styling which can be done in javascript itself
}
export default App;
