import { BrowserRouter as Router, Routes, Route } from "react-router"; 
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
