import React, { useEffect, useState } from 'react'

export default function useLocalHook(key , value) {
  
  const [local, setLocal] = useState(()=>{
    const localStr = localStorage.getItem(key);
    return localStr ? JSON.parse(localStr) : value;
  })

  useEffect(()=>{
    localStorage.setItem(key , JSON.stringify(local))
  },[local])


  return [local , setLocal]
}


function behrad(){
  return true
}
const behradfn = behrad()