// src/components/Navbar.jsx
import React from "react";
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/register">Register</Link> |{" "} 
      <Link to="/challenges">Challenges</Link> | <Link to="/instances">Instances</Link>
    {
      //<a href="/">Home</a> | <a href="/register">Register</a> |{" "}
      //<a href="/challenges">Challenges</a> | <a href="/instances">Instances</a>
    }
    </nav>
  );
}

