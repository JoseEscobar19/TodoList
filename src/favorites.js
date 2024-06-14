import './App.css';
import { useState } from 'react';

function App() {

  const[ list, setList ]= useState([
    {
      name: "guitar"
    },
    {
      name: "dietCoke"
    },
    {
        name: "Mustang"
    },
    {
        name: "Chipotle"
      },
      {
        name: "Mexico"
      },
      {
          name: "Rootbeer"
      },
    
  ]);

  
  const[ task, setTask ]= useState("");



  const handleChange = (event) =>{
    setTask(event.target.value);
  };

  const addText = (task)=> {
    setList(list=>[task,...list]);
  };

  function deleteText(){

  };




  return (
    <div className="App">
      <h1>
        Hi, 
        {task}
      </h1>
      <div className='addFav'>
        <input
          placeholder='enter fav'
          onChange={handleChange}
          type='text'
          value={task}
        />
        <button onClick={addText}>
          start
        </button>
      </div>
      <div className='FavList'>
            <h3>
              {list.map((n, index)=>
                <ol>
                  {n.name}
                </ol>
              )}
            </h3>
          </div>
      </div>
  );
}

export default App;
