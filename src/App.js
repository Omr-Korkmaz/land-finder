import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import StudentList from "./pages/studentList/StudentList";
import StudentDetail from "./pages/studentDetail/StudentDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";




academic




function App() {

  return (
    <div >
      <BrowserRouter>
      <Sidebar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="academic" element={<Academic />} />
            <Route path="academic/manage-classes" element={<ManageClasses />} />
            <Route path="login" element={<Login />} />
            <Route path="student">
              <Route index element={<StudentList />} />
              <Route path=":studentId" element={<StudentDetail />} />
            
            </Route>
           
          </Route>
          <Route path="*" element={<> not found</>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
