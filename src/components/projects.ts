import { projects } from '../data'
import { createProjectsGroup } from './project-group'

export const createProjects = (): HTMLElement => {
  const section = document.createElement('section')
  section.id = 'projects-section'

  const heading = document.createElement('h2')
  heading.textContent = 'Projects'

  const container = createProjectsGroup(projects)

  section.appendChild(heading)
  section.appendChild(container)

  return section
}
