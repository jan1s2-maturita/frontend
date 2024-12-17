// src/components/RunningInstances.jsx
import { useEffect, useState } from "react";
import apiClient from "../api/client";

export default function RunningInstances() {
  const [instances, setInstances] = useState([]);

  useEffect(() => {
    const fetchInstances = async () => {
      const response = await apiClient.get("/lister/running/");
      setInstances(response.data);
    };

    fetchInstances();
  }, []);

  return (
    <div>
      <h2>Running Instances</h2>
      <ul>
        {instances.map((instance) => (
          <li key={instance}>{instance}</li>
        ))}
      </ul>
    </div>
  );
}

