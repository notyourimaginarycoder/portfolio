import { contactHTML } from "../data"

export const createContactInfo = (): HTMLElement => {
    const info = document.createElement('div')
    info.id = 'contact-info'
    info.style.display = 'none'
    info.innerHTML = contactHTML("https://github.com/notyourimaginarycoder", "imaginary friend")
    return info
  }