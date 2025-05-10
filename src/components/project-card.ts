import { Project, projectCardHTML } from '../data'

export const createProjectCard = (project: Project): HTMLElement => {
  const card = document.createElement('div')
  card.className = 'project-card-horizontal'
  card.innerHTML = projectCardHTML(project)
  return card
}
