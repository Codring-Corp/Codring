import React from 'react'

import MessagesList from '../historic/MessagesList'
import MsgAlert from '../noticeBoard/MsgAlert'
import AdminMsgBanner from '../noticeBoard/AdminMsgBanner'


export default function NoticeBoard() {
  return (
    <div className='component noticeboard-component'>
      <div className='top-part'>
        <MsgAlert />
        <MessagesList />
      </div>
      
      <AdminMsgBanner />
    </div>
  )
}