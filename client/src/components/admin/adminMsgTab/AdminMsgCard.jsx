import React,{ useState }  from 'react'

import Trash from '../../../assets/svg/Trash'
import Edit from '../../../assets/svg/Edit'

import { request } from '../../../request'
import AdminMsgModif from './AdminMsgModif'


export default function AdminMsgCard(props) {
  const message = props.msg
  const messageId = message._id
  
  const [editMode, setEditMode] = useState(false)
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const deleteMsg = async id => {
    // Delete admin message by id
    setIsDeleting(true)
    await request.remove(`/messages/admin/${id}`)
    setIsDeleting(false)
    // Reload msg list
    props.reloadList()
  }
  
  
  return (
    <div className='admin-msg-card'>
      <div className='todo-data'>
        <p>{ message.body }</p>
        
        <div className='btns'>
          <button onClick={() => setEditMode(!editMode)}>
            <Edit />
          </button>
          <button onClick={() => setShowDeleteConfirmation(true)}>
            <Trash />
          </button>
          
          { showDeleteConfirmation &&
            <div className={`confirmation-btn ${isDeleting ? 'is-deleting' : ''}`}>
              <p onClick={() => deleteMsg(messageId)}>{ isDeleting ? 'Suppression...' : 'Supprimer' }</p>
              <p onClick={() => setShowDeleteConfirmation(false)}>Annuler</p>
            </div>
          }
        </div>
      </div>
      
      {
        editMode &&
        <AdminMsgModif
          msg={message.body}
          id={messageId}
          hideModifForm={() => setEditMode(false)}
          reloadList= {() => props.reloadList()}
        />
      }
    </div>
  )
}