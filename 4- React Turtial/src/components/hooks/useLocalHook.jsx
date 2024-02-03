import React, { useEffect, useState } from 'react'

export default function useLocalHook(key , initialState) {
  // get value from LocalStorage and save at State(value)
  const [value , setValue] = useState(localStorage.getItem(key) || initialState);

  // save updated State in our key in Localstorage with Usestate
  useEffect(()=>{
    localStorage.setItem(key , value)
  }, [value , key])

  return [value , setValue]
}
