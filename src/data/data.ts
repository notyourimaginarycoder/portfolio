export interface Project {
    title: string
    description: string
    imageUrl: string
    liveLink: string
    repoLink: string
  }

export const projects: Project[] = [
    {
      title: 'Portfolio',
      description: 'A simple portfolio created with TypeScript and Vite',
      imageUrl: 'https://via.placeholder.com/300x200',
      liveLink: 'https://notyourimaginarycoder.github.io/',
      repoLink: 'https://github.com/notyourimaginarycoder/portfolio',
    },
    {
      title: 'StackDew Valley',
      description:
        'A 2D farming simulator with a twist, created with JavaScript, Phaser, Firebase, Vite',
      imageUrl: 'https://via.placeholder.com/300x200',
      liveLink: 'https://notyourimaginarycoder.github.io/',
      repoLink: 'https://github.com/notyourimaginarycoder/stackdew-valley',
    },
  ]