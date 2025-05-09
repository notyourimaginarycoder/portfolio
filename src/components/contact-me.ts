export const createContactMe = (): HTMLElement => {
  const section = document.createElement('section')
  section.className = 'contact-section'

  const button = document.createElement('button')
  button.id = 'contact-btn'
  button.textContent = 'Show Contact Info'

  const contactInfo = document.createElement('div')
  contactInfo.id = 'contact-info'
  contactInfo.style.display = 'none'
  contactInfo.innerHTML = `
      <p>github: <a href="https://github.com/notyourimaginarycoder" target="_blank">imaginary friend</a></p>
    `

  button.addEventListener('click', () => {
    const isHidden = contactInfo.style.display === 'none'
    contactInfo.style.display = isHidden ? 'block' : 'none'
    button.textContent = isHidden ? 'Hide Contact Info' : 'Show Contact Info'
  })

  section.appendChild(button)
  section.appendChild(contactInfo)

  return section
}
