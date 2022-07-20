import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/home.js";
import List from "./components/list.js";
import Hotel from "./components/hotel.js";
import Login from "./components/login.js";
import Register from "./components/register.js";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
