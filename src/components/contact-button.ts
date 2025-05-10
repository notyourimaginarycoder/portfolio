export const createContactButton = (contactInfo: HTMLElement): HTMLButtonElement => {
    const button = document.createElement('button')
    button.id = 'contact-btn'
    button.textContent = 'Show Contact Info'
  
    button.addEventListener('click', () => {
      const isHidden = contactInfo.style.display === 'none'
      contactInfo.style.display = isHidden ? 'block' : 'none'
      button.textContent = isHidden ? 'Hide Contact Info' : 'Show Contact Info'
    })
  
    return button
  }