import AnimatedBox from './components/AnimatedBox'
import {ChevronRight} from 'lucide-react'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import coffeeMachine from './assets/coffeemachine.png'
import LOGO from './assets/LOGOwilhelmrolstad.svg?react'

const Dashboard = () => {
    const navigate = useNavigate();
    const [hideIntro, setHideIntro] = useState(() => sessionStorage.getItem("seenIntro") === "true");

    useEffect(() => {
    if (sessionStorage.getItem("seenIntro") === "true") {
        setHideIntro(true);
        return;
    }

    const timer = setTimeout(() => {
        sessionStorage.setItem("seenIntro", "true");
        setHideIntro(true);
    }, 3000);

    return () => clearTimeout(timer);
    }, []);




    return(
        <>
        <div
            className={`text-white fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-[3000ms] ${
                hideIntro ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            >
            <LOGO className="fill-white h-40" />
        </div>
        
        <div className="mx-auto flex flex-col items-center">
            <div className="flex flex-col gap-5 m-10 h-screen max-w-5xl" >
                <h1 className=" text-5xl">Wilhelm Svensgaard Rolstad</h1>
                <p>Informatikkstudent ved Norges Teknisk Naturvitenskapelige Universitet <br/> 
                Jeg lager nettsider fra design til leveranse<br/>
                Anvender kunnskap fra studiene i realistiske prosjekter</p>

                <AnimatedBox className="overflow-hidden p-10 h-70 border border-gray-300 rounded-xl bg-gray-200">
                {({ isVisible }) => (
                    <div className="flex h-full">
                        <div className="h-100 w-[50%] transform transition duration-2000 p-5 flex flex-col gap-5">
                            <p>Sjekk ut noen av prosjektene</p>
                            <button className="flex gap-2 cursor-pointer p-2 rounded bg-black text-white w-[60%] hover:scale-105 active:scale-95 transition duration-200" onClick={() => navigate("/Projects")}>Prosjekter <ChevronRight/></button>
                        </div>
                       <div className={`h-full w-[50%] transform transition duration-3000 ${isVisible ? 'translate-x-0' : 'translate-x-125'}`}>
                           <img src={coffeeMachine} className="h-fill"/>
                       </div>
                    </div>
                )}
                </AnimatedBox>

                <div className="flex flex-row flex-wrap gap-12 border border-gray-300 rounded-xl px-5 py-10">
                    <section className="">
                    <h2 className="text-lg">Studie relatert kompetanse og ferdigheter</h2>
                        <ul className="list-disc ml-10">
                            <li>Versjonskontroll git, Github</li>
                            <li>Python</li>
                            <li>Objektorientert programmering - Java</li>
                            <li>Algoritmer og datastrukturer</li>
                            <li>Webutvikling html/css/javascript/typescript/react/tailwind</li>
                            <li>Websikkerhet</li>
                            <li>Smidige arbeidsmetoder SCRUM</li>
                            <li>Databaser og datamodellering SQLite + ER</li>
                            <li>Generell kunnskap om datamskiner og operativsystemer</li>
                        </ul>
                    </section>
                     <div className="w-px self-stretch bg-gray-300" />
                    <section>
                        <h2 className="text-lg">Andre ferdigheter</h2>
                        <ul className="list-disc ml-10">
                            <li>Blender - 3D modellering</li>
                            <li>Kundeservice - skaderådgiver forsikring</li>
                        </ul>
                    </section>
                </div>
                 <button className="cursor-pointer flex items-center justify-center gap-2 w-60 bg-black text-white p-2 rounded hover:scale-105 active:scale-95 transition duration-200" onClick={() => navigate("/CV")}>See my CV for more... <ChevronRight/> </button>
            </div>
        </div>
        </>
    )
}

export default Dashboard


     
