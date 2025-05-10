import { Project } from '../data/data'
import { createProjectCard } from './project-card'

export const createProjectsContainer = (projects: Project[]): HTMLElement => {
  const container = document.createElement('div')
  container.className = 'project-scroll-container'

  projects.forEach((project) => {
    const card = createProjectCard(project)
    container.appendChild(card)
  })

  return container
}
