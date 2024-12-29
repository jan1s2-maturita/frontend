// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Challenges from "./components/Challenges";
import RunningInstances from "./components/RunningInstances";
import FlagSubmit from "./components/FlagSubmit";
import DeleteInstance from "./components/DeleteInstance";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div id="content">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/instances" element={<RunningInstances />} />
          <Route path="/flag-submit" element={<FlagSubmit />} />
          <Route path="/delete-instance" element={<DeleteInstance />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}
