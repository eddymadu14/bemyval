
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Valentine from "./pages/basic";
import Home from "./pages/sales";
import Create from "./pages/create";
import ValentineMid from "./pages/mid";
import ValentinePremium from "./pages/premium";






function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      
      <Route path="/basic" element={<Valentine/>} />
      <Route path="/love" element={<Home />} />
      <Route path="/create" element={<Create />} />
            <Route path="/mid" element={<ValentineMid />} />
                  <Route path="/premium" element={<ValentinePremium />} />





      
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