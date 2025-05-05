export const createThemeToggle = (): HTMLElement => {
  const button = document.createElement('button')
  button.id = 'theme-toggle'
  button.textContent = 'Toggle Theme'

  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    document.body.classList.add(savedTheme)
  }

  button.addEventListener('click', () => {
    if (document.body.classList.contains('theme-dark')) {
      document.body.classList.remove('theme-dark')
      document.body.classList.add('theme-light')
      localStorage.setItem('theme', 'theme-light')
    } else {
      document.body.classList.remove('theme-light')
      document.body.classList.add('theme-dark')
      localStorage.setItem('theme', 'theme-dark')
    }
  })

  return button
}
