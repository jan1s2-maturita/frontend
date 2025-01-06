// src/components/Console.jsx
import { useState } from "react";
import apiClient from "../api/client";

export default function AccessBox() {
  const [command, setCommand] = useState("");
  const [commandResult, setCommandResult] = useState("");
  const [logs, setLogs] = useState("");
  const [healthStatus, setHealthStatus] = useState("");

  // Execute Command
  const executeCommand = async () => {
    try {
      const response = await apiClient.post("/exec", { cmd: command });
      setCommandResult("Command executed successfully!");
    } catch (err) {
      setCommandResult("Error executing command: " + err.response?.data?.detail || err.message);
    }
  };

  // Fetch Logs
  const fetchLogs = async () => {
    try {
      const response = await apiClient.get("/logs");
      setLogs(response.data.logs);
    } catch (err) {
      setLogs("Error fetching logs: " + err.response?.data?.detail || err.message);
    }
  };

  // Create Access Box
  const createAccessBox = async () => {
    try {
      await apiClient.post("/create");
      alert("Access box created successfully!");
    } catch (err) {
      alert("Error creating access box: " + err.response?.data?.detail || err.message);
    }
  };

  // Check Health
  const checkHealth = async () => {
    try {
      const response = await apiClient.get("/health");
      setHealthStatus(response.data.status);
    } catch (err) {
      setHealthStatus("Error: " + err.message);
    }
  };

  return (
    <div>
      <h1>Console</h1>

      {/* Command Execution */}
      <div>
        <h2>Execute Command</h2>
        <input
          type="text"
          placeholder="Enter command"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
        />
        <button onClick={executeCommand}>Run</button>
        {commandResult && <p>{commandResult}</p>}
      </div>

      {/* Logs */}
      <div>
        <h2>Logs</h2>
        <button onClick={fetchLogs}>Fetch Logs</button>
        <div
          style={{
            marginTop: "10px",
            maxHeight: "200px",
            overflowY: "scroll",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          <pre>{logs}</pre>
        </div>
      </div>

      {/* Access Box */}
      <div>
        <h2>Access Box</h2>
        <button onClick={createAccessBox}>Create Access Box</button>
      </div>

      {/* Health Check */}
      <div>
        <h2>Health Check</h2>
        <button onClick={checkHealth}>Check Health</button>
        {healthStatus && <p>Status: {healthStatus}</p>}
      </div>
    </div>
  );
}

