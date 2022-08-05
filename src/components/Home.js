

import Navbar from "./Navbar";
import Header from "./Header";
import MailList from "./MailList";
import Footer from "./Footer";
import PropertyList from "./PropertyList";
import Featured from "./Featured";
import FeaturedProperties from "./FeaturedProperties";
import "../css/home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
