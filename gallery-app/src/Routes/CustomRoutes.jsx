import {Routes,Route} from 'react-router-dom'
import Gallery from '../Components/Gallery/Gallery'
import ImageDetails from '../Components/ImageDetails/ImageDetails'
 
function CustomRoutes() {

    return (
        <Routes>
            <Route path = '/' element = {<Gallery/>} />
            <Route path = "/photos/:id" element = {<ImageDetails/>} />
        </Routes>
    )
}

export default CustomRoutes