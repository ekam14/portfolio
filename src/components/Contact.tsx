import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa6'
import { FiArrowUpRight } from 'react-icons/fi'
import { MdMail } from 'react-icons/md'

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col py-10 gap-y-6"
    >
      <h3 className="text-4xl font-bold">Contact</h3>
      <div className="flex flex-wrap gap-4 sm:text-lg">
        <Link
          target="_blank"
          href="mailto:vekariya.ja@northeastern.edu"
          className="transition-all ease-in-out flex gap-x-4 items-center bg-neutral-900/30 hover:bg-neutral-900/80 border border-neutral-50/10 rounded-xl p-3 flex-auto"
        >
          <div className="p-3 bg-neutral-800/60 border border-neutral-50/10 rounded-lg">
            <MdMail size={24} />
          </div>
          <p className="flex-1">Email</p>
          <FiArrowUpRight size={28} />
        </Link>
        <Link
          target="_blank"
          href="tel:+1-857-654-2468"
          className="transition-all ease-in-out flex gap-x-4 items-center bg-neutral-900/30 hover:bg-neutral-900/80 border border-neutral-50/10 rounded-xl p-3 flex-auto"
        >
          <div className="p-3 bg-neutral-800/60 border border-neutral-50/10 rounded-lg">
            <FaPhone size={22} />
          </div>
          <p className="flex-1">Phone</p>
          <FiArrowUpRight size={28} />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/jay-vekariya/"
          className="transition-all ease-in-out flex gap-x-4 items-center bg-neutral-900/30 hover:bg-neutral-900/80 border border-neutral-50/10 rounded-xl p-3 flex-auto"
        >
          <div className="p-3 bg-neutral-800/60 border border-neutral-50/10 rounded-lg">
            <FaLinkedin size={24} />
          </div>
          <p className="flex-1">LinkedIn</p>
          <FiArrowUpRight size={28} />
        </Link>
        <Link
          target="_blank"
          href="https://github.com/Jay-0331"
          className="transition-all ease-in-out flex gap-x-4 items-center bg-neutral-900/30 hover:bg-neutral-900/80 border border-neutral-50/10 rounded-xl p-3 flex-auto"
        >
          <div className="p-3 bg-neutral-800/60 border border-neutral-50/10 rounded-lg">
            <FaGithub size={24} />
          </div>
          <p className="flex-1">Github</p>
          <FiArrowUpRight size={28} />
        </Link>
      </div>
    </section>
  )
}
