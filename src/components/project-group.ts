import { Project } from '../data'
import { createProjectCard } from './project-card'

export const createProjectsGroup = (projects: Project[]): HTMLElement => {
  const container = document.createElement('div')
  container.className = 'project-scroll-container'

  projects.forEach((project) => {
    const card = createProjectCard(project)
    container.appendChild(card)
  })

  return container
}
