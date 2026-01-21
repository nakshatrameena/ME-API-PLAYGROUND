import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

/**
 * GET /projects?skill=python
 */
router.get("/projects", async (req, res) => {
  const skill = req.query.skill as string;

  const projects = await prisma.project.findMany({
    where: {
      skills: {
        some: {
          name: {
            equals: skill,
            mode: "insensitive",
          },
        },
      },
    },
  });

  res.json(projects);
});

/**
 * GET /skills/top
 */
router.get("/skills/top", async (_, res) => {
  const skills = await prisma.skill.groupBy({
    by: ["name"],
    _count: { name: true },
    orderBy: {
      _count: { name: "desc" },
    },
  });

  res.json(skills);
});

/**
 * GET /search?q=backend
 */
router.get("/search", async (req, res) => {
  const q = req.query.q as string;

  const results = await prisma.project.findMany({
    where: {
      OR: [
        { title: { contains: q, mode: "insensitive" } },
        { description: { contains: q, mode: "insensitive" } },
      ],
    },
  });

  res.json(results);
});

export default router;
