import "../header/Header.css"
import { Link } from "react-router-dom";
function Header (){
    return(
        <>
        <header>
        <h1>
            Welcome to Travel-Destination 
        </h1>
        <nav>
            <Link to="/"><h2>Home</h2></Link>   
        </nav>
        </header>
        
        </>
    )
}
export default Header;