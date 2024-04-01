import React from 'react'
import { Project } from './Project'
import { projects } from '@/data/project'

export const Projects = () => {
  return (
    <section
      id="project"
      className="flex flex-col py-10 gap-y-6"
    >
      <h3 className="text-4xl font-black">Projects</h3>
      <div className="flex flex-col gap-y-4">
        {projects.map((project, index) => (
          <Project
            key={index}
            data={project}
          />
        ))}
      </div>
    </section>
  )
}
