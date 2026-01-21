import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { getProfile } from "../controllers/profileController";


const prisma = new PrismaClient();
const router = Router();

router.get("/", getProfile);

/**
 * Create profile
 */
router.post("/", async (req, res) => {
  try {
    const profile = await prisma.profile.create({
      data: req.body,
    });
    res.json(profile);
  } catch (error) {
    res.status(400).json({ error: "Failed to create profile" });
  }
});

/**
 * Get profile
 */
router.get("/", async (_, res) => {
  const profile = await prisma.profile.findFirst({
    include: {
      skills: true,
      projects: true,
      links: true,
    },
  });
  res.json(profile);
});

/**
 * Update profile
 */
router.put("/", async (req, res) => {
  const { id, ...data } = req.body;

  try {
    const profile = await prisma.profile.update({
      where: { id },
      data,
    });
    res.json(profile);
  } catch {
    res.status(400).json({ error: "Failed to update profile" });
  }
});

export default router;
