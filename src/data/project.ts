export const projects: project[] = [
  {
    name: 'Pinterest Clone Full-stack Web Application',
    type: 'Fullstack',
    tech: ['JavaScript', 'Node.js', 'React.js', 'SQL', 'MVC'],
    link: 'https://github.com/ekam14/Pinterest-Frontend',
    github: 'https://github.com/ekam14/Pinterest-Frontend',
    image: '/Images/pinterest.png',
    description:
      'A Pinterest clone full-stack web application featuring user signup, exploration, pin uploading, ' +
        'commenting, and deletion capabilities',
  },
  {
    name: 'Blog Springboot Web Application',
    type: 'Fullstack',
    tech: ['Java', 'Springboot', 'SQL'],
    link: 'https://github.com/ekam14/Blogging-App',
    github: 'https://github.com/ekam14/Blogging-App',
    image: '/Images/blogApp.png',
    description:
      'A Java Spring Boot-based web service facilitating user profile creation, blog creation and management, reading of\n' +
        'other users’ blogs, and interaction functionalities such as liking and commenting.\n',
  },
  {
    name: 'Virtual Stock Java Application',
    type: 'Backend',
    tech: ['Java', 'Java Swing', 'JUnit testing', 'MVC Design Pattern'],
    link: 'https://github.com/ekam14/Virtual-Stock-App',
    github: 'https://github.com/ekam14/Virtual-Stock-App',
    image: '/Images/virtualStock.png',
    description:
      'A Java-based terminal and GUI application using Java Spring and the MVC design pattern, proficiently managing\n' +
        'data for the top 470 company stocks of the S&P 500 share index along with extensive JUnit testing.',
  }
]

export type project = {
  name: string
  type: string
  tech: string[]
  link: string
  github?: string
  image: string
  description: string
}
