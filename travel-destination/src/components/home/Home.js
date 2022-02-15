import Footer from "../footer/Footer"
import Tours from "../tours/Tours"
import db from "/home/ahmad/Travel-Destination/travel-destination/src/data/db.json"

function Home (){
    return(
        <div>
        <Tours data ={db}/>
        <Footer/>
        </div> 
    )
    
}
export default Home;