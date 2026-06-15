// Central content source for the portfolio. Edit here to update the site.

export const profile = {
  name: 'Riandoza',
  role: 'Full-Stack Developer & DevOps Engineer',
  location: 'Indonesia',
  taglines: [
    'Full-Stack Developer',
    'DevOps Engineer',
    'IoT & Cloud Enthusiast',
  ],
  // Short, punchy line shown right under the name in the hero.
  tagline:
    'I design, build, and ship reliable web applications — from a polished frontend all the way down to the servers they run on.',
  // Longer, friendly paragraph used on the About section and meta description.
  summary:
    "Hi! I'm a full-stack developer and DevOps engineer based in Indonesia, working with founders and teams as a freelancer. I love turning ideas into scalable products and keeping the infrastructure behind them fast, secure, and dependable.",
  highlights: [
    { icon: '🔭', label: 'Right now', text: 'Helping clients ship full-stack products and automate their DevOps' },
    { icon: '👀', label: 'Excited about', text: 'Web development, IoT, AI/ML, and cloud-native technologies' },
    { icon: '🤝', label: 'Happy to help with', text: 'Open source, DevOps automation, and system administration' },
    { icon: '💬', label: 'Ask me about', text: 'Linux servers (Ubuntu/Debian), Docker, and full-stack development' },
    { icon: '⚡', label: 'Fun fact', text: 'I genuinely enjoy squeezing every last bit of performance out of a server' },
  ],
};

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: '10+', label: 'Years of experience' },
  { value: '50+', label: 'Projects delivered' },
  { value: '20+', label: 'Technologies mastered' },
];

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
      'A production-ready Laravel starter powered by FrankenPHP, the modern high-performance PHP server. Ships as a single standalone binary with worker mode for blazing-fast requests.',
    tags: ['PHP', 'Laravel', 'FrankenPHP', 'Docker'],
    url: 'https://github.com/riandoza/frankenphp-laravel',
  },
  {
    name: 'Explore more on GitHub',
    description:
      'There’s plenty more where this came from — open-source experiments, infrastructure tooling, and the projects I tinker with in my spare time.',
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
