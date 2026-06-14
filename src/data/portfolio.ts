// Central content source for the portfolio. Edit here to update the site.

export const profile = {
  name: 'Riandoza',
  role: 'Full-Stack Developer & DevOps Engineer',
  location: 'Indonesia',
  taglines: [
    'Full-Stack Developer from Indonesia',
    'Passionate about Software & IoT',
    'Always learning new technologies',
  ],
  summary:
    "I'm a passionate Full-Stack Developer and DevOps Engineer from Indonesia, currently working as a Freelancer. I love building scalable applications and managing robust server infrastructures.",
  highlights: [
    { icon: '🔭', label: 'Currently', text: 'Freelance full-stack development & DevOps solutions' },
    { icon: '👀', label: 'Interested in', text: 'Software Development, IoT, AI/ML, and Cloud Technologies' },
    { icon: '👯', label: 'Collaborate on', text: 'Open source, DevOps automation, system administration' },
    { icon: '💬', label: 'Ask me about', text: 'Ubuntu/CentOS/Debian, Docker, full-stack development' },
    { icon: '⚡', label: 'Fun fact', text: 'I enjoy optimizing server performance & exploring new tech stacks' },
  ],
};

export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: '📝',
    skills: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Golang', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend & Mobile',
    icon: '🎨',
    skills: ['React', 'React Native', 'Next.js', 'AstroJS', 'TailwindCSS'],
  },
  {
    title: 'Backend & API',
    icon: '⚙️',
    skills: ['Node.js', 'Express', 'FastAPI', 'Laravel'],
  },
  {
    title: 'DevOps & Sysadmin',
    icon: '🐳',
    skills: ['Docker', 'Ubuntu', 'CentOS', 'Debian', 'Arch Linux', 'Nginx', 'Apache'],
  },
  {
    title: 'Monitoring',
    icon: '📊',
    skills: ['Grafana', 'Prometheus', 'Loki', 'Alloy'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
  },
  {
    title: 'IoT & Hardware',
    icon: '🔌',
    skills: ['Raspberry Pi', 'Home Assistant'],
  },
  {
    title: 'Tools & IDEs',
    icon: '🛠️',
    skills: ['VS Code', 'Android Studio', 'PyCharm', 'Git', 'GitHub'],
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  url: string;
};

export const projects: Project[] = [
  {
    name: 'frankenphp-laravel',
    description:
      'A Laravel setup powered by FrankenPHP — a modern, high-performance application server for PHP, bringing standalone binaries and worker mode to Laravel apps.',
    tags: ['PHP', 'Laravel', 'FrankenPHP', 'Docker'],
    url: 'https://github.com/riandoza/frankenphp-laravel',
  },
  {
    name: 'More on GitHub',
    description:
      'Explore the rest of my open-source work, experiments, and infrastructure tooling on my GitHub profile.',
    tags: ['Open Source', 'DevOps', 'Full-Stack'],
    url: 'https://github.com/riandoza',
  },
];

export type Social = {
  label: string;
  url: string;
  icon: string;
};

export const socials: Social[] = [
  { label: 'GitHub', url: 'https://github.com/riandoza', icon: 'github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/riandoza', icon: 'linkedin' },
  { label: 'Twitter', url: 'https://twitter.com/riandoza', icon: 'twitter' },
  { label: 'Instagram', url: 'https://www.instagram.com/andriandoza', icon: 'instagram' },
  { label: 'Facebook', url: 'https://www.facebook.com/riandozaa/', icon: 'facebook' },
  { label: 'Email', url: 'mailto:riandoza@gmail.com', icon: 'mail' },
];

export const quote = {
  text: 'Code is like humor. When you have to explain it, it’s bad.',
  author: 'Cory House',
};
