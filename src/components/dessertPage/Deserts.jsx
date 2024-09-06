import React from 'react'
import data from '../../data.json'
import { DesertCard } from './DesertCard'
import { Title } from '../basicsCmn/Title'


export const Deserts = () => {

  return (
    <div className='w-full flex flex-col gap-y-5'>
        <Title title={"Desserts"} textsize={'text-3xl'}/>
        <div className='w-full flex flex-wrap font-redhat gap-5 sm:gap-4 lg:gap-5'>
            {
                data.map((desert)=>(
                    <DesertCard key={desert.id} desert={desert} />
                ))
            }
        </div>
    </div>
  )
}
