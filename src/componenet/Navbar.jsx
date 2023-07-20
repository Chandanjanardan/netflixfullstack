import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAdn } from "@fortawesome/free-brands-svg-icons"


import "./navbar.css"

function Navbar() {
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
            
            </div>
        </div>
    </div>
  )
}

export default Navbar