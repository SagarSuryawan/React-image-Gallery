import { useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react"
import "./ImageDetails.css"

function ImageDetails() {
    const {id} = useParams()
    console.log(id)
    const [image,setImage] = useState({})

    async function download() {
            const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
            console.log("Sagar",response)

            setImage({
                title:response.data.photo.title,
                image:response.data.photo.url,
                description:response.data.photo.description
            })
    }

    useEffect(()=>{
        download()
    },[])

    return(
        <div className="ImagesDetails">
            
            <div className="title"><h2>{image.title}</h2></div>
            <div className="description">{image.description}</div>
            <div id="photo-box">
                <img  className= "photo" src={image.image} alt="" />
            </div>
           
            
        </div>
    )
    
}

export default ImageDetails