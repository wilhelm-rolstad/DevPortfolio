import { usePageSeo } from './hooks/usePageSeo'
import LiftLogPic from "./assets/LiftLog.png";
import ProjectCard from "./components/ProjectCard"

const Projects = () =>{
    usePageSeo({
        title: 'Wilhelm Rolstad | Projects',
        description: 'Projects built by Wilhelm Rolstad, including a fitness tracking application with React, Java Spring Boot, and Supabase.',
        canonicalPath: '/Projects',
    })

    return(
        
        <div className="flex flex-col gap-10 max-w-5xl mx-auto py-10">
            <header>
                    <h1 className="text-2xl">Personlige prosjekter</h1>
                    <p>Ved siden av studiene prøver jeg å anvende kunnskap i realistiske prosjekter, for å kombinere ny kompetanse med gammel.<br/>
                    Gjerne sjekk ut noen av prosjektene under:</p>
                </header>
            <div className="flex flex-col items-center justify-center gap-10 mx-auto">


                <ProjectCard
                title="DotDagene"
                description='Medlem av og utvikler for nettsiden til DotDagene. 
                Et verv som planlegger og arrangerer en årlig karrieredag for it 
                studenter der man kan bli kjent med bedrifter og roller fra næringslivet.'
                link="https://dotdagene.no/"
                color1="#f9fcf7"
                color2="darkgreen"
                />
                <ProjectCard
                title="Treningssenter Database Prosjekt"
                description="under arbeid..."
                />
                <ProjectCard
                title="Fitness application"
                description="For this project i used React with Javascript as the frontend framework with Tailwindcss.
                            Connected the frontend to java backend via Rest API using Spring boot.
                            Backend connected to a PostgreSQL database at Supabase.
                            The backend runs on google cloud."
                link="https://liftlog.no"
                imageElement={LiftLogPic}
                color1="palegreen"
                color2="black"
                />
            </div>
        </div>
    )
}

export default Projects
