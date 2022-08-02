
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/booking.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import Menu from "./menu";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";

export default function Booking() {


    const [booking, setBooking] = useState([]);


    useEffect(() => {
        const bookingCollectionRef = collection(db, "bookings")

        const getbooking = async () => {
            const data = await getDocs(bookingCollectionRef);
            setBooking(
                data.docs.map((doc) => ({
                    hotelId: doc.data().hotelId,
                    numAdults: doc.data().numAdults,
                    numChildren: doc.data().numChildren,
                    numRooms: doc.data().numRooms,
                    sumDays: doc.data().sumDays,
                    image: doc.data().image,
                    userId: doc.data().userId,
                    sum: doc.data().sum,
                    hotelName: doc.data().hotelName,
                    location: doc.data().location,
                }))
            );
        }
        getbooking();
    }, []);

    let bookings = [];
    for (let i = 0; i < booking.length; i++) {
        if (booking[i].userId === auth.currentUser.uid) {
            bookings.push(booking[i]);

        }
        console.log(bookings)
        console.log(auth.currentUser.uid)


    }



    return (
        <>
            <Menu />

            {bookings.map((info, id) =>
            (
                //             <div className="bookings" key={id}>
                // <h1>{info.hotelName}</h1>
                //             </div>
                <div className="cardDetails" key={id}>


                    <div className="cardImage">
                        <img
                            className="hotel-pic"
                            src={info.image}
                            alt={info.name}
                        />
                    </div>
                    <div className="detailsH">
                        <p className="hotel-name">Hotel</p>
                        <p>{info.hotelName}</p>
                        <p>Adults: {info.numAdults}</p>
                        <p>Children: {info.numChildren}</p>
                        <p>Rooms: {info.numRooms}</p>
                        <p>Total:R {info.sum}</p>
                        {/* <textarea> {hotel.description}</textarea> */}
                    </div>
             
                </div>



            ))}
        </>
    )
}