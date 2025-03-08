import Home from "./Components/Pages/Home"
import SignUpLogin from "./Components/Pages/Login"
import { BrowserRouter, Route, Router, Routes } from "react-router"

function App() {

  return (
    <Router>
      <Routes>
        < Route path="/" element = {<Home/>} />
        < Route path="/Login" element = {<Login/>} />
      </Routes>
    </Router>
  )
}

export default App
