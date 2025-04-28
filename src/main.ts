import './style.css'

import { createAboutMe } from './components/about-me'
import { createContactMe } from './components/contact-me'

const app = document.getElementById('app')
if (app) {
  app.appendChild(createAboutMe())
  app.appendChild(createContactMe())
}
