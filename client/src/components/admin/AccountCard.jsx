import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Trash from '../../assets/svg/Trash'
import Edit from '../../assets/svg/Edit'

import Shield from '../../assets/svg/Shield'
import Announcement from '../../assets/svg/Announcement'
import User from '../../assets/svg/User'

import { request } from '../../request'


export default function AccountCard(props) {
  const account = props.account
  const accountId = props.account._id
  
  const [editMode, setEditMode] = useState(false)
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const deleteAccount = async id => {
    // Delete account by id
    setIsDeleting(true)
    await request.remove(`/accounts/${id}`)
    setIsDeleting(false)
    // Reload accounts list
    props.reloadList()
  }
  
  return (
    <div className='account-card'>
      <Link className='profile-link' to={`/profile/${account.username}`} target="_blank" rel="noopener noreferrer">
        <div className='data'>
          <p className='username'>{ account.username }</p>
          <p className='email'>{ account.email }</p>
          { getAccountRole(account.role) }
        </div>
        
        <div className='dates-and-points'>
          <p>Membre depuis le { getDate(account.createdAt) }</p>
          <p>Dernière connexion le { getDate(account.lastConnection) }</p>
          <p>{ account.userPoints } point{ account.userPoints > 1 ? 's' : '' }</p>
        </div>
      </Link>
      
      <div className='btns'>
        <button onClick={() => setEditMode(true)}>
          <Edit />
        </button>
        <button onClick={() => setShowDeleteConfirmation(true)}>
          <Trash />
        </button>
        
        { showDeleteConfirmation &&
          <div className={`confirmation-btn ${isDeleting ? 'is-deleting' : ''}`}>
            <p onClick={() => deleteAccount(accountId)}>{ isDeleting ? 'Suppression...' : 'Supprimer' }</p>
            <p onClick={() => setShowDeleteConfirmation(false)}>Annuler</p>
          </div>
        }
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
function getAccountRole(role) {
  // Return the icon and the role of the account
  
  if (role === 'admin') return(<p className='role'><Shield /> administrateur</p>)
  else if (role === 'moderator') return(<p className='role'><Announcement /> modérateur</p>)
  else return(<p className='role'><User /> utilisateur</p>)
}