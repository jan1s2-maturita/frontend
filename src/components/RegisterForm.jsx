// src/components/RegisterForm.jsx
import { useState } from "react";
import apiClient from "../api/client";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    try {
      await apiClient.post("/auth/register", { username, password, email });
      setMessage("Registration successful! Please log in.");
    } catch (err) {
      setMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      {message && <p>{message}</p>}
    </div>
  );
}

