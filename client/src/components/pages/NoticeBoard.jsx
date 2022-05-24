import React, { useRef } from 'react'

import MessagesList from '../historic/MessagesList'
import MsgAlert from '../noticeBoard/MsgAlert'
import AdminMsgBanner from '../noticeBoard/AdminMsgBanner'


export default function NoticeBoard() {
  const newMessages = useRef(null)
  
  return (
    <div className='component noticeboard-component'>
      <div className='top-part'>
        <MsgAlert newMessages={newMessages} />
        <MessagesList newMessages={messages => newMessages.current(messages)} />
      </div>
      
      <AdminMsgBanner />
    </div>
  )
}