import React from 'react'

export default function Card({imageUrl , name , skills , mobile , email}) {
  return (
    <div className='text-center border-0 shadow-lg gap-4 p-8'>
      <div className='' >
      <img className='inline-block rounded-full mb-3' src={imageUrl} width="96px" />
      <h6>{name}</h6>
      <p className='text-sm'>{skills}</p>
      <p className='mt-4 mb-0 text-sm font-bold'>{mobile}</p>
      <p className='text-sm font-bold'>{email}</p>
      </div>
    </div>
  )
}

