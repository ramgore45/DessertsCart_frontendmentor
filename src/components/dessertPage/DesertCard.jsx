import React, { useContext, useEffect, useState } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { Btn } from '../basicsCmn/Btn'
import { ProductContext } from '../useContext/Productcontext'
import { IoAdd } from 'react-icons/io5'
import { TbMinus } from 'react-icons/tb'

export const DesertCard = ({desert}) => {

    const {addToCart,incrementItemCount, decrementItemCount, cart} = useContext(ProductContext)
    const isInCart = cart.some(item => item.id === desert.id)
    const [count, setCount] = useState(0)

    useEffect(()=>{
        if(isInCart){
            const dessert = cart.find(des=> des.id===desert.id)
            setCount(dessert.count)
        }else{
            setCount(0)
        }
    },[cart])

  return (
    <div className='w-full sm:w-[47%] lg:w-[31%] flex flex-col gap-y-6 font-semibold'>
        <div className='relative flex justify-center'>
            <img className={`rounded-lg w-full border-2 ${isInCart ? 'border-red-800' : 'border-transparent'}`}
                src={require(`../../${desert.image.desktop}`)} alt={desert.name} 
            />
            <div className="absolute -bottom-5 text-lg sm:text-sm lg:text-base">
                {
                    isInCart ?
                    (
                        <div className='bg-red-800 text-white flex justify-between rounded-full p-2 w-full'>
                            <button className='rounded-full bg-transparent border-white border p-1 text-lg sm:text-sm'
                                onClick={()=>decrementItemCount(desert.id)}
                            >
                                <TbMinus />
                            </button>
                            <div className='px-8 sm:px-6 lg:px-8 font-medium self-center text-lg sm:text-base'>{count}</div>
                            <button className='rounded-full bg-transparent border-white border p-1 text-lg sm:text-sm'
                                onClick={()=>incrementItemCount(desert.id)}
                            >
                                <IoAdd />
                            </button>
                        </div>
                    )
                    :
                    (
                        <Btn btntext={"Add to cart"} clickHandler={()=>addToCart(desert.id)} 
                            textHover={'hover:text-red-800'} bgColor={'bg-white'}
                            icon={<MdAddShoppingCart className='self-center text-lg text-red-800' />} 
                        />
                    )
                }
            </div>
        </div>
        <div>
            <div className='text-sm text-gray-500 font-medium'>{desert.category}</div>
            <div>{desert.name}</div>
            <div className='text-rose-600'>${desert.price.toFixed(2)}</div>
        </div>
    </div>
  )
}
