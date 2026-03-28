import { memo } from 'react'
import { FileDown } from 'lucide-react'
import myPdf from './assets/CV.pdf'
const CV = () => {
    //MAKE THE TIMELINE LOOK LIKE A COMMIT AND MERGE REQUEST GITHUB NETWORK TIMELINE. THE TIMELINE/LIFE IS MAIN THEN BRANCH OUT FOR EACH EXPERIENCE THEN MERGE WHEN DONE!
    //BRANCHES: VIDEREGÅENDE SKOLE, MILITÆRET, SPAR SNARØYA, STUDIE, STOREBRAND FORSIKRING, DOTDAGENE. 
    //SHOULD BE DONE ON-scroll
    //WHENEVER A MERGE HAPPENS THE PR IS SHOWN WITH TITLE, DATE and DESCRIPTION!

    return(
        <>
            <div className="flex flex-col gap-20 mx-auto rounded p-2 m-2 mt-20 max-w-7xl overflow-hidden items-center">

            <h1 className="text-2xl font-bold"> CV WILHELM ROLSTAD</h1>
            
                <iframe
                src={myPdf}
                className="w-[70%] h-screen border"
                title="CV Wilhelm Rolstad"
                />
           

                <a href={myPdf} download className="cursor-pointer text-xl flex flex-row items-center gap-1 hover:scale-105 active:scale-95 transition duration-200 mx-auto animate-[pulse-size_1.6s_ease-in-out_infinite]">
                    <p>Download CV </p><FileDown strokeWidth={1.2}/>
                </a>
            </div>
        </>
    )
}

export default memo(CV)
