import { aboutMeHTML } from "../data/templates"

export const createAboutMe = (): HTMLElement => {
  const section = document.createElement('section')
  section.className = 'about-me-section'

  const aboutMe = document.createElement('div')
  aboutMe.id = 'about-me'
  aboutMe.innerHTML = aboutMeHTML

  section.appendChild(aboutMe)

  return section
}
