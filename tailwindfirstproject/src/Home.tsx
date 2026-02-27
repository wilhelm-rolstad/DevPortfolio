import { usePageSeo } from './hooks/usePageSeo'


const Dashboard = () => {
    usePageSeo({
        title: 'Wilhelm Rolstad | Home',
        description: 'Wilhelm Rolstad is an informatics student at NTNU in Trondheim, building full-stack projects with React and Java.',
        canonicalPath: '/',
    })

    return(
        <>
            <div className="mx-auto m-4 p-10 text-[var(--text-color)] h-screen max-w-[var(--page-width)]" >
                <div className="flex gap-2 text-5xl">
                    <h1 className="animate-[slideInLeft_1000ms_ease-out_forwards]">Wilhelm Rolstad</h1>
                </div>
                <p className="w-fit overflow-hidden whitespace-nowrap border-r-2 border-current animate-[typing_2.5s_steps(60,end),blink_.8s_step-end_infinite]">I am a norwegian informatics student at NTNU Trondheim </p>

                <div className="flex m-2 p-5 text-black border gap-4 mx-auto ">
                        <button className="bg-[var(--text-color)] border p-2 rounded w-12">CV</button>
                        <button className="bg-[var(--text-color)] border p-2 rounded" >MY PROJECTS</button>
                        <button className="bg-[var(--text-color)] border p-2 rounded" >CONTACT ME</button>
                </div>
                <div className="mt-6">
                </div>
                
            </div>
        </>
    )
}

export default Dashboard


     
