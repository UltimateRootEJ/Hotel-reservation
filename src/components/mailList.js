import '../css/mailList.css'
import background from "../images/hotelmg.jpg"

export default function MailList()
{
    const backgroundStyle={
        backgroundImage:`url(${background})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        height:'30vh'
    }

    return(
        <div className="mail" style={backgroundStyle}>
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
    )
}