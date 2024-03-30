import React from 'react'
import { Education } from './Education'
import { educations } from '@/data/education'

export const Educations = () => {
  return (
    <section
      id="education"
      className="flex flex-col py-10 gap-y-6"
    >
      <h3 className="text-4xl font-bold">Education</h3>
      <div className="grid md:grid-cols-2 gap-y-4 md:gap-y-0 md:gap-x-4">
        {educations.map((education, index) => (
          <Education
            key={index}
            data={education}
          />
        ))}
      </div>
    </section>
  )
}
