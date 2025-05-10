import { aboutMeHTML } from '../data'

export const createAboutMe = (): HTMLElement => {
  const section = document.createElement('section')
  section.className = 'about-me-section'

  const aboutMe = document.createElement('div')
  aboutMe.id = 'about-me'
  aboutMe.innerHTML = aboutMeHTML('imaginary friend', 'life is but a dream')

  section.appendChild(aboutMe)

  return section
}
