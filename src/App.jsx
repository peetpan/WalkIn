import "./App.css";
import { Routes, Route } from "react-router-dom";
import Appointments from "./pages/Appointments";
import Login from "./pages/Login/Login";
import Success from "./pages/Success/Success";
import PersonalInfomation from "./pages/Create-an-account/Personal-Infomation/Personal-Infomation";
import Qualifications from "./pages/Create-an-account/Qualifications/Qualifications";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/success" element={<Success />} />
      <Route path="/personal-information" element={<PersonalInfomation />} />
      <Route path="/qualifications" element={<Qualifications />} />
    </Routes>
  );
}
