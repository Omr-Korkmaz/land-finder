import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import StudentList from "./pages/studentList/StudentList";
import StudentDetail from "./pages/studentDetail/StudentDetail";
import CreateStudent from "./pages/createStudent/CreateStudent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="CreateStudent" element={<CreateStudent />} />
          <Route path="login" element={<Login />} />
          <Route path="student" element={<StudentList />} />
          <Route path="student/:studentId" element={<StudentDetail />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
