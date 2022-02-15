import { useParams } from "react-router-dom";
import { useState } from 'react';

function TourDetails (props){
   

   let {id} = useParams();
   console.log(id);
   let newArr=props.tour.filter((ele)=> ele.id === id );
   console.log(newArr);

   const [isReadMore,setIsReadMore]=useState(true);
   
   function showtext(){
    setIsReadMore(!isReadMore)
   };
    return(
     
     <div>
         
         <h1>{newArr[0].name}</h1>
         <p>
         <h3>Info:</h3>
         {isReadMore ? newArr[0].info.slice(0, 150) : newArr[0].info}
         <button onClick={showtext}>
         {isReadMore ? "...read more" : " show less"}  
          </button> 
          </p>
         
         <p><h3>Travell price:</h3>{newArr[0].price}$</p>
         
         <img src={newArr[0].image} alt="" />


     </div>

    )
}
export default TourDetails;