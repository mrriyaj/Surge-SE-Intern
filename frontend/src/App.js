import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import AdminDashboard from "./components/admin/dashboard";
import StudentDashboard from "./components/student/dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} /> 
              <Route path="/AdminDashboard" element={<AdminDashboard />} />   
              <Route path="/StudentDashboard" element={<StudentDashboard />} />   
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
