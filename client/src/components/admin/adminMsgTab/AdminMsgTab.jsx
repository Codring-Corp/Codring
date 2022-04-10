import React, { useRef } from 'react'

import AdminMsgList from './AdminMsgList'
import AdminMsgCreate from './AdminMsgCreate'


export default function AdminMsgTab() {
  const reloadList = useRef(null)
  
  return (
    <div>
      <AdminMsgCreate reloadList={() => reloadList.current()} />
      <AdminMsgList reloadList={reloadList} />
    </div>
  )
}