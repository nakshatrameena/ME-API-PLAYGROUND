import { Request, Response } from "express";

export const getProfile = (_req: Request, res: Response) => {
  res.status(200).json({
    name: "NAKSHATRA MEENA",
    email: "nakshatra301407@gmail.com",
    education:
      "B.Tech in Chemical Engineering from MNIT Jaipur (CGPA: 6.94/10), 12th: 73.40%, 10th: 78.17%",
    
    skills: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL"
    ],

    projects: [
      {
        title: "ME API Playground",
        description:
          "A full-stack playground that exposes my profile via REST APIs with query support.",
        links: [
          "https://github.com/nakshatrameena/me-api-playground"
        ],
        skills: ["Node.js", "Express", "PostgreSQL"]
      }
    ],

    work: [{title: "Business Development Specialist",
      company: "EDUVERSITY"
    }],

    links: {
      github: "https://github.com/nakshatrameena",
      linkedin: "https://linkedin.com/in/nakshatrameena",
      portfolio: "https://nakshatrameena.github.io/portfolio/"
    },

    role: "Software Development Engineer",

    techStack: [
      "Node.js",
      "TypeScript",
      "Express",
      "Prisma",
      "PostgreSQL"
    ]
  });
};
