import React from 'react'

import Trash from '../../assets/svg/Trash'
import Edit from '../../assets/svg/Edit'


export default function MessageCard(props) {
  const msg = props.message
  
  return (
    <div className='message-card'>
      <div className='content'>
        <p>{ msg.body }</p>
      </div>
      
      <div className='data'>
        
      </div>
      
      <div className='btns'>
        <Edit />
        <Trash />
      </div>
    </div>
  )
}

function getDate(d) {
  // Return a good formated date
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
  const date = new Date(d)
  const month = months[date.getMonth()]
  
  return `${date.getDate()} ${month} ${date.getFullYear()}`
}
