export function createAboutMe(): HTMLElement {
    const section = document.createElement('section')
    section.className = 'about-me-section'

    const aboutMe = document.createElement('div')
    aboutMe.id = 'about-me'
    aboutMe.innerHTML = `
    <h1>imaginary friend</h1>
    <p><strong>life is but a dream</strong></p>
    `

    section.appendChild(aboutMe)

    return section
}