
import { Link } from "react-router-dom";

function Tour(props) {
  console.log(props);
  return props.tour.map((element) => {
    return (

      <div key={element.id}>
        <Link to={`/city/${element.id}`}>
        <h1>{element.name}</h1>
        </Link>
        
        <img src={element.image} alt="" />
        <hr />
      </div>
    );
  });
}
export default Tour;
