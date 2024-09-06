import React from 'react'

export const Btn = ({icon, btntext, bgColor, textHover, borderColor ,clickHandler}) => {
  return (
    <div className={`flex justify-center text-center gap-x-2 sm:gap-x-1 lg:gap-x-2 rounded-full p-2 px-5 border-2 ${borderColor} ${bgColor} w-full cursor-pointer
       hover:border-red-800 ${textHover}`}
      onClick={clickHandler}
    >
        {icon ? icon : ''}
        <div className='self-center'>{btntext}</div>
    </div>
  )
}
