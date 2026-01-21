import app from "./app";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}, http://localhost:4000/profile, http://localhost:4000/health`);
});