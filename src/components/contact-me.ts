import { createContactButton } from "./contact-button"
import { createContactInfo } from "./contact-information"

export const createContactMe = (): HTMLElement => {
  const section = document.createElement('section')
  section.className = 'contact-section'

  const contactInfo = createContactInfo()
  const button = createContactButton(contactInfo)

  section.appendChild(button)
  section.appendChild(contactInfo)

  return section
}