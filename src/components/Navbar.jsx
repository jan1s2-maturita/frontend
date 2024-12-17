// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <a href="/">Home</a> | <a href="/register">Register</a> |{" "}
      <a href="/challenges">Challenges</a> | <a href="/instances">Instances</a>
    </nav>
  );
}

