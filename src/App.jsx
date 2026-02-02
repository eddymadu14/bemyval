
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Teethpen";
import Valentine from "./pages/val";



function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      
      <Route path="/val" element={<Valentine/>} />
     <Route path="/val" element={<Valentine />} />

      
      <Route path="/" element={<Valentine />} />
      
      
         {/* <Route path="verify-success" element={< VerifyEmailSuccess />} />
         <Route path="verify-failed" element={< VerifyEmailFailed />} />    

     */}
    
    </Routes>
  );
}

function App() {
  return (
 
      <Router>
        <AppRoutes />
      </Router>

  );
}

export default App;