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
    <nav className="sticky top-0 h-20 py-5 text-lg bg-white z-100 w-full text-black flex justify-center shadow-xl">
        <div className="w-full grid grid-cols-3 items-center z-50 mx-0 sm:mx-10">
            
            <div className="flex justify-start">
                <LOGO className="cursor-pointer h-5 w-23 md:h-8 fill-black" onClick={() => navigate("/")} />
            </div>

            <div className="flex justify-center items-center gap-[10%] sm:gap-[20%]">
                <NavLink to="/" className={({ isActive }) => ` ${fontStyle} ${isActive ? underline : noUnderline}`}>Hjem</NavLink>
                <NavLink to="/projects" className={({ isActive }) => ` ${fontStyle} ${isActive ? underline : noUnderline}`}>Prosjekter</NavLink>
                <NavLink to="/cv" className={({ isActive }) => ` ${fontStyle} ${isActive ? underline : noUnderline}`}>CV</NavLink>
                <NavLink to="/contact" className={({ isActive }) => ` ${fontStyle} ${isActive ? underline : noUnderline}`}>Kontakt</NavLink>
            </div>

           <div className="relative flex ml-auto">
            <Languages
                className="cursor-pointer hover:scale-110 transition duration-200"
                onClick={() => setIsHidden((v) => !v)}
            />

            <div
                className={`absolute top-full right-0 mt-2 flex flex-col gap-2 transition-all duration-500 ease ${
                isHidden
                    ? 'opacity-0 pointer-events-none -translate-y-4  translate-x-2'
                    : 'opacity-100 pointer-events-auto translate-y-2 translate-x-2'
                }`}
            >
                <p className="z-[100] cursor-pointer flex items-center justify-center text-white bg-black p-2 h-10 border border-white rounded-4xl hover:scale-110 active:scale-95 transition duration-200">
                No
                </p>
                <p className="z-[100] cursor-pointer flex items-center justify-center text-white bg-black p-2 h-10 border border-white rounded-4xl hover:scale-110 active:scale-95 transition duration-200">
                En
                </p>
            </div>
            </div>
        </div>
    </nav> 
    </>
  )
}

export default Navbar
