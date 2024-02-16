import React from 'react'
import FastFoodItem from '../FastFoodItem/fastFoodItem'

export default function FastFoodList({fastFoodsItems}) {
  let delay = 0.1;
  return (
    <div className='row'>
      {fastFoodsItems.map((fastfood)=>{
        delay =+ 0.030;
        return(
        <div className='col-md-4 col-sm-6 mb-grid-gutter' key={fastfood.id}>
            <FastFoodItem {...fastfood} delay={delay} />
        </div>
        );
      })}
    </div>
  )
}
