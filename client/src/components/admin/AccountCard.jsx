import React from 'react'

import Trash from '../../assets/svg/Trash'
import Edit from '../../assets/svg/Edit'


export default function AccountCard(props) {
  const user = props.account
  
  return (
    <div className='account-card'>
      <div className='data'>
        <p>{ user.username }</p>
        <p className='points'>{ user.userPoints } point{ user.userPoints > 1 ? 's' : '' }</p>
      </div>
      
      <div className='dates'>
        <p>Membre depuis { getDate(user.createdAt) }</p>
        <p>Dernière connexion le { getDate(user.lastConnection) }</p>
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
