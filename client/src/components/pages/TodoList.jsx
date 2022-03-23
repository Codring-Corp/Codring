import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import '../../styles/todo.scss'

import add from "../../assets/images/add.png"
import close from "../../assets/images/close.png"



export default function TodoList(props) {
    const navigate = useNavigate()
    const isAuth = props.isAuth

    const [addTask, setAddTask] = useState([])
    const [inputValue, setInputValue] = useState("")

    console.log(addTask)
    const handleInputChange = event=> {
      setInputValue(event.target.value)

    }

    const deleteTask = (index, tasks)=> {
      setAddTask(addTask => addTask.filter((task, i)=> i !== index))
    }

    const changeAddTask = event=> {
      setAddTask(addTask => [...addTask, inputValue])
      setInputValue("")

    }
    
    useEffect(() => {
        // If user isn't auth, redirect him to the login page
        if (!isAuth) navigate('/login')
    })
    
  return (
    <div className="component todo">
      <div className="container">
        <div className="my_task task_list">
          <div className="todoListTitleContainer">
            <div className="todoListTitle">
                <div className="progressTaskCircleContainer">
                    <svg>
                        <circle className="progressCircle1" cx="10" cy="10" r="9"></circle>
                        <circle className="progressCircle2" cx="10" cy="10" r="9"></circle>
                    </svg>
                </div>
              <p>Mes tâches</p>
            </div>
          </div>
          <div className="addTaskContainer">
            <input type="text" placeholder="Nouvelle tâche"
            value={inputValue}
            onChange={event=>handleInputChange(event)}
            />
            <img src={add} alt="Ajouter la tâche" onClick={changeAddTask}></img>
          </div>
          <div className='messages-list'>
            {  addTask.map((task, index) => {
              return( <div key={index} className="task_container"> 
                        <div className="task">
                          <p >{task}</p>
                          <img src={close} onClick={()=>deleteTask(index, addTask)}></img>
                        </div>
                      </div>)
            })}
          </div>
        </div>
        <div className="basic_task task_list">
          <div className="todoListTitleContainer">
            <div className="todoListTitle">
              <div className="progressTaskCircleContainer">
                  <svg>
                      <circle className="progressCircle1" cx="10" cy="10" r="9"></circle>
                      <circle className="progressCircle2" cx="10" cy="10" r="9"></circle>
                  </svg>
              </div>
              <p>Les tâches du bon développeur agile</p>
            </div>
          </div>

        </div>        
      </div>
    </div>
  );
}