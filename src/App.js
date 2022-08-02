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
import Display from "./components/display.js";
import viewHotel from "./components/detailViewHotel.js";
import UserProfile from "./components/userProfile.js";
import Booking from "./components/booking.js";
// import Hotel from "./components/hotel.js";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotel/:id" element={<Hotel />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/display" element={<Display/>} />
        <Route path="/detailViewHotel" element={<viewHotel/>} />
        <Route path="/userProfile" element={<UserProfile/>} />
        <Route path="/booking" element={<Booking/>} />
        {/* <Route path="/hotel" element={<Hotel/>} /> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
