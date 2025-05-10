import type { Project } from "./types"

export const aboutMeHTML = (name: string, bio: string): string => `
  <h1 id='main-name'>${name}</h1>
  <p><strong>${bio}</strong></p>
`

export const contactHTML = (githubLink: string, username: string): string => `
  <p>GitHub: <a href="${githubLink}" target="_blank">${username}</a></p>
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

export const skillGroupHTML = (category: string, items: string[]): string => `
  <div class="skill-group">
    <h3>${category}</h3>
    <ul class="skill-list">
      ${items.map((item) => `<li class="skill-item">${item}</li>`).join('')}
    </ul>
  </div>
`
