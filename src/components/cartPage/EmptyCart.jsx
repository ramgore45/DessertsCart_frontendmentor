import React from 'react'
import emptycartimage from '../../assets/images/illustration-empty-cart.svg'

export const EmptyCart = () => {
  return (
    <div className='flex justify-center items-center py-8 flex-col font-redhat'>
        <img src={emptycartimage}/>
        <p className='text-sm text-gray-500 font-medium'>Your added items will appear here</p>
    </div>
  )
}
