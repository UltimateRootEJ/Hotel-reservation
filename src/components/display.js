import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import '../css/display.css'
import { faLocation,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { db } from "./firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./footer";
import MailList from "./mailList";




export default function Display() {
  const navigate=useNavigate();
  const [hotels, setSetHotels] = useState([]);
  const handleHotel=(()=>{
navigate('/hotel')
  })
 

  useEffect(() => {
    const collectionRef = collection(db, "hotels");
    const q = query(collectionRef, orderBy("location", "desc"));
    onSnapshot(q, (snapshot) => {
      const hotels = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSetHotels(hotels);
      console.log(hotels);
    });
  }, []);
  return (
    <div className="">
      {hotels.length === 0 ? (
        <p>No hotels found!</p>
      ) : (
        hotels.map(
          ({
            id,
            name,
            description,
            image,
            price,
            location,
          }) => (
            <div className="DisplayDiv" key={id}>
       
             
        <img
          src={image}
          alt=""
          className="siImg"
        />
        <div className="siDesc">
          <h1 className="siTitle">{name}</h1>
          <span className="siDistance"><FontAwesomeIcon icon={faLocationDot }/> {location}</span>

          <span className="siSubtitle">
            {description}
          </span>
       
          <span className="siTaxiOp">Free cancellation </span>
        
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">R {price}</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <Link to={`/hotel/${id}`}>
            <button  className="siCheckButton">See availability</button>
            </Link>
          </div>
        </div>
      </div>
           
          )
        )
      )}
      <MailList/>
    </div>
  );
}
