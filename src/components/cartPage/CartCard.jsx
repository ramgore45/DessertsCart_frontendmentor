import React, { useContext } from 'react'
import { Title } from '../basicsCmn/Title'
import { ProductContext } from '../useContext/Productcontext'
import { TiDeleteOutline } from 'react-icons/ti'

export const CartCard = ({desert,confirmationModal}) => {

    const {deleteFromCart} = useContext(ProductContext)

  return (
    <div className={`flex justify-between border-b py-4`}>
        <div className='flex gap-x-2'>
            {confirmationModal &&
                (
                    <div>
                        <img className='h-10' src={require(`../../${desert.image.desktop}`)}/>
                    </div>
                )
            }
            <div className='flex flex-col'>
                <Title title={`${desert.name}`} textsize={'text-sm'} />
                <div className='flex gap-x-2 text-xs'>
                    <div className='text-red-800  tracking-wider'>{desert.count}x</div>
                    <div className='text-gray-400  tracking-wider'>@ ${desert.price.toFixed(2)}</div>
                    {!confirmationModal &&(<div className=' tracking-wider'>${(desert.count*desert.price).toFixed(2)}</div>)}
                </div>
            </div>
        </div>
        {confirmationModal &&
            (<div className='font-semibold self-center tracking-wider'>${(desert.count*desert.price).toFixed(2)}</div>)
        }
        {!confirmationModal &&
            (
                <div className='flex justify-center items-center text-xl text-gray-400 cursor-pointer'
                    onClick={()=>deleteFromCart(desert.id)}
                >
                    <TiDeleteOutline />
                </div>
            )
        }
    </div>
  )
}
