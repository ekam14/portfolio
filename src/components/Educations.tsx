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
      <div className="grid lg:grid-cols-2 gap-4">
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
