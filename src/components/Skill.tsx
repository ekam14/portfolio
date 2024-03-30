import { SkillsType } from '@/data/skill'
import Image from 'next/image'
import React from 'react'

type props = {
  data: SkillsType
}

export const Skill = ({ data }: props) => {
  return (
    <div className="flex gap-x-3 items-center p-3 bg-neutral-900/60 border border-neutral-50/10 rounded-xl flex-auto">
      <div className="flex h-12 w-12 p-2 bg-neutral-800/60 border border-neutral-50/10 rounded-md">
        <Image
          src={data.logoURL}
          alt={data.name}
          width={40}
          height={40}
          data-name={data.name}
          className="rounded-sm dark:data-[name=Express]:invert data-[name=Express]:invert-0 dark:data-[name='Next.js']:invert data-[name='Next.js']:invert-0"
        />
      </div>
      <p className="px-1 md:px-2 text-base md:text-lg">{data.name}</p>
    </div>
  )
}
