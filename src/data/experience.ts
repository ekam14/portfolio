export const experienceData: ExperienceType[] = [
  {
    title: 'Algorithms & Java Teaching Assistant',
    company: 'Northeastern University',
    date: 'May 2023 - May 2024',
    description:
      'Directed students on algorithm concepts and object-oriented design. Mentored over 100 students in\n' +
        'programming languages such as Java & C++',
  },
  {
    title: 'Software Development Engineer-I',
    company: 'Amazon',
    date: 'December 2021 - June 2022',
    description:
      'Drafted and wrote comprehensive design documentation for the Chewbacca migration project. Moreover, ' +
        'integrated SPC system with CBCC cards for Amazon’s UK payments market using Java,',
  },
  {
    title: 'Software Engineer',
    company: 'Oriserve',
    date: 'July 2020 - December 2021',
    description:
        'Part of the backend team; where I restructured, maintained code, and deployed many features ' +
        'for 60+ automated data reports using JavaScript & Node. ',
  }
]

export type ExperienceType = {
  title: string
  company: string
  date: string
  description: string
}
