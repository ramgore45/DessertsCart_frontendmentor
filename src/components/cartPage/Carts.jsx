import React, { useContext, useEffect, useState } from 'react'
import { Title } from '../basicsCmn/Title'
import { ProductContext } from '../useContext/Productcontext'
import { EmptyCart } from './EmptyCart'
import { ItemsCart } from './ItemsCart'

export const Carts = () => {

    const {cart ,totalCountAndAmtHandler, totalAmt, totalCount} = useContext(ProductContext)
    console.log(cart)
    console.log("Total Amount" ,totalAmt)

    useEffect(()=>{
        totalCountAndAmtHandler();
    },[cart])

  return (
    <div className='bg-white p-5 rounded-lg flex flex-col font-semibold'>
        <Title title={`Your Cart(${totalCount})`} textcolor={'text-red-800'} textsize={'text-xl'}/>
        <div className='font-redhat'>
        { cart.length===0 ?
                (
                    <EmptyCart/>
                )
                    :
                (
                    <ItemsCart confirmationModal={false}/>
                )
            }
        </div>
    </div>
  )
}
