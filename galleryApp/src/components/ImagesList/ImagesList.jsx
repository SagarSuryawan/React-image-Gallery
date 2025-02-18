import {useState,useEffect} from 'react'
import axios from 'axios'
import Photos from '../Photos/Photos'


function ImagesList() {

 const [imagesUrl,setImagesUrl] = useState('https://api.slingacademy.com/v1/sample-data/photos')

 const [imagesList,setImagesList] = useState([])


 async function fetchImages() {
    const response = await axios.get(imagesUrl)

    console.log('response',response)

    const imageDetails = response.data.photos
    console.log("IndividualImages", imageDetails)

    const result = imageDetails.map((imageData)=>{

        const image = imageData
        return {
            id:image.id,
            title:image.title,
            photo:image.url,
            description:image.description
        }
    })

    console.log(result)
    setImagesList(result)

}


 useEffect(()=>{
    fetchImages()
 },[imagesUrl])

 return(
    <div className="photo">
        <div> {
           ImagesList.map((p) => <Photos photo={p.photo}/>)
        }
           </div>
    </div>
 )
    



}

export default ImagesList