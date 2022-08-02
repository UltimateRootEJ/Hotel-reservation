import '../css/home.css'
import NavBar from './navbar'
import Header from './header'
import { db } from './firebase'
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Display from './display';
import UserProfile from './userProfile';

// import Featured from './featured'
// import PropertyList from './propertyList'
// import Footer from './footer'
// import FeaturedProperties from './featuredproperties'
// import MailList from './mailList'
// import { useNavigate } from 'react-router-dom'
// import background from '../images/hotelmg.jpg'
// import Register from './register'


export default function Home() {

// javascirpt. no need for a script
    const [details, setDetails] = useState([]);
    useEffect(() => {
        const hotelCollectionRef = collection(db, "hotels")

        const getDetails = async () => {
            const data = await getDocs(hotelCollectionRef);
            setDetails(
                data.docs.map((doc) => ({
                    name: doc.data().name,
                    location: doc.data().location,
                    price: doc.data().price,
                    image: doc.data().image,
                }))
            );
        }
        getDetails();
    }, []);

    console.log(details);

    

    return (
        <div>
            <div className="homeHeader" >

                {/*These are components inside home component
                  */}
                <NavBar/>    
                <Header />
        
            </div>

            <Display />






        </div>

    )
}

