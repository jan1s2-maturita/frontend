// src/components/FlagSubmit.jsx
import { useState } from "react";
import apiClient from "../api/client";

export default function FlagSubmit() {
  const [flag, setFlag] = useState("");
  const [response, setResponse] = useState("");

  const submitFlag = async () => {
    try {
      await apiClient.post("/flag-submit/1", { flag });
      setResponse("Flag submitted successfully!");
    } catch {
      setResponse("Invalid flag, please try again.");
    }
  };

  return (
    <div>
      <h2>Submit Flag</h2>
      <input placeholder="Enter flag" onChange={(e) => setFlag(e.target.value)} />
      <button onClick={submitFlag}>Submit</button>
      {response && <p>{response}</p>}
    </div>
  );
}

