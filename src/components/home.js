import '../css/home.css'
import NavBar from './navbar'
import Header from './header'
import Featured from './featured'
import PropertyList from './propertyList'
import Footer from './footer'
import FeaturedProperties from './featuredproperties'
import MailList from './mailList'
import { useNavigate } from 'react-router-dom'
import background from '../images/hotelmg.jpg'
import Register from './register'


export default function Home() {
    return (
        <div>
            <div className="homeHeader" >
                <NavBar />
                <Header />
            </div>


            <div className="homeContainer" >
                <Featured />
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList />
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>

    )
}