import { skills } from '@/data/skill'
import Image from 'next/image'
import React from 'react'
import { Skill } from './Skill'

export const Skills = () => {
  return (
    <section className="flex flex-col gap-y-6 py-10">
      <h3 className="text-4xl font-bold">Skills</h3>
      <div className="flex flex-wrap gap-3 font-semibold text-neutral-50/80 text-xl">
        {skills.map((skill, index) => (
          <Skill
            key={index}
            data={skill}
          />
        ))}
      </div>
    </section>
  )
}
