import { ExperienceType } from '@/data/experience'
import React from 'react'
import { FaBriefcase } from 'react-icons/fa6'

type props = {
  data: ExperienceType
}

export const Experience = ({ data }: props) => {
  return (
    <div
      id="exp-card"
      className="flex flex-col p-4 bg-neutral-900/60 rounded-xl border border-neutral-50/10 gap-y-4"
    >
      <div className="flex flex-col md:flex-row justify-between md:items-center px-1 gap-y-4 md:gap-y-0">
        <div className="flex gap-x-3 items-center">
          <FaBriefcase
            size={54}
            className="p-2.5 border border-neutral-50/10 rounded-lg bg-neutral-800/60"
          />
          <div>
            <h4 className="text-xl md:text-2xl font-bold">{data.title}</h4>
            <p className="text-neutral-50/80">{data.company}</p>
          </div>
        </div>
        <p className="text-neutral-50/70 font-bold text-lg md:text-xl py-4 md:py-0 border-y border-neutral-50/10 md:border-none">
          {data.date}
        </p>
      </div>
      <div className="px-4 py-6 bg-neutral-950 rounded-lg border border-neutral-50/5">
        <p>{data.description}</p>
      </div>
    </div>
  )
}
