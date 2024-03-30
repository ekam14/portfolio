export const experienceData: ExperienceType[] = [
  {
    title: 'Software Engineer',
    company: 'Infosys',
    date: 'Jan 2021 - Jul 2023',
    description:
      'Headed up a project that created a new React front-end, which really helped our sales team sell more and close deals quicker. Plus, I worked on our Java system to make it more reliable and to help us get updates done quicker.',
  },
  {
    title: 'Engineering Intern',
    company: 'Institute of Plasma Research',
    date: 'Jan 2021 - Mar 2021',
    description:
      'Built a temperature control system for a Plasma arc to keep it at the right heat and wired up sensors and actuators to a PLC to manage the temperature fast. To make sure the Plasma arc worked its best and most reliable, I ran thorough tests and fine-tuned everything.',
  },
]

export type ExperienceType = {
  title: string
  company: string
  date: string
  description: string
}
