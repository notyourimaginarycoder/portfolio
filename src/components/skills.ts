import { languageGroups, toolGroups } from '../data'
import { createSkillGroups } from './skill-card'

export const createSkills = (): HTMLElement => {
  const section = document.createElement('section')
  section.id = 'skills-section'

  const heading = document.createElement('h2')
  heading.textContent = 'Skills'

  const languagesTitle = document.createElement('h3')
  languagesTitle.textContent = 'Languages'

  const toolsTitle = document.createElement('h3')
  toolsTitle.textContent = 'Tools & Frameworks'

  const languageGroupEl = createSkillGroups(languageGroups)
  const toolGroupEl = createSkillGroups(toolGroups)

  section.appendChild(heading)
  section.appendChild(languagesTitle)
  section.appendChild(languageGroupEl)
  section.appendChild(toolsTitle)
  section.appendChild(toolGroupEl)

  return section
}
