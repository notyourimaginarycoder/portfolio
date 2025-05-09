interface Project {
  title: string
  description: string
  imageUrl: string
  liveLink: string
  repoLink: string
}

const projects: Project[] = [
  {
    title: 'Portfolio',
    description: 'A simple portfolio created with TypeScript and Vite',
    imageUrl: 'https://via.placeholder.com/300x200',
    liveLink: 'https://notyourimaginarycoder.github.io/',
    repoLink: 'https://github.com/notyourimaginarycoder/portfolio',
  },
  {
    title: 'StackDew Valley',
    description:
      'A 2D farming simulator with a twist, created with JavaScript, Phaser, Firebase, Vite',
    imageUrl: 'https://via.placeholder.com/300x200',
    liveLink: 'https://notyourimaginarycoder.github.io/',
    repoLink: 'https://github.com/notyourimaginarycoder/stackdew-valley',
  },
]

export const createProjectsSection = (): HTMLElement => {
  const section = document.createElement('section')
  section.id = 'projects-section'
  section.innerHTML = `<h2>Projects</h2>`

  const container = document.createElement('div')
  container.className = 'project-scroll-container'

  projects.forEach((project) => {
    const card = document.createElement('div')
    card.className = 'project-card-horizontal'
    card.innerHTML = `
        <img src="${project.imageUrl}" alt="${project.title}" />
        <div class="card-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="card-links">
            <a href="${project.liveLink}" target="_blank">Live</a>
            <a href="${project.repoLink}" target="_blank">Code</a>
          </div>
        </div>
      `
    container.appendChild(card)
  })

  section.appendChild(container)
  return section
}
