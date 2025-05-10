import { Project } from "./data"

export const aboutMeHTML = `
<h1 id='main-name'>imaginary friend</h1>
<p><strong>life is but a dream</strong></p>
`

export const contactHTML = `
<p>GitHub: <a href="https://github.com/notyourimaginarycoder" target="_blank">imaginary friend</a></p>
`

export const projectCardHTML = (project: Project): string => `
  <img src="${project.imageUrl}" alt="${project.title}" />
  <div class="card-content">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="card-links">
      <a href="${project.liveLink}" target="_blank">Live</a>
      <a href="${project.repoLink}" target="_blank">Code</a>
    </div>
  </div>
`