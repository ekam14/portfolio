/* eslint-disable react/no-unescaped-entities */
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Experiences } from '@/components/Experiences'
import { Educations } from '@/components/Educations'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <main className="dark:bg-neutral-950 dark:text-neutral-50 font-space w-screen container max-w-6xl mx-auto">
      <section className="px-6 md:px-20 antialiased">
        <Hero />
        <Skills />
        <Projects />
        <Experiences />
        <Educations />
        <Contact />
      </section>
      <section>
        <div className="flex gap-x-6 items-center text-md sm:text-lg justify-center p-4 text-center py-8">
          <p>
            Made with ❤️ by &nbsp;
            <span className="text-blue-500">Jay Vekariya</span>
          </p>
          <p>
            Design Insipiration by &nbsp;
            <a
              href="https://nexflare.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Nexflare
            </a>
            &nbsp;&&nbsp;
            <a
              href="https://x.com/praha37v?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Praha37v
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}
