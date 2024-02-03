import React from 'react'

export default function Name({setName}) {
    function neuName(){
        const value = event.target.value
        value ? setName(value) : setName("Behrad")
    }
  return (
    <div>
      <label htmlFor="name"> Name
        <input onChange={neuName} type="text" id='name' />
      </label>
    </div>
  )
}
