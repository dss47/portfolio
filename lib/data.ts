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
  { id: 9, name: "React", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", darkModeFix: false },
  { id: 10, name: "Next.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", darkModeFix: true },
  { id: 11, name: "Angular", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg", darkModeFix: false },
  { id: 12, name: "Tailwind CSS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg", darkModeFix: false },
  { id: 13, name: "HTML5", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", darkModeFix: false },
  { id: 14, name: "CSS3", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", darkModeFix: false },
  { id: 16, name: "GitHub", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", darkModeFix: true },
  { id: 17, name: "Linux", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", darkModeFix: false },
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
};

export const projectsData: Project[] = [
  {
    title: "IT Mall – AI-Powered Voice Commerce & ERP Automation Suite",
    description: "AI-powered voice commerce and ERP automation platform integrating FreePBX/Asterisk, Odoo, n8n, and conversational AI.",
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
      "Web platform for discovering and organizing AI tools, built with React, PHP, and MySQL.",
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
      "Native Linux desktop application built with C,XML and GTK4, featuring an interactive aquarium and 2D Boids simulation.",
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
      "Collaborative workspace platform for managing projects, tasks, and team activity.",
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
      "Agile task management board built with Angular and TypeScript, featuring reactive UI interactions.",
    tags: [
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    ],
    date: 2026,
    imageUrl: "/images/taskflow.png",
    githubUrl: "https://github.com/dss47/Taskflow.git",
  },
  {
    title: "RPS It!",
    description:
      "Retro 2D Rock-Paper-Scissors game built with Godot and GDScript, featuring VS Friend and VS AI modes with custom pixel-art UI.",
    tags: [
      {
        name: "Godot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg",
      },
      {
        name: "GDScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg",
      },
      {
        name: "Cloudflare",
        icon: "https://cdn.simpleicons.org/cloudflare/F38020",
      },
    ],
    date: 2026,
    imageUrl: "/images/rpsit.png",
    githubUrl: "https://github.com/dss47/RPS-It-",
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: number;
  src: string;
  imageUrl: string;
};

export const certificatesData: Certificate[] = [
  {
    title: "Certificat CCNA : Présentation des réseaux",
    issuer: "Cisco",
    date: 2025,
    src: "/docs/cisco.pdf",
    imageUrl: "/images/cisco-preview.png"
  },
  {
    title: "Certificat Fonctionnel Odoo",
    issuer: "Odoo",
    date: 2026,
    src: "/docs/odoo.pdf",
    imageUrl: "/images/odoo-preview.png"
  }
];