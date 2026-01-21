import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import profileRoutes from "./routes/profile";
import queryRoutes from "./routes/query";
import healthRoutes from "./routes/health";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", healthRoutes);
app.use("/profile", profileRoutes);
app.use("/query", queryRoutes);

export default app;
