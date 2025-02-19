import axios from 'axios'
import { useEffect, useState } from 'react'
import Animals from '../Animals/Animals'

function ImageList() {

    const [images,setImages] = useState([])

   async function downloadImages() {
    const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos')
    const responseResults = response.data.photos
    console.log("responseResult",responseResults)

    const result = responseResults.map((item) => {
       
        return{
            title:item.title,
            description:item.description,
            image:item.url,
            id:item.id
        }

    })
    console.log("Result",result)
    setImages(result)
    

}  

useEffect(()=>{
    downloadImages()
},[])


    return(
        <div className="image-wrapper">
            {
                images.map((a) => <Animals title={a.title} description={a.description} image={a.image} key={a.id}/>)
            }
        </div>
    )

}

export default ImageList