// src/components/Challenges.jsx
import { useEffect, useState } from "react";
import apiClient from "../api/client";

export default function Challenges() {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      const response = await apiClient.get("/lister/");
      setChallenges(response.data);
    };

    fetchChallenges();
  }, []);

  return (
    <div>
      <h2>Challenges</h2>
      <ul>
        {Object.entries(challenges).map(([id, name]) => (
          <li key={id}>{`${id}: ${name}`}</li>
        ))}
      </ul>
    </div>
  );
}

