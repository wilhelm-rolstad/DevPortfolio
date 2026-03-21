import { useNavigate, NavLink } from 'react-router'
import { useState } from 'react'
import { Languages} from 'lucide-react' 
import LOGO from '../assets/LOGOwilhelmrolstad.svg?react'


function Navbar() {

    const [isHidden, setIsHidden] = useState(true)

    const navigate = useNavigate()

    const underline = "underline underline-offset-4"
    const noUnderline = "no-underline hover:scale-110 active:scale-95 transition duration 200" 
  return (
    <nav className="bg-black w-full text-white">
        <div
        className="sticky top-0 w-full h-20 py-5 text-lg
        flex flex-row gap-10 items-center z-50 max-w-5xl mx-auto">
                <LOGO className="cursor-pointer h-10 fill-white"onClick={()=> navigate("/")}/>
                <NavLink to="/" className={({ isActive }) => `ml-auto ${isActive ? underline: noUnderline}`}>Home</NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? underline: noUnderline}>Projects</NavLink>
                <NavLink to="/cv" className={({ isActive }) => isActive ? underline: noUnderline}>CV</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? underline: noUnderline}>Contact</NavLink>
                <Languages className="cursor-pointer hover:scale-110 transition duration-200" onClick={() => setIsHidden((v) => !v)}></Languages>
            <div
                className={`absolute top-5 right-0 flex items-center gap-5 transition-all duration-500 ease ${
                isHidden
                ? "translate-x-60 opacity-0 pointer-events-none"
                : "translate-x-50 opacity-100 pointer-events-auto"
                }`}
                >
                <p className="cursor-pointer flex items-center bg-gray-200 p-2 h-10 border border-gray-300 rounded hover:scale-110 transition duration-200">
                Norsk
                </p>
                <p className="cursor-pointer flex items-center bg-gray-200 p-2 h-10 border border-gray-300 rounded hover:scale-110 transition duration-200">
                English
            </p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
