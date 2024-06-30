export const experienceData: ExperienceType[] = [
  {
    title: 'Algorithms & Java Teaching Assistant',
    company: 'Northeastern University',
    date: 'May 2023 - May 2024',
    description:
      'Headed up a project that created a new React front-end, which really helped our sales team sell more and close deals quicker. Plus, I worked on our Java system to make it more reliable and to help us get updates done quicker.',
  },
  {
    title: 'Software Development Engineer-I',
    company: 'Amazon',
    date: 'December 2021 - June 2022',
    description:
      'Built a temperature control system for a Plasma arc to keep it at the right heat and wired up sensors and actuators to a PLC to manage the temperature fast. To make sure the Plasma arc worked its best and most reliable, I ran thorough tests and fine-tuned everything.',
  },
  {
    title: 'Software Engineer',
    company: 'Oriserve',
    date: 'July 2020 - December 2021',
    description:
        'Headed up a project that created a new React front-end, which really helped our sales team sell more and close deals quicker. Plus, I worked on our Java system to make it more reliable and to help us get updates done quicker.',
  }
]

export type ExperienceType = {
  title: string
  company: string
  date: string
  description: string
}
