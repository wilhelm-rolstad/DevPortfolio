import { useNavigate, NavLink } from 'react-router'
import { useState } from 'react'
import { Languages} from 'lucide-react' 
import LOGO from '../assets/LOGOwilhelmrolstad.svg?react'


function Navbar() {

    const [isHidden, setIsHidden] = useState(true)

    const navigate = useNavigate()
    const fontStyle = "text-sm md:text-lg"
    const underline = "underline underline-offset-4"
    const noUnderline = "no-underline hover:scale-110 active:scale-95 transition duration 200" 
  return (
    <nav className="bg-black w-full text-white flex justify-center">
        <div
        className="sticky top-0 w-full h-20 py-5 text-lg
        flex flex-row gap-[5%] items-center z-50 max-w-5xl mx-10">
                <LOGO className="cursor-pointer h-5 md:h-20 fill-white"onClick={()=> navigate("/")}/>
                <NavLink to="/" className={({ isActive }) => `ml-auto ${fontStyle} ${isActive ? underline: noUnderline}`}>Home</NavLink>
                <NavLink to="/projects" className={({ isActive }) => ` ${fontStyle} ${isActive ? underline: noUnderline}`}>Projects</NavLink>
                <NavLink to="/cv" className={({ isActive }) => ` ${fontStyle} ${isActive ? underline: noUnderline}`}>CV</NavLink>
                <NavLink to="/contact" className={({ isActive }) => ` ${fontStyle} ${isActive ? underline: noUnderline}`}>Contact</NavLink>
                <Languages className="cursor-pointer hover:scale-110 transition duration-200" onClick={() => setIsHidden((v) => !v)}></Languages>
                
            <div
                className={`absolute top-full right-0 mt-2
                            2xl:top-1/2 2xl:translate-x-60 2xl:mt-0 2xl:mr-3 2xl:-translate-y-1/2
                            flex flex-col 2xl:flex-row gap-2 2xl:gap-5 transition-all duration-500 ease ${
                                isHidden
                                ? "opacity-0 pointer-events-none translate-y-2 2xl:translate-y-0 2xl:translate-x-10"
                                : "opacity-100 pointer-events-auto translate-y-0 2xl:translate-x-0"
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
