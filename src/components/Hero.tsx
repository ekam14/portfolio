/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col min-h-screen justify-center items-start font-semibold gap-y-1"
    >
      <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold">
        <span className="inline-block transition-transform animate-wave origin-bottom-right">
          👋🏼
        </span>{' '}
        <span className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
          Hello, I'm
        </span>
      </h2>
      <h1 className="text-4xl md:text-5xl xl:text-7xl font-extrabold leading-none bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent pb-1">
        Jay Vekariya
      </h1>
      <p className="text-lg md:text-xl xl:text-3xl leading-snug">
        Graduate Student @ Northeastern University
      </p>
      <p className="text-base md:text-lg xl:text-xl text-neutral-50/90 pt-2">
        A Full Stack Devloper with a strong affinity for clean design and
        well-crafted code. My approach is minimalist — I believe in creating
        interfaces that are sleek and intuitive, paired with backend systems
        that are robust and efficient.
      </p>
      <Link
        target="_blank"
        href="/Resume.pdf"
        className="px-4 py-2 mt-3 bg-neutral-50 text-neutral-950 rounded-lg md:text-lg font-bold"
        download={true}
        locale={false}
      >
        Resume
      </Link>
    </section>
  )
}
