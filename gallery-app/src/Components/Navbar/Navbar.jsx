import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {

    return (
        <Link to = "/">
        <div className="header">
            <h2 className='gallery-name'>Gallery App</h2>
        </div>
        </Link>
    )

}

export default Navbar