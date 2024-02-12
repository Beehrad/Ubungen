import React from 'react'

export default function Loading({theme}) {
  return (
    <div className='d-felx justify-content-center m-auto'>
      <div className={`laoding spinner-border text-${theme || "success"}`}
      ></div>
    </div>
  )
}
