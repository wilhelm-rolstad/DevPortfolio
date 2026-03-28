import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa"
import LOGO from '../assets/LOGOwilhelmrolstad.svg?react'
import SkylineIcon from '../assets/Vectors/Skyline.svg?react'

const Footer = () => {
    const fontStyle2 = "text-md hover:underline transition flex gap-2 items-center  cursor-pointer w-fit"
    return(
        <>
            <div className="relative w-full mt-auto bg-gray-300 overflow-hidden h-100 items-center p-5">
                <div className="relative mx-auto max-w-5xl flex flex-col gap-2 py-6 text-[10px] z-100">
                    <LOGO className="h-20 fill-black text-white hover:outline-none" />

                    <a className={fontStyle2} href="tel:+4790612335">
                        <FaPhone className="h-6 w-6" />
                        +47 90 61 23 35
                    </a>

                    <a className={fontStyle2} href="mailto:wilhelmsrolstad@gmail.com">
                        <FaEnvelope className="h-6 w-6" />
                        wilhelmsrolstad@gmail.com
                    </a>

                    <a className={fontStyle2} href="https://github.com/wilhelm-rolstad">
                        <FaGithub className="h-6 w-6" />
                        wilhelm-rolstad
                    </a>

                    <a className={fontStyle2} href="https://www.linkedin.com/in/wilhelm-rolstad-590a29361/">
                        <FaLinkedin className="h-6 w-6" />
                        Wilhelm Rolstad
                    </a>
                </div>

                <SkylineIcon className="absolute z-10 left-1/2 bottom-0 h-60 w-auto -translate-x-21/41 -translate-y-[-2rem] text-gray-400" preserveAspectRatio="xMidYMid slice"></SkylineIcon>
                <p className="absolute left-1/2 bottom-0 h-60 w-auto translate-y-50"> cc wilhelm rolstad</p>
            </div>
        </>
    )
}

export default Footer;