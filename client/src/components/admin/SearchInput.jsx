import React, { useEffect, useState } from 'react'

export default function SearchInput(props) {  
  const [value, setValue] = useState('')
  const placeholder = props.placeholder
  
  useEffect(() => {
    // For each update of 'value', call updateList function
    props.updateList(value)
  }, [value, props])
  
  
  return (
    <div className='search-input-container'>
      <input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  )
}