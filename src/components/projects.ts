import { projects } from '../data/data'
import { createProjectsContainer } from './project-container'

export const createProjects = (): HTMLElement => {
  const section = document.createElement('section')
  section.id = 'projects-section'

  const heading = document.createElement('h2')
  heading.textContent = 'Projects'

  const container = createProjectsContainer(projects)

  section.appendChild(heading)
  section.appendChild(container)

  return section
}
