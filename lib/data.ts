
import genius from '@/assets/genius.png'
export const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    
    {
      name: "Skills",
      hash: "#skills"
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;

export const projectsData = [
  {
    title: "Genius AI SAAS",
    description: "An AI powered app, where user's can subscribe to AI generations, inclueds a free tier",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "ChatGPT", "prisma", "planetscale"],
    imageUrl: genius
  },
]

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;