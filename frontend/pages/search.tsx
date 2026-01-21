"use client";

import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function SearchProjects() {
  const [skill, setSkill] = useState("");
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!skill || !API_URL) return;
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/projects?skill=${encodeURIComponent(skill)}`);
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error("Error fetching projects", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Search Projects by Skill</h1>

      <input
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        placeholder="Enter skill (e.g., Python)"
        style={{ padding: "8px", width: "250px", marginRight: "10px" }}
      />
      <button onClick={handleSearch} style={{ padding: "8px 12px" }}>Search</button>

      {loading && <p>Loading projects...</p>}

      <ul>
        {projects.map((project: any, index: number) => (
          <li key={index}>
            <strong>{project.title}</strong>: {project.description} <br />
            <a href={project.links?.github} target="_blank" rel="noopener noreferrer">GitHub</a> |{" "}
            <a href={project.links?.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
