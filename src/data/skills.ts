import type { SkillGroup } from './index'

export const languageGroups: SkillGroup[] = [
  {
    category: 'General Purpose',
    items: ['C#', 'Java', 'JavaScript', 'Python', 'TypeScript'],
  },
  { category: 'Querying', items: ['SQL'] },
  { category: 'Scripting', items: ['AutoHotkey', 'Bash'] },
  { category: 'Systems Programming', items: ['Assembly', 'C', 'C++'] },
  { category: 'Web Development', items: ['CSS', 'HTML'] },
]

export const toolGroups: SkillGroup[] = [
  {
    category: 'Databases',
    items: ['Firebase', 'MySQL Workbench', 'PostgreSQL'],
  },
  {
    category: 'DevOps & Cloud',
    items: ['GitHub Actions', 'Netlify', 'Vercel'],
  },
  { category: 'Frontend Frameworks', items: ['React', 'Vite'] },
  {
    category: 'IDEs & Editors',
    items: ['Visual Studio', 'Visual Studio Code'],
  },
  { category: 'Testing', items: ['Jest', 'Supertest'] },
  { category: 'Version Control', items: ['Git', 'GitHub'] },
]
