type GitHubCardProps={
    title: string;
    date: Date;
    description: string;
    assignee: string;
    labels: string[];
    imagePath?: string;
    project?: string;
    milestone?: string;
}

function GitHubCard({
    title, 
    date, 
    description, 
    assignee, 
    labels,
    imagePath,
    project,
    milestone
}:GitHubCardProps){

    const infoContainer="flex flex-col gap-2 justify-center"
    const hrStyle ="border-gray-200"
    const labelStyle = "font-bold text-gray-500"
    const labelStyles: Record<string, { bg: string; text: string }> = {
        "enhancement": { bg: "bg-cyan-500", text: "white" },

        "priority: critical": { bg: "bg-red-600", text: "white" },
        "priority: high": { bg: "bg-orange-400", text: "black" },
        "priority: medium": { bg: "bg-yellow-300", text: "black" },
        "priority: small": { bg: "bg-green-300", text: "black" },

        "size: large": { bg: "bg-violet-600 ", text: "white" },
        "size: medium": { bg: "bg-indigo-300 ", text: "lack" },
        "size: small": { bg: "bg-sky-200 ", text: "black" },

        "hard": { bg: "bg-rose-600", text: "white" },
        "medium": { bg: "bg-amber-400", text: "black" },
        "easy": { bg: "bg-lime-300", text: "black" },

        "mvp": { bg: "bg-fuchsia-500", text: "white" },
        "performance": { bg: "bg-emerald-500", text: "white" },
        "good first issue" : { bg: "bg-indigo-500", text: "white" }
        };



    return(
        <>
        <section className="flex flex-col gap-5 max-w-6xl w-full mx-auto border-2 border-gray-200 p-6 rounded-2xl">
            <header>
                <h1 className="text-3xl">{title} #01</h1>
                <label className="px-2 py-0.5 border rounded-xl font-bold text-white bg-green-600">Open</label>
            </header>
                <hr className={hrStyle} />


            <div className="flex gap-8">


                <div className="w-[70%]">
                    <div className="flex gap-5">
                        <label className="block border border-gray-300 bg-gray-200 p-2 rounded-full h-12 w-12 shrink-0"></label>
                        <section className="border border-blue-200 rounded-xl overflow-hidden w-full">
                            <div className="flex gap-2 px-5 bg-blue-100 p-2 border-b border-blue-200">
                                <p>wilhelm-rolstad</p>
                                <p className="text-gray-500">opened {date.toLocaleDateString()}</p>
                                <p className="flex items-center text-sm border px-2 rounded-xl border-blue-200 ml-auto">Owner</p>
                            </div>
                            <div className="p-5">
                                <p>{description}</p>
                                <img src={imagePath} alt="ShowCaseImage" className="w-100"/>
                            </div>
                        </section>
                    </div>
                    <div>
                        comitt-section ...
                    </div>
                </div>


                <div className="flex flex-col gap-5 w-[30%]">
                    <div className={infoContainer}>
                        <p className={labelStyle}>Assignees</p>
                        <div className="flex gap-2 items-center">
                        <label className="block border border-gray-300 bg-gray-200 p-2 rounded-full h-5 w-5 shrink-0"/>
                        <p>{assignee}</p>
                        </div>
                    </div>
                    <hr className={hrStyle}/>
                    <div className={infoContainer}>
                        <p className={labelStyle}>Labels</p>
                        <div className="flex flex-wrap gap-2">
                        {labels.map((label) => {
                            const style = labelStyles[label.toLowerCase()];

                            return (
                                <p
                                key={label}
                                className={`rounded-2xl px-3 py-0.5 font-bold ${
                                    style ? `${style.bg} text-${style.text}` : "bg-pink-100 border-pink-200"
                                }`}
                                >
                                {label}
                                </p>
                            );
                            })}
                        </div>
                    </div>
                    <hr className={hrStyle}/>
                    <div className={infoContainer}>
                        <p className={labelStyle}>Projects</p>
                        <p>{project}</p>
                    </div>
                    <hr className={hrStyle}/>
                    <div className={infoContainer}>
                        <p className={labelStyle}>Milestone</p>
                         <p>{milestone}</p>
                    </div>
                    <hr className={hrStyle}/>
                </div>


            </div>
        </section>
        </>
    )
}

export default GitHubCard