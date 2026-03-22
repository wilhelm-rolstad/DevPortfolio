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
    <>
    <nav className="sticky top-0 h-20 py-5 text-lg bg-white z-100 w-full text-black flex justify-center">
        <div className="w-full grid grid-cols-3 items-center z-50 mx-10">
            
            <div className="flex justify-start">
                <LOGO className="cursor-pointer h-5 w-23 md:h-8 fill-black" onClick={() => navigate("/")} />
            </div>

            <div className="flex justify-center items-center gap-[20%]">
                <NavLink to="/" className={({ isActive }) => ` ${fontStyle} ${isActive ? underline : noUnderline}`}>Home</NavLink>
                <NavLink to="/projects" className={({ isActive }) => ` ${fontStyle} ${isActive ? underline : noUnderline}`}>Projects</NavLink>
                <NavLink to="/cv" className={({ isActive }) => ` ${fontStyle} ${isActive ? underline : noUnderline}`}>CV</NavLink>
                <NavLink to="/contact" className={({ isActive }) => ` ${fontStyle} ${isActive ? underline : noUnderline}`}>Contact</NavLink>
            </div>

            <div className="relative flex justify-end">
                <Languages className="cursor-pointer hover:scale-110 transition duration-200" onClick={() => setIsHidden((v) => !v)}></Languages>

                <div className={`absolute top-full right-0 mt-2 
                                2xl:top-1/2 2xl:translate-x-60 2xl:mt-0 2xl:mr-3 2xl:-translate-y-1/2
                                flex flex-col 2xl:flex-row gap-2 2xl:gap-5 transition-all duration-500 ease ${
                                    isHidden
                                    ? "opacity-0 pointer-events-none translate-y-2 2xl:translate-y-0 2xl:translate-x-10"
                                    : "opacity-100 pointer-events-auto translate-y-0 2xl:translate-x-0"
                                }`}

                    >
                    <p className="z-100 cursor-pointer flex items-center bg-black p-2 h-10 border border-white rounded-4xl hover:scale-110 transition duration-200">
                    No
                    </p>
                    <p className="z-100 cursor-pointer flex items-center bg-black p-2 h-10 border border-white rounded-4xl hover:scale-110 transition duration-200">
                    En
                </p>
                </div>
            </div>
        </div>
    </nav> 
    <div className="sticky top-20  z-50 w-full bg-amber-400 h-8 p-1 overflow-hidden">
                <p className="absolute whitespace-nowrap font-bold animate-[slide_10s_linear_infinite]">Denne siden er under utvikling</p>
                <p className="-translate-x-60 absolute whitespace-nowrap font-bold animate-[slide_10s_linear_infinite]" style={{ animationDelay: "3.3s" }}>Denne siden er under utvikling</p>
    
    </div>
    </>
  )
}

export default Navbar
