import "../tours/Tours.css";
import Tour from "/home/ahmad/Travel-Destination/travel-destination/src/components/tours/tour/Tour.js";
//import db from "/home/ahmad/Travel-Destination/travel-destination/src/data/db.json"

function Tours(props){
    //console.log(props)
    return(
      <>
      <Tour tour={props.data}/>
      </>
      
       )
       };
export default Tours;

// props.data.map(element => {
//   return(
//   <div>
//       <h1>{element.name}</h1>
//       <img src={element.image} alt=""/>
//       <hr/>
//   </div>
//     )

//     })