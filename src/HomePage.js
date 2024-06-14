import { useState } from 'react';
import React from 'react';
// import './App.css';
import './HomePage.css';

const HomePage = () =>{

    const [list, setList ] =useState([
  {
    id:0,
    taskName: "guitar"
  },
  {
    id:1,
    taskName: "dietCoke"
  },
  {
    id:2,
      taskName: "Mustang"
  },
  {
    id:3,
    taskName: "Chipotle"
  },
  {
    id:4,
    taskName: "Mexico"
  },
  {
    id:5,
    taskName: "Rootbeer"
  },
]);
const [ task, setTask ] =useState("");

const handleChange = (event) => {
setTask(event.target.value)
}

const addText = ()=> {
  const item = 
  {
    id: list.length === 0 ? 1 : list[list.length-1].id +1,

    taskName: task,

    comp: false 
  }
setList(list=>[...list,item])
}

const deleteText = (id) => {
  const newList = (list.filter((listItem) => {
    if(listItem.id === id){
      return false
    }else{
      return true
    }
  }))
  
  setList(newList);
}

const completeTask = (id) => {
  setList(
    list.map((item) => {
      if(item.id === id){
        return {...item, comp: true};
      }
      else{
        return item;
      }
  }
  ))
}

return(
  <div className='todoList'>
    <h1>
      Hello, now adding: {task}
    </h1>
    <div className='addFav'>
      <input
        placeholder='add Fav'
        onChange={handleChange}

      />
      <button
        onClick={addText}
      
      >Add</button>
    </div>
    <div className='favList'>
      <span>
        {list.map(task=> 
          <li style={{backgroundColor: task.comp ? "beige" : "white"}} className='ui'>
            {task.id}. added {task.taskName} 
            <button onClick={()=>completeTask(task.id)}>COMP</button>
            <button onClick={()=> deleteText(task.id)} >DEL</button>
          </li>)}
      </span>
    </div>
  </div>

);


};

export default HomePage;