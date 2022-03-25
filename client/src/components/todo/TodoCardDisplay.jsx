import React from 'react'

import uncheck from "../../assets/images/uncheck.png"
import check from "../../assets/images/check.png"

export default function TodoCardDisplay(props) {
  const todo = props.todo

  const [imageCheck, setImageCheck] = React.useState(false)
  const [style, setStyle] = React.useState(false)
  

  const toggleClass = ()=>{
    setStyle(!style)
  }
  
  return (
    <div className='todoCard-container'>
        <div className='todo-card'onClick={() => setImageCheck(prevMode => !prevMode)}>
          <img src={imageCheck ? check : uncheck}  alt="" />
          <p className={style ? 'cont2': null} onClick={toggleClass}>{ todo.task }</p>
        </div>
    </div>
  )
}