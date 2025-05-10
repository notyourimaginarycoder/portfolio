import { Project } from '../data/data'
import { projectCardHTML } from '../data/templates'

export const createProjectCard = (project: Project): HTMLElement => {
  const card = document.createElement('div')
  card.className = 'project-card-horizontal'
  card.innerHTML = projectCardHTML(project)
  return card
}
