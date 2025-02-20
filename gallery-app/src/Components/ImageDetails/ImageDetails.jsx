import { useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react"

function ImageDetails() {
    const {id} = useParams
    const [image,setImage] = useState({})
    async function download() {
            const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos${id}`)
            console.log("Sagar",response)
            setImage({
                
            })
    }

    useEffect(()=>{
        download()
    },[])
    
}

export default ImageDetails