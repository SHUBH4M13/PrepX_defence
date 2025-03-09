import { BrowserRouter as Router, Routes, Route } from "react-router"; 

import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import NDA from "./Components/Pages/NDA";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/NDA" element={<NDA />} />
      </Routes>
    </Router>
  );
}

export default App;
