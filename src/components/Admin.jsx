// src/components/Admin.jsx
import { useState } from "react";
import apiClient from "../api/client";

export default function Admin() {
  const [challenge, setChallenge] = useState({
    name: "",
    description: "",
    image: "",
    ports: "",
    category: "",
  });
  const [flag, setFlag] = useState({
    flag: "",
    challenge_id: "",
    points: "",
  });
  const [healthStatus, setHealthStatus] = useState("");

  const handleChallengeSubmit = async () => {
    try {
      const portsArray = challenge.ports.split(",").map((port) => parseInt(port.trim(), 10));
      const response = await apiClient.post("/admin/challenge", {
        ...challenge,
        ports: portsArray,
      });
      alert("Challenge created successfully!");
    } catch (err) {
      alert("Error creating challenge: " + err.response?.data?.detail || err.message);
    }
  };

  const handleFlagSubmit = async () => {
    try {
      await apiClient.post("/admin/flag", flag);
      alert("Flag created successfully!");
    } catch (err) {
      alert("Error creating flag: " + err.response?.data?.detail || err.message);
    }
  };

  const checkHealth = async () => {
    try {
      const response = await apiClient.get("/admin/health");
      setHealthStatus(response.data.status);
    } catch (err) {
      setHealthStatus("Error: " + err.message);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      {/* Challenge Creation Form */}
      <div>
        <h2>Create Challenge</h2>
        <input
          placeholder="Name"
          value={challenge.name}
          onChange={(e) => setChallenge({ ...challenge, name: e.target.value })}
        />
        <input
          placeholder="Description"
          value={challenge.description}
          onChange={(e) => setChallenge({ ...challenge, description: e.target.value })}
        />
        <input
          placeholder="Image"
          value={challenge.image}
          onChange={(e) => setChallenge({ ...challenge, image: e.target.value })}
        />
        <input
          placeholder="Ports (comma-separated)"
          value={challenge.ports}
          onChange={(e) => setChallenge({ ...challenge, ports: e.target.value })}
        />
        <input
          placeholder="Category"
          value={challenge.category}
          onChange={(e) => setChallenge({ ...challenge, category: e.target.value })}
        />
        <button onClick={handleChallengeSubmit}>Create Challenge</button>
      </div>

      {/* Flag Creation Form */}
      <div>
        <h2>Create Flag</h2>
        <input
          placeholder="Flag"
          value={flag.flag}
          onChange={(e) => setFlag({ ...flag, flag: e.target.value })}
        />
        <input
          placeholder="Challenge ID"
          value={flag.challenge_id}
          onChange={(e) => setFlag({ ...flag, challenge_id: e.target.value })}
        />
        <input
          placeholder="Points"
          value={flag.points}
          onChange={(e) => setFlag({ ...flag, points: e.target.value })}
        />
        <button onClick={handleFlagSubmit}>Create Flag</button>
      </div>

      {/* Health Check */}
      <div>
        <h2>Backend Health</h2>
        <button onClick={checkHealth}>Check Health</button>
        {healthStatus && <p>Status: {healthStatus}</p>}
      </div>
    </div>
  );
}

