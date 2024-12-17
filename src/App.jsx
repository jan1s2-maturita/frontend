// src/App.jsx
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Challenges from "./components/Challenges";
import RunningInstances from "./components/RunningInstances";
import FlagSubmit from "./components/FlagSubmit";
import DeleteInstance from "./components/DeleteInstance";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to the CTF Portal</h1>
      <LoginForm />
      <RegisterForm />
      <Challenges />
      <RunningInstances />
      <FlagSubmit />
      <DeleteInstance />
    </div>
  );
}
