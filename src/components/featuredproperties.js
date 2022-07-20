
import '../css/featuredproperties.css'
import { faLocation,
faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function FeaturedProperties()
{
 
      return (
        <div className="fp">
          <div className="fpItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/27890297.jpg?k=6877ccbcaa9a1bcf5b59cb04bb32fbdf27b58393d383b1b00e0002135e7b1698&o=&hp=1"
              alt=""
              className="fpImg"
            />
            <span className="fpName">Magoebaskloof Hotel</span>
            <span className="fpCity">      <FontAwesomeIcon icon={faLocationDot}/>Tzaneen</span>
            <span className="fpPrice">Starting from ZAR 1,146.65</span>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
          <div className="fpItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/34231340.jpg?k=3518cae473d4a78d46041a3cafcb8b31bc55a884f8d2445b9d56fe18f9127ce8&o=&hp=1"
              alt=""
              className="fpImg"
            />
            <span className="fpName">Ivory Lodge Bendor</span>
            <span className="fpCity">
                <FontAwesomeIcon icon={faLocationDot}/>
                    Polokwane</span>
            <span className="fpPrice">Starting from ZAR 2,420</span>
            <div className="fpRating">
              <button>9.3</button>
              <span>Exceptional</span>
            </div>
          </div>
          <div className="fpItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/222701990.jpg?k=14a51111193b5e6e2f2b6619a3ef63c7563c7557bdb91ad69b1c49cb8d30869b&o=&hp=1"
              alt=""
              className="fpImg"
            />
            <span className="fpName">77 On Burger</span>
            <span className="fpCity">      <FontAwesomeIcon icon={faLocationDot}/>Polokwane</span>
            <span className="fpPrice">Starting from ZAR 4,983</span>
            <div className="fpRating">
              <button>8.8</button>
              <span>Excellent</span>
            </div>
          </div>
          <div className="fpItem">
            <img
              src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/240504888.jpg?k=e2a479945a3948ec8fad0262c1d4746bd69c7f2bee16dbce4cbe2f7c56fd8b3d&o=&hp=1"
              alt=""
              className="fpImg"
            />
            <span className="fpName">Royal Hotel</span>
            <span className="fpCity">      <FontAwesomeIcon icon={faLocationDot}/>Polokwane</span>
            <span className="fpPrice">ZAR 826.50</span>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
        </div>
      );
    }
    