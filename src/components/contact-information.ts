import { contactHTML } from "../data/templates"

export const createContactInfo = (): HTMLElement => {
    const info = document.createElement('div')
    info.id = 'contact-info'
    info.style.display = 'none'
    info.innerHTML = contactHTML
    return info
  }