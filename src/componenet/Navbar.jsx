
import { useState } from "react";
import "./navbar.css"
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';

function Navbar() {
//  make navbar black in normal postion 
// transparent when scrolled
const [isScrolled,setIsScrolled]=useState(false)
window.onscroll=()=>{
  setIsScrolled(window.pageYOffset===0?false:true)
  return()=>(window.onscroll=null)
}


  return (
    <div className={isScrolled ? "navbar scrolled":"navbar"}>
        <div className="container">
            <div className="left">
                <img  src='https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png'/>
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New & Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
              <Search className="icons"/>
              <span>KID</span>
              <Notifications className="icons"/>
              <img src='https://avatars.githubusercontent.com/u/73379696?v=4'/>
              <div className="profile">
              <ArrowDropDown className="icons"/>
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar