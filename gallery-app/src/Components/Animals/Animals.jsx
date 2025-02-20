import  "./Animals.css"
function Animals({title,description,image,id}) {

    return(
        <div className="animal">
            <div className="title"> <h3> {title} </h3> </div>
            <div className="description"> <p> {description} </p> </div>
            <div className="image"> <img src={image} alt="" /> </div>
            
        </div>
    )
}

export default Animals