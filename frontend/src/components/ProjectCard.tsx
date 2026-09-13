import type { ReactNode } from 'react'
import { ArrowUpRight, Code } from 'lucide-react'

type ProjectCardProps = {
    style? : string,
    imgSpaceBg? : string,
    title : string,
    name: string,
    description: string,
    technologies : any[],
    children? : ReactNode,
    sizeLarge : boolean,
    testlink? : string,
    repolink: string,
    demoLive: boolean
}


export default function ProjectCard({style, imgSpaceBg, title, name, description, technologies, children, sizeLarge, repolink, testlink, demoLive}:ProjectCardProps){
    return(
        
            <section className={`${style} ${sizeLarge ? "h-80" : "flex-col-reverse h-120"} flex  rounded-3xl border border-gray-200 overflow-hidden text-gray-700`}>
                        <div className={`${sizeLarge ? "w-[40%] border-r border-gray-200" : "w-full h-[60%]"} flex flex-col p-6 gap-2`} >
                            <p className="text-xs">{title}</p>
                            <h2 className="text-2xl">{name}</h2>
                            <p className="text-xs leading-6">{description}</p>
                            <div className="flex gap-1 text-xs overflow-auto ">
                            {technologies.map((technology) => (
                                <p className="px-1 py-0 border rounded-sm bg-gray-100 border-gray-200">{technology}</p>
                            ))}
                            </div>
                            <div className={`flex gap-2 ${sizeLarge ? "flex flex-col" : "items-center"}`}>
                                {demoLive ? 
                                    <a href={testlink}> <button className="bg-black text-white py-1 px-2 cursor-pointer hover:scale-105 flex gap-1 items-center text-xs border w-fit rounded-lg transition duration-300">Test det ut selv <ArrowUpRight size="16px"/> </button> </a>
                                : 
                                    <a href={testlink}> <button disabled className=" text-red-600 bg-red-300  py-1 px-2 cursor-not-allowed flex gap-1 items-center text-xs border w-fit rounded-lg"> Demo kommer snart... </button> </a>
                                }
                               
                                <a href={repolink} className="cursor-pointer px-2 py-1 flex items-center bg-gray-200 inset-ring inset-ring-gray-300 rounded-lg text-xs gap-1 w-fit hover:scale-105 transition duration-300"> <Code size="16px"/> GitHub </a>
                            </div>
                        </div>
                        
                        <div className={` ${imgSpaceBg ? imgSpaceBg : "bg-gray-200"}  p-5 ${sizeLarge ? "w-[60%]" : "w-full h-[40%]"}`}>
                            {children}
                        </div>
            </section>
        
    )
}