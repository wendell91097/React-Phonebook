import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    const dropDown = () => {
        setIsVisible(!isVisible)
        console.log(isVisible);
        
    }
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6 ">
            <Link to='/' className="font-semibold text-xl tracking-tight">Digit</Link>  
        </div>  
        <div className="block">
            <button 
                onClick={dropDown}
                className="flex items-cent px-3 py-2 text-teal-200 
                border rounded border-teal-200 hover:border-white"
                >
                    <button className="flex items-center "></button>
                    <i className="fas fa-bars"></i>
            </button>
        </div>
    </nav>
  )
}

export default Navbar