import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import StudentPage from "./pages/StudentPage";
import ProjectPage from "./pages/ProjectPage";
import AllStudentsPage from "./pages/AllStudentsPage";
import AllProjectsPage from "./pages/AllProjectsPage";
import { useState } from "react";

export default function App() {
  const apiUrl = "https://drovem-ekyk.onrender.com";
  const [studentId, setStudentId] = useState("");
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<RegisterPage apiUrl={apiUrl}/>} />
        <Route path="/student" element={<StudentPage apiUrl={apiUrl} studentId={studentId}/>} />
        <Route path="/project" element={<ProjectPage apiUrl={apiUrl}/>} />
        <Route path="/students" element={<AllStudentsPage apiUrl={apiUrl} studentId={studentId} setStudentId={setStudentId}/>} />
        <Route path="/projects" element={<AllProjectsPage apiUrl={apiUrl}/>} />
      </Routes>

    </BrowserRouter>
  )
}