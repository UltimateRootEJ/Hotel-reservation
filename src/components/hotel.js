
import NavBar from "./navbar";
import Header from "./header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MailList from "./mailList";
import '../css/hotel.css'
import Footer from "./footer";
import { useParams } from "react-router-dom";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
  faPerson,
  faCalendar,
  faCalendarDays
} from "@fortawesome/free-solid-svg-icons";
import { doc, getDoc,getDocs } from "firebase/firestore";
import { db, auth } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

export default function Hotel() {

  const { id } = useParams()




  const getDocDetails = async (id) => {
    const docref = doc(db, 'hotels', id)
    try {
      const docSnap = await getDoc(docref);
      if (docSnap.exists()) {

        setHotels(docSnap.data())
      } else {

      }

    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getDocDetails(id)

  }, [])


  const [hotels, setHotels] = useState([]);

  //setting dates   
  const [destination, setDestination] = useState("");
  const [sum, setSum] = useState(0)
  const [sumDays, setSumDays] = useState(0)
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

  //handling options
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSum = (() => {



    const rateChild = 100;

    const diffdAYS = date[0].endDate - date[0].startDate;
    const days = diffdAYS / (1000 * 60 * 60 * 24);
    setSumDays(days);




    const numAdults = options.adult;
    const price = parseFloat(hotels.price)
    const numChildren = options.children;
    const numRooms = options.room;

    const finalAmount = ((numRooms + sumDays) * price)

    setSum(finalAmount)
    console.log(setSum)

  })


  const [users, setUsers] = useState([]);
  const[currentUser,setCurrentUser]=useState([]);


  useEffect(() => {
      const userCollectionRef = collection(db, "users")

      const getUsers = async () => {
          const data = await getDocs(userCollectionRef);
          setUsers(
              data.docs.map((doc) => ({
                  name: doc.data().name,
                  location: doc.data().location,
                  userId: doc.data().userId,
                  email: doc.data().email,
                  surname: doc.data().surname,
              }))
          );
      }
      getUsers();
  }, []);

  let user = [];
  for (let i = 0; i < users.length; i++) {
      if (users[i].userId === auth.currentUser.uid) {
          user.push(users[i]);
          // setCurrentUser(user);

      }
       console.log(user[0])
   

      //s5TIrTAY9NX8LQeINNw65nNuJzw2 //Steve@gmail.com
      // console.log(user)
  }

  const handleBooking = (() => {
    const collectionRef = collection(db, "bookings");
    addDoc(collectionRef, {

      hotelId: id,
      numAdults: options.adult,
      numChildren : options.children,
      numRooms: options.room,
      sumDays: sumDays,
      sum: sum,
      image:hotels.image,
      hotelName:hotels.name,
      hotelLocation:hotels.location,
      userId: auth.currentUser.uid,
      name:user[0].name,
      surname:user[0].surname,
      email:user[0].email,
   

    })
      .then(() => {
        alert("Hotel added successfully", { type: "success" });

      })
      .catch((err) => {
        alert("Error adding hotel", { type: "error" });
      });



    // };

    // addDoc(collectionRef, booking).then(() => {
    //   alert("added successfully")
    // }).catch((error) => { console.log(error); alert("Error while adding") })


  })


  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="hotelContainer">

        <div className="hotelWrapper">
          <h1 className="hotelTitle">{hotels.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{hotels.location}</span>
          </div>
        
          
          <div className="hotelImages">

            <div className="hotelImgWrapper" >
              <img

                src={hotels.image}
                alt=""
                className="hotelImg"
              />
            </div>
            <div className="hotelDetailsPrice">

              <h1>Perfect for a 9-night stay!</h1>
              <div className="handleDates">

                <div className="BookingDates">
                  <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText"
                  >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}

                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                      minDate={new Date()}
                    />
                  )}
                </div>
                <div className="BookingDates">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="headerSearchText"
                  >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.adult <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.children <= 0}
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.room <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="BookingDates">
                  <button className="calculateBtn" onClick={handleSum}>
                    Calculate
                  </button>
                </div>
              </div>
              <span>
                Days: {sumDays} Children: {options.children} Adults:{options.adult} Rooms: {options.room}
              </span>
              <h2>
                <b>R{hotels.price}</b> (per night  )

                (:Amount Due: <b>R{sum}</b> )
              </h2>
              {/* <label>
                <b>R{hotels.price}</b> (per night)
              </label> */}
              <button onClick={handleBooking}>Book Now!</button>
            </div>
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Description</h1>
              <p className="hotelDesc">{hotels.description}
              </p>
            </div>

          </div>
        </div>

      </div>


    </div>

  );
}