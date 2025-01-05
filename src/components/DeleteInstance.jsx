// src/components/DeleteInstance.jsx
import { useState } from "react";
import apiClient from "../api/client";

export default function DeleteInstance() {
  const [challengeId, setChallengeId] = useState("");

  const deleteInstance = async () => {
    try {
      await apiClient.delete(`/deleter/${challengeId}`);
      alert("Instance deleted successfully!");
    } catch {
      alert("Failed to delete instance.");
    }
  };

  return (
    <div>
      <h2>Delete Instance</h2>
      <input
        placeholder="Challenge ID"
        onChange={(e) => setChallengeId(e.target.value)}
      />
      <button onClick={deleteInstance}>Delete</button>
    </div>
  );
}

