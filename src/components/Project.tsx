import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { project } from '@/data/project'
import { FaGithub, FaLink } from 'react-icons/fa6'

type props = {
  data: project
}

export const Project = ({ data }: props) => {
  return (
    <div
      id="card"
      className="w-full rounded-xl flex flex-col lg:flex-row justify-between gap-x-6 border border-neutral-50/10 bg-neutral-900/60 p-4"
    >
      <div className="lg:w-1/2 bg-gradient-to-bl from-neutral-800/40 to-neutral-800 rounded-lg">
        <Image
          src={data.image}
          alt="screenshot"
          width={1000}
          height={1000}
          className="w-full h-full"
        />
      </div>
      <div className="lg:w-1/2 pt-3 lg:p-4 flex flex-col gap-y-4">
        <div className="flex justify-between items-center text-xl md:text-2xl font-bold">
          <h4>{data.name}</h4>
          <div className="flex space-x-2">
            <Link
              target="_blank"
              href={data.link}
              className="p-3 border border-neutral-50/10 rounded-xl bg-neutral-800/60"
            >
              <FaLink className="w-5 h-5" />
            </Link>
            {data.github && (
              <Link
                target="_blank"
                href={data.github}
                className="p-3 border border-neutral-50/10 rounded-xl bg-neutral-800/60"
              >
                <FaGithub className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
        <div className="flex flex-wrap items-center leading-none gap-2 border-y border-neutral-50/10 py-4 text-neutral-50/50 font-medium">
          <span>{data.type}</span>
          {data.tech.map((tech, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-x-2"
              >
                <span className="h-1 w-1 rounded-full bg-neutral-50/50" />
                <span>{tech}</span>
              </div>
            )
          })}
        </div>
        <p className="text-base text-neutral-50/50 md:pt-2">
          {data.description}
        </p>
      </div>
    </div>
  )
}
