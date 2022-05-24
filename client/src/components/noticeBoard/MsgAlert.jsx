import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


export default function MsgAlert(props) {
  const [newMessage, setNewMessage] = useState()
  
  // Set an array of new messages
  // Function triggered by the parent component
  props.newMessages.current = messages => displayMessage(messages[0])
  
  const displayMessage = message => {
    setNewMessage(message)
    setTimeout(() => {
      setNewMessage(null)
    }, getMsgTime(message))
    
    console.log(getMsgTime(message));
  }
  
  if (!newMessage) return <p className='msg-alert-container loading'>Envoie un message et il s'affichera ici !</p>
  
  return (
    <div className='msg-alert-container'>
      { newMessage &&

        <motion.div className='msg-card' animate={{ scale: 1.3 }}>
          <p className='title'>Nouveau message !</p>
          <p className='body'>{ newMessage.body }</p>
          { newMessage.gif &&
            <div className='gif'>
              <iframe
                src={newMessage.gif.url}
                title={newMessage.gif.title}
                frameBorder='0'
                width={newMessage.gif.width}
                height={newMessage.gif.height}
              />
            </div>
          }
          <Link className='author' to={`/profile/${newMessage.author}`}>{ newMessage.author }</Link>
        </motion.div>
      }
    </div>
  )
}

function getMsgTime(message) {
  // Determine the message time 
  const initialTime = message.body.length * 200
  
  if (initialTime > 10000) return 10000
  if (initialTime < 3000) return 3000
  return initialTime
}