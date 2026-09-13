import AnimatedBox from './components/AnimatedBox'
import ProjectCard from './components/ProjectCard'
import JkCoachingLogo from './assets/jk_coaching.png'
import stinnVideo from './assets/Stinn.mp4?url'
import KontaktMeg from './components/KontaktMeg'
import DOTDAGENELOGO from './assets/DOTDAGENELOGO.svg'
import CvBoks from './components/CvBoks'

const Dashboard = () => {
    return(
        <>
        <div className="mx-auto flex flex-col items-center p-10">
            <div className="flex flex-col gap-5 m-10 w-full min-h-screen max-w-7xl" >
                <h1 id="hjem" tabIndex={-1} className="scroll-mt-32 text-5xl focus:outline-none">Wilhelm Svensgaard Rolstad</h1>
                <p>Tredjeårs student i Bachelor i informatikk ved NTNU, Trondheim<br/>
                    </p>
                <h2 id="prosjekter" tabIndex={-1} className="scroll-mt-32 text-2xl focus:outline-none">Prosjekter</h2>

                <AnimatedBox className="overflow-hidden rounded-xl">
                    <ProjectCard 
                    sizeLarge={true} 
                    imgSpaceBg={"bg-gray-100"} 
                    title={"BANKDASHBORD"} 
                    name={"Stinn"} 
                    description={"Et bankdashbord som samler kontooversikt, transaksjoner og forbruk på ett sted. Grafer og kategorier gør det enklere å se hvordan pengene brukes over tid."} 
                    technologies={["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "TailwindCSS"]}
                    repolink={"https://github.com/wilhelm-rolstad/bank-dashboard"}
                    demoLive={false}>
                    
                        <div className="@container flex h-full w-full items-center justify-center">
                            <div
                                className="relative aspect-[1919/1168] w-full overflow-hidden rounded-md border-2 border-gray-200"
                                style={{
                                    transform: 'perspective(150cqw) rotateY(-24deg) rotateX(10deg) scale(0.6)',
                                    boxShadow: '18px 20px 28px -12px rgb(15 23 42 / 35%)',
                                }}
                            >
                                <video
                                    src={stinnVideo}
                                    autoPlay
                                    muted
                                    playsInline
                                    className="absolute inset-0 h-full w-full object-cover scale-x-103 scale-y-104 translate-y-[1px]"
                                    onLoadedMetadata={(e) => {
                                        e.currentTarget.currentTime = 6
                                    }}
                                    onTimeUpdate={(e) => {
                                        if (e.currentTarget.currentTime >= 80) {
                                            e.currentTarget.currentTime = 6
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </ProjectCard>
                </AnimatedBox>

                <section className="w-full flex flex-col md:flex-row gap-5 no-wrap">
                     <ProjectCard 
                     style={"flex-1"} 
                     imgSpaceBg={"bg-[#84c97f]"} 
                     sizeLarge={false} title={"KARRIEREDAG"} 
                     name={"dotDAGENE"} 
                     description={"Nettside for en karrieredag ved NTNU for digitalisering og teknologi. Viser frem hva dotDAGENE gjør og hvilke bedrifter som skal delta i arrangementet, samt kontaktskjema for bedrifter."} 
                     technologies={["React", "TypeScript", "TailwindCSS", "ResendAPI"]}
                     testlink={"https://dotdagene.no"}
                     repolink={"https://github.com/appKom/dotDAGENE"}
                     demoLive={true}
                     >
                        <img
                        src={DOTDAGENELOGO}
                        alt="Kellmer Coaching website"
                        className="w-full h-full object-contain scale-40"
                        />
                     </ProjectCard>
                     <ProjectCard 
                     style={"flex-1"} 
                     imgSpaceBg={"bg-[#3160b0]"} 
                     sizeLarge={false} 
                     title={"NETTSIDE"} 
                     name={"Kellmer Coaching"} 
                     description={"Nettside for Personlig trener som viser resultater og omtaler fra klienter. Nettsiden viser frem hva man får av tjenester skulle man starte på en plan, og gir også muligheten for å melde seg opp gjennom kontaktskjema"} 
                     technologies={["React", "TypeScript", "TailwindCSS", "ResendAPI"]}
                     testlink={"https://kellmercoaching.no"}
                     repolink={"https://github.com/wilhelm-rolstad/kellmer_coaching"}
                    demoLive={true}
                          >
                        
                        <img
                        src={JkCoachingLogo}
                        alt="Kellmer Coaching website"
                        className="w-full h-full object-contain scale-150"
                        />
                     </ProjectCard>
                </section>


                <CvBoks/>

                 <KontaktMeg/>
            </div>
        </div>
        </>
    )
}

export default Dashboard


     
