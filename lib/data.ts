export type tickerItem = {
  id: number,
  name: string,
  logoUrl: string,
  darkModeFix: boolean,
};

export const tickerItems: tickerItem[] = [
  { id: 1, name: "C", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", darkModeFix: true },
  { id: 2, name: "C++", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", darkModeFix: false },
  { id: 3, name: "Java", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", darkModeFix: false },
  { id: 4, name: "JavaScript", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", darkModeFix: false },
  { id: 5, name: "TypeScript", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", darkModeFix: false },
  { id: 6, name: "PHP", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", darkModeFix: false },
  { id: 7, name: "MySQL", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", darkModeFix: false },
  { id: 8, name: "Shell", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", darkModeFix: true },
  { id: 9, name: "React", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", darkModeFix: false },
  { id: 10, name: "Next.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", darkModeFix: true },
  { id: 11, name: "Angular", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg", darkModeFix: false },
  { id: 12, name: "Tailwind CSS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg", darkModeFix: false },
  { id: 13, name: "HTML5", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", darkModeFix: false },
  { id: 14, name: "CSS3", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", darkModeFix: false },
  { id: 15, name: "Git", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", darkModeFix: false },
  { id: 16, name: "GitHub", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", darkModeFix: true },
  { id: 17, name: "Linux", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", darkModeFix: false },
  { id: 18, name: "Lua", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg", darkModeFix: false },
  { id: 19, name: "NodeJS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", darkModeFix: false },
  { id: 20, name: "Arduino", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", darkModeFix: false },
  { id: 21, name: "Odoo", logoUrl: "https://cdn.simpleicons.org/odoo", darkModeFix: false },
  { id: 22, name: "Asterisk", logoUrl: "https://cdn.simpleicons.org/asterisk", darkModeFix: false },
  { id: 23, name: "n8n", logoUrl: "https://cdn.simpleicons.org/n8n", darkModeFix: false },
  { id: 24, name: "docker", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", darkModeFix: false }
];


export type Tag = {
  name: string;
  icon: string;
};

export type Project = {
  title: string;
  description: string;
  tags: Tag[];
  date: number;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
};

export const projectsData: Project[] = [
  {
    title: "IT Mall – AI-Powered Voice Commerce & ERP Automation Suite",
    description:
      "An end-to-end intelligent enterprise telephony & ERP automation platform. Engineered a real-time conversational AI agent using Asterisk AudioSocket, LLMs, and local neural TTS (Piper) for zero-latency customer qualification and live catalog querying. Built automated post-call workflows via n8n to generate official quotes in a customized Odoo 18 ERP (RBAC, dark theme), dynamically render signed PDF quotes, and deliver them instantly to callers via Meta's WhatsApp Cloud API.",
    tags: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Odoo", icon: "https://cdn.simpleicons.org/odoo" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Asterisk", icon: "https://cdn.simpleicons.org/asterisk" },
      { name: "n8n", icon: "https://cdn.simpleicons.org/n8n" }
    ],
    date: 2026,
    imageUrl: "/images/itmall.png",
    githubUrl: "#",
  },
  {
    title: "Penguins – AI Aggregator Platform",
    description:
      "A centralized directory platform built to track and index modern AI tools. Developed a custom lightweight MVC architecture in PHP from scratch to handle heavy dataset parsing without framework overhead. Features multi-criteria asynchronous filtering powered by an optimized backend REST API, delivering sub-100ms response times for complex user queries.",
    tags: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
    date: 2026,
    imageUrl: "/images/penguin.png",
    githubUrl: "https://github.com/dss47/Penguins.git",
  },
  {
    title: "GTK4 Aquarium",
    description:
      "A lightweight, native Linux desktop application built to replace resource-heavy web-bloat interfaces. Engineered a custom modular XML parser wrapper API to streamline native GTK4 window layout generation. To demonstrate the UI's performance, I implemented an interactive 2D desktop simulator running a hardware-accelerated Boids flocking algorithm, maintaining a decent performance under heavy object counts.",
    tags: [
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "GTK4", icon: "https://gitlab.gnome.org/GNOME/gtk/-/raw/0434ad3bd9cc2e06d3d7103810aa4b801bb4e1c6/.gitlab-ci/pages/gtk-logo.svg" },
      { name: "XML", icon: "https://cdn.simpleicons.org/xml" },
    ],
    date: 2026,
    imageUrl: "/images/gtkaqua.png",
    githubUrl: "https://github.com/dss47/gtkaqua.git",
  },
  {
    title: "CollabSpace – Collaborative Workspace Hub",
    description:
      "A secure, real-time team productivity platform driven by a decoupled RESTful architecture. Designed intricate MariaDB relational schemas and optimized data pipelines to handle synchronized resource distribution. Includes robust token-based user authentication, secure session handling, and defensive database constraints built to mitigate race conditions among concurrent user sessions.",
    tags: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
    date: 2026,
    imageUrl: "/images/collabspace.png",
    githubUrl: "https://github.com/dss47/Collabspace.git",
  },
  {
    title: "TaskFlow – Reactive Agile Management Board",
    description:
      "A high-performance Kanban-style project management application built using Angular standalone components. Leveraged reactive programming primitives (RxJS) to implement instantaneous UI state changes and seamless drag-and-drop mechanics. Solved frontend lag by enforcing strict tracking identities and decoupled change detection strategies, ensuring zero-latency board re-renders during state mutations.",
    tags: [
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    ],
    date: 2026,
    imageUrl: "/images/taskflow.png",
    githubUrl: "https://github.com/dss47/Taskflow.git",
  },

];