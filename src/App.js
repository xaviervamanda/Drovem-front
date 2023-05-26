import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import StudentPage from "./pages/StudentPage";
import ProjectPage from "./pages/ProjectPage";
import AllStudentsPage from "./pages/AllStudentsPage";
import AllProjectsPage from "./pages/AllProjectsPage";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/students" element={<AllStudentsPage />} />
        <Route path="/projects" element={<AllProjectsPage />} />
      </Routes>

    </BrowserRouter>
  )
}