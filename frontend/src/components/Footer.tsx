import {Mail, Github, Linkedin, Phone} from 'lucide-react'
import LOGO from '../assets/LOGOwilhelmrolstad.svg?react'
import SkylineIcon from '../assets/Vectors/Skyline.svg?react'

const Footer = () => {

    const fontStyle1 = "text-lg "
    const fontStyle2 = "text-lg hover:underline transition"
    return(
        <>
            <div className="relative w-full bg-gray-300 overflow-hidden h-100 mt-20 items-center">
                <div className=" mx-auto max-w-5xl top-1 left-2 flex flex-col gap-2 py-6 z-100 text-[10px]">
                    <LOGO className="h-20 fill-black text-white hover:outline-none"/>
                    <div className="flex gap-2 items-center">
                        <Phone className="h-8"/>
                        <p className={fontStyle1}><a href="tel:wilhelmsrolstad@gmail.com"> +47 90 61 23 35</a></p>
                    </div>
                    
                    <div className="flex gap-2 items-center">
                        <Mail className="h-8"></Mail>
                        <p className={fontStyle1}><a href="mailto:wilhelmsrolstad@gmail.com"> wilhelmsrolstad@gmail.com</a></p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <Github className="h-8"></Github>
                        <a className={fontStyle2} href="https://github.com/wihelm-rolstad">wilhelm-rolstad</a>
                    </div>
                        
                    <div className="flex gap-2 items-center">
                        <Linkedin className="h-8"></Linkedin>
                        <a className={fontStyle2} href="https://www.linkedin.com/in/wilhelm-rolstad-590a29361/">Wilhelm Rolstad</a>
                    </div>
                </div>

                <SkylineIcon className="absolute left-1/2 bottom-0 h-60 w-auto -translate-x-21/41 -translate-y-[-2rem] text-gray-400" preserveAspectRatio="xMidYMid slice"></SkylineIcon>
                <p className="absolute left-1/2 bottom-0 h-60 w-auto translate-y-50"> cc wilhelm rolstad</p>
            </div>
        </>
    )
}

export default Footer;