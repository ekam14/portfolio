import { EducationType } from '@/data/education'
import React from 'react'
import { FaUniversity } from 'react-icons/fa'

type props = {
  data: EducationType
}

export const Education = ({ data }: props) => {
  return (
    <div className="flex flex-col grid-rows-subgrid gap-y-3 p-4 bg-neutral-900/60 rounded-xl border border-neutral-50/10">
      <div className="flex gap-x-3 items-center pl-1">
        <FaUniversity
          size={54}
          className="p-2.5 border border-neutral-50/10 rounded-lg bg-neutral-800/60"
        />
        <div>
          <h4 className="text-lg md:text-2xl font-black">{data.name}</h4>
          <div className="flex gap-x-2 items-center text-neutral-50/80 text-sm">
            <p>{data.location}</p>
            <div className="h-1 w-1 rounded-full bg-neutral-50/50" />
            <p>{data.date}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center p-4 h-full bg-neutral-950 border border-neutral-50/5 rounded-lg">
        <p className="text-neutral-50/80">{data.degree}</p>
        <p className="text-base md:text-xl font-semibold">{data.major}</p>
      </div>
    </div>
  )
}
