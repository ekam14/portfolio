import React from 'react'
import { Experience } from './Experience'
import { experienceData } from '@/data/experience'

export const Experiences = () => {
  return (
    <section
      id="experience"
      className="flex flex-col py-10 gap-y-6"
    >
      <h3 className="text-4xl font-black">Experience</h3>
      <div className="flex flex-col gap-y-4">
        {/* Experience cards */}
        {experienceData.map((exp, index) => (
          <Experience
            key={index}
            data={exp}
          />
        ))}
      </div>
    </section>
  )
}
