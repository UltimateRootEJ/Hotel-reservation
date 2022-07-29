import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faSignOut,
    faUser,
    faInfo,
    faPlane,
    faTaxi,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import "../css/menu.css";
  import { DateRange } from "react-date-range";
  import { useState } from "react";
  import "react-date-range/dist/styles.css"; // main css file
  import "react-date-range/dist/theme/default.css"; // theme css file
  import { format } from "date-fns";
  import { useNavigate } from "react-router-dom";
  
  const Menu = ({ type }) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
      adult: 1,
      children: 0,
      room: 1,
    });
  
    const navigate = useNavigate();
  
    const handleOption = (name, operation) => {
      setOptions((prev) => {
        return {
          ...prev,
          [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
      });
    };
  
  

    const handleLogout=(()=>
    {

      navigate('/login')
    })

    const handleHome=(()=>
    {

      navigate('/home')
    })

 const handleBookings=(()=>
 {

   navigate('/booking')
 })

 const handleProfile=(()=>
 {

   navigate('/userProfile')
 })
  
    return (
      <div className="header">
       
        
          <div className="headerHomeList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span onClick={handleHome}
              >Accomdation</span>
              
            </div>
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faInfo} />
              <span onClick={handleBookings}
              >Booking</span>
            </div>
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faUser} />
              <span onClick={handleProfile}
              >Profile</span>
            </div>
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faSignOut} />
              <span onClick={handleLogout}
              >Logout</span>
            </div>
            
          </div>
       
        </div>
    
    );
  };
  
  export default Menu;
  