import  "./Animals.css"
import {Link} from 'react-router-dom'
function Animals({title,description,image,id}) {

    return(
        <div className="animal">
            <Link to = {`/Photos/${id}`}>
            <div className="title"> <h3> {title} </h3> </div>
            <div className="description"> <p> {description} </p> </div>
            <div className="image"> <img src={image} alt="" /> </div>
            </Link> 
        </div>
    )
}

export default Animals