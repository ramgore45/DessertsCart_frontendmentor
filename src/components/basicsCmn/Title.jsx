import React from 'react'

export const Title = ({title, textcolor, textsize}) => {
  return (
    <div className={`w-fit font-bold ${textsize} ${textcolor}`}>{title}</div>
  )
}
