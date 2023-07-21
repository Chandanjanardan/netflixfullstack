import {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAdn } from "@fortawesome/free-brands-svg-icons"


import "./navbar.css"

function Navbar() {
   const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://otpless.com/auth.js";
      script.id = "otplessIdScript"
      document.body.appendChild(script);
    }
  useEffect(() => {
    
    loadScript()
    window.otpless = (otplessUser) => {
       
      console.log(otplessUser)
    };
    return () => {
      let scr = document.getElementById('otplessIdScript')
      document.body.removeChild(scr);
    };
  }, []);
  return (
    <div className='navbar'>
        <div className="container">
            <div className="left">
                <img src='https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png'/>
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New & Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
            <FontAwesomeIcon icon={faAdn} />
            <div id='otpless' custom="true">otpless</div>
            
            </div>
        </div>
    </div>
  )
}

export default Navbar