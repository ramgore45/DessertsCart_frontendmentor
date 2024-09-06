import React, { useContext } from 'react'
import carbonneutral from '../../assets/images/icon-carbon-neutral.svg'
import { Btn } from '../basicsCmn/Btn'
import { ProductContext } from '../useContext/Productcontext'
import { CartCard } from './CartCard'

export const ItemsCart = ({confirmationModal}) => {

    const {cart, totalAmt, startNewOrderHandler, confirmOrderHandler} = useContext(ProductContext)
    console.log(confirmationModal)

  return (
    <div className='flex flex-col gap-y-4'>
        <div className={`flex flex-col gap-y-4 ${confirmationModal ? 'rounded-md bg-rose-50 p-4 pt-0' : ''}`}>
            <div>
                {
                    cart.map((desert)=> (
                            <CartCard key={desert.id} desert={desert} confirmationModal={confirmationModal}/>
                        )
                    )
                }
            </div>
            <div className='flex justify-between  font-semibold'>
                <div className='self-center text-sm'>Order Total</div>
                <div className='text-lg'>${totalAmt}</div>
            </div>
        </div>
        {!confirmationModal &&
            (
                <div className='flex gap-x-1 justify-center p-2 w-full rounded-md bg-rose-50'>
                    <img 
                        src={carbonneutral}
                    />
                    <div className='font-normal '>
                        This is <span className='font-semibold'>carbon-neutral</span> delivery
                    </div>
                </div>
            )
        }
        <div className='flex justify-center text-white font-medium'>
            <Btn btntext={confirmationModal ? "Start New Order" :"Confirm Order"} text
                clickHandler={confirmationModal ? ()=>startNewOrderHandler() : ()=>confirmOrderHandler() }
                borderColor={'border-red-800'} bgColor={'bg-red-800'} 
            />
        </div>
    </div>
  )
}
