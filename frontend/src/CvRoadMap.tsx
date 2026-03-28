import { memo } from 'react'
import { usePageSeo } from './hooks/usePageSeo'
import { FileDown } from 'lucide-react'
import GitHubCard from './components/GitHubCard'
import AnimatedBox from './components/AnimatedBox'
import NTNUimage from './assets/NTNU.jpg';
import Stabekkimage from './assets/STABEKK.jpeg';
import STOREBRANDimage from './assets/STOREBRAND.jpg';
import DOTDAGENEimage from './assets/DOTDAGENE.png';

const CV = () => {
    usePageSeo({
        title: 'Wilhelm Rolstad | CV',
        description: 'CV for Wilhelm Rolstad: education at NTNU and work experience including Storebrand and military service.',
        canonicalPath: '/Cv',
    })
    //MAKE THE TIMELINE LOOK LIKE A COMMIT AND MERGE REQUEST GITHUB NETWORK TIMELINE. THE TIMELINE/LIFE IS MAIN THEN BRANCH OUT FOR EACH EXPERIENCE THEN MERGE WHEN DONE!
    //BRANCHES: VIDEREGÅENDE SKOLE, MILITÆRET, SPAR SNARØYA, STUDIE, STOREBRAND FORSIKRING, DOTDAGENE. 
    //SHOULD BE DONE ON-scroll
    //WHENEVER A MERGE HAPPENS THE PR IS SHOWN WITH TITLE, DATE and DESCRIPTION!

    return(
        <>
            <div className="flex flex-col gap-20 mx-auto rounded p-2 m-2 max-w-7xl overflow-hidden items-center">

                <AnimatedBox>
                    <GitHubCard
                    title="Videregående skole"
                    description="Studiespesialiserende innenfor realfag og økonomi"
                    date={new Date("2019-08-01")}
                    assignee = "wilhelm-rolstad"
                    labels={["good first issue", "Size: Large", "Priority: High", "Medium", "MVP"]}
                    project="grunnskole"
                    milestone="studie"
                    imagePath={Stabekkimage}
                    />
                </AnimatedBox>

                <AnimatedBox>
                    <GitHubCard
                    title="Førstegangstjeneste"
                    description="Vaktsoldat Garden"
                    date={new Date("2022-08-05")}
                    assignee = "wilhelm-rolstad"
                    labels={["Enhancement", "Size: Medium", "Priority: Critical", "Hard", "Performance"]}
                    project="..."
                    milestone="..."
                    />
                </AnimatedBox>

                <AnimatedBox>
                    <GitHubCard
                    title="Butikkmedarbeider"
                    description="Spar Snarøya"
                    date={new Date("2024-06-01")}
                    assignee = "wilhelm-rolstad"
                    labels={["Enhancement", "Size: Small", "Priority: Medium", "Easy"]}
                    project="erfaringer"
                    milestone="..."
                    />
                </AnimatedBox>

                <AnimatedBox>
                    <GitHubCard
                    title="Bachelor Informatikk NTNU"
                    description="Bachelor i Informatikk ved Norges teknisk- naturvitenskapelige universitet"
                    date={new Date("2024-08-01")}
                    assignee = "wilhelm-rolstad"
                    labels={["Enhancement", "Size: Large", "Priority: Critical", "Hard"]}
                    project="bachelor"
                    milestone="karriere"
                    imagePath={NTNUimage}
                    />
                </AnimatedBox>
                
                <AnimatedBox>
                    <GitHubCard
                    title="Skaderådgiver Storebrand"
                    description="Skaderådgiver for motorskader i Storebrand Forsikring"
                    date={new Date("2025-06-01")}
                    assignee = "wilhelm-rolstad"
                    labels={["Enhancement", "Size: Medium", "Priority: High", "Medium"]}
                    project="erfaringer"
                    milestone="..."
                    imagePath={STOREBRANDimage}
                    />
                </AnimatedBox>

                <AnimatedBox>
                    <GitHubCard
                    title="Nettsideutvikler DotDagene"
                    description="Opprettholde og videreutvikle nettside for DotDagene, et verv som arrangerer karrieredag for it-studenter ved NTNU"
                    date={new Date("2025-06-01")}
                    assignee = "wilhelm-rolstad"
                    labels={["Enhancement", "Size: Medium", "Priority: High", "Medium"]}
                    project="erfaringer"
                    milestone="karriere"
                    imagePath={DOTDAGENEimage}
                    />
                </AnimatedBox>


                <div className="cursor-pointer text-xl flex flex-row items-center gap-1 hover:scale-105 active:scale-95 transition duration-200 mx-auto animate-[pulse-size_1.6s_ease-in-out_infinite]">
                    <p>Download CV </p><FileDown strokeWidth={1.2}/>
                </div>
            </div>
        </>
    )
}

export default memo(CV)
