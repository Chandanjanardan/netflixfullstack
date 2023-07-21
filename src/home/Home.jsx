

import "./home.css"
import Navbar from '../componenet/Navbar'
import Featured from "../componenet/featured/Featured"


function Home() {
  return (
    <div className="home">
    <Navbar/>
    <img width="100%" height="100%" src="https://cdn.pixabay.com/photo/2023/07/03/08/05/turkey-8103602_1280.jpg"/>
    <Featured/>
    
    
    </div>
  )
}

export default Home
