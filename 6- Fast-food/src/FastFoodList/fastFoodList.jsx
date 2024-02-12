import React from 'react'
import FastFoodItem from '../FastFoodItem/fastFoodItem'

export default function FastFoodList({fastFoodsItems}) {
  return (
    <div className='row'>
      {fastFoodsItems.map((fastfood)=>{
        return(
        <div className='col-md-4 col-sm-6 mb-grid-gutter' key={fastfood.id}>
            <FastFoodItem {...fastfood} />
        </div>
        );
      })}
    </div>
  )
}
