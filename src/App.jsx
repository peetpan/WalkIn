import "./App.css";
import { Routes, Route } from "react-router-dom";
import Appointments from "./pages/appointments";
import Login from "./pages/Login/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/appointments" element={<Appointments />} />
    </Routes>
  );
}
