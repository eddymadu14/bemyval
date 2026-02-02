import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Valentine from "./pages/basic";
import Home from "./pages/sales";
import Create from "./pages/create";
import CreateMid from "./pages/createmid";
import CreatePremium from "./pages/createpremium";
import ValentineMid from "./pages/mid";
import ValentinePremium from "./pages/premium";

function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Valentine />} />
      <Route path="/basic" element={<Valentine />} />
      <Route path="/love" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/createmid" element={<CreateMid />} />
      <Route path="/createpremium" element={<CreatePremium />} />
      <Route path="/mid" element={<ValentineMid />} />
      <Route path="/premium" element={<ValentinePremium />} />
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