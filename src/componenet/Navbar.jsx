
import SearchIcon from '@material-ui/icons/Search';



import "./navbar.css"
import { Search } from '@material-ui/icons';

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
              <Search/>
            
            
            </div>
        </div>
    </div>
  )
}

export default Navbar