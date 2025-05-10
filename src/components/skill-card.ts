import { SkillGroup, skillGroupHTML } from '../data'

export const createSkillGroups = (groups: SkillGroup[]): HTMLElement => {
  const container = document.createElement('div')
  container.className = 'skills-group-container'

  groups.forEach(({ category, items }) => {
    const group = document.createElement('div')
    group.className = 'skill-group-wrapper'
    group.innerHTML = skillGroupHTML(category, items)
    container.appendChild(group)
  })

  return container
}
