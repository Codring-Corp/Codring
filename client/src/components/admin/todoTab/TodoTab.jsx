import React, { useRef } from 'react'

import TodoList from './TodoList'
import TodoCreate from './TodoCreate'


export default function TodoTab() {
  const reloadList = useRef(null)
  
  
  return (
    <div className='tab'>
      <TodoCreate reloadList={() => reloadList.current()} />
      <TodoList reloadList={reloadList} />
    </div>
  )
}
