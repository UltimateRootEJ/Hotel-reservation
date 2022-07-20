import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import "../css/header.css";
  import { useNavigate } from "react-router-dom";
  
  const LoginHeader = ({ type }) => {

  
    const navigate = useNavigate();
  
   

 
  
    return (
      <div className="header">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Accomdation</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>
          </div>
          {type !== "list" && (
            <>
              <h1 className="headerTitle">
                Enjoy your Lixurious stay with us.
              </h1>
              <p className="headerDesc">
                Participate in our weekly surveys to stand a chance to win 50% off your booking.
              </p>
        
              
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default LoginHeader;
  