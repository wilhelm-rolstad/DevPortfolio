import Coolbg from '../assets/coolbg-background.m4v?url'
import LoopingVideoBackground from './LoopingVideoBackground'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router'
export default function KontaktMeg(){
    return(
        <section className={`relative w-full p-10 rounded-xl border border-gray-200 overflow-hidden isolate`}>
            <LoopingVideoBackground src={Coolbg} fadeSeconds={1} />

            <div className="relative z-10 flex flex-col gap-2 text-white">
                <h2 className="text-3xl"> Har du en idé?</h2>
                <p className="text-xl"> La oss snakke om den.</p>
                <Link to="/contact" className={`cursor-pointer px-3 py-1 w-fit ml-auto text-md border border-gray-200 rounded-lg flex items-center hover:scale-105 hover:bg-white/20 transition duration-300 `}> Ta kontakt <ChevronRight/> </Link>
            </div>
        </section>
    )
}
