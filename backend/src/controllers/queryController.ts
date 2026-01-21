import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * GET /projects?skill=python
 */
export const getProjectsBySkill = async (req: Request, res: Response) => {
  const { skill } = req.query;

  if (!skill) {
    return res.status(400).json({ error: "skill query param required" });
  }

  try {
    const projects = await prisma.project.findMany({
      where: {
        profile: {
          skills: {
            some: {
              name: {
                equals: String(skill),
                mode: "insensitive",
              },
            },
          },
        },
      },
      select: {
        title: true,
        description: true,
        links: true,
      },
    });

    res.json(projects);
  } catch {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
};
