import './style.css'

import { createAboutMe } from './components/about-me'
import { createContactMe } from './components/contact-me'
import { createProjects } from './components/projects'

import { createThemeToggle } from './components/switch-mode'

const app = document.getElementById('app')

if (app) {
  app.appendChild(createAboutMe())
  app.appendChild(createProjects())
  app.appendChild(createContactMe())
  app.appendChild(createThemeToggle())
}
