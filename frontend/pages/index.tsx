"use client"; // ensures client-side rendering

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const [health, setHealth] = useState("");
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!API_URL) return;

    const fetchData = async () => {
      try {
        const healthRes = await fetch(`${API_URL}/health`);
        const healthData = await healthRes.json();
        setHealth(healthData.status);

        const profileRes = await fetch(`${API_URL}/profile`);
        const profileData = await profileRes.json();
        setProfile(profileData);

      } catch (err) {
        console.error("Error fetching API", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>ME API Playground</h1>

      <h2>Health</h2>
      <p>{loading ? "Loading health..." : health}</p>

      <h2>Profile</h2>
      <h2>NAKSHATRA MEENA</h2>
      
      {loading ? (
        <p>Loading profile... 
         <h1> Profile is loaded of GREAT NAKSHATRA MEENA.</h1></p>
      
      ) : (
        <pre>{JSON.stringify(profile, null, 2)}</pre>
      )}
    </main>
  );
}
