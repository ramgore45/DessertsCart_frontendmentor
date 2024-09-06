import React from 'react'
import { ItemsCart } from '../cartPage/ItemsCart'
import { Title } from '../basicsCmn/Title'
import { GiConfirmed } from 'react-icons/gi'

export const ConfirmationModal = () => {
  return (
    <div className='bg-white w-full sm:w-[60%] lg:w-[40%] p-5 rounded-lg flex flex-col gap-y-2'>
        <div className='text-green-600 text-3xl'>
            <GiConfirmed />
        </div>
        <div>
            <div>
                <Title title={"Order Confirmed"} textsize={"text-2xl"}/>
            </div>
            <div className='text-gray-400 text-xs font-semibold'>
                We hope you enjoy your food!
            </div>
        </div>
        <div className='font-redhat'>
            <ItemsCart confirmationModal={true}/>
        </div>
    </div>
  )
}
