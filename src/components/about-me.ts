export function createAboutMe(): HTMLElement {
    const section = document.createElement('section')
    section.className = 'about-me'

    section.innerHTML = `
    <h1>Hello, I am Imaginary Friend</h1>
    `

    return section
}