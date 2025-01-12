// src/components/FlagSubmit.jsx
import { useState } from "react";
import apiClient from "../api/client";

export default function FlagSubmit() {
  const [flag, setFlag] = useState("");
  const [response, setResponse] = useState("");
  const [challengeId, setChallengeId] = useState(1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10

  const submitFlag = async () => {
    try {
      await apiClient.post(`/flag-submit/${challengeId}`, { flag });
      setResponse("Flag submitted successfully!");
    } catch {
      setResponse("Invalid flag, please try again.");
    }
  };

  return (
    <div>
      <h2>Submit Flag</h2>
      <input placeholder="Enter challenge ID" onChange={(e) => setChallengeId(e.target.value)} />
      <input placeholder="Enter flag" onChange={(e) => setFlag(e.target.value)} />
      <button onClick={submitFlag}>Submit</button>
      {response && <p>{response}</p>}
    </div>
  );
}

