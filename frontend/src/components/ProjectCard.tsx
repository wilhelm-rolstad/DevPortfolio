type ProjectCardProps = {
    title: string;
    description: string;
    link?: string;
    imageElement?: string;
    color1?: string;
    color2?: string;
}

function ProjectCard({title, description, link, imageElement, color1="gray", color2="black"}:ProjectCardProps){

    const containerStyle = `flex flex-col gap-4 text-black rounded-xl p-10 w-full `
    const headerStyle = "text-2xl"
    const imageStyle = "h-100 border border-0 rounded-xl ml-auto"
    const buttonStyle= "cursor-pointer bg-black text-white rounded-xl py-2 px-4 hover:scale-110 active:scale-90 transition duration-300 w-50"
  
    return(
        <section className={`${containerStyle}`} style={{background: `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`}}>
            <header>
                <h1 className={headerStyle}>{title}</h1>
            </header>
            <section className="flex gap-2">
                <p className="w-[50%]">{description}</p>
                <img src={imageElement} className={`${imageStyle} hidden sm:block`}></img>
            </section>
             <button className={buttonStyle}><a href={link}>Sjekk ut prosjektet</a></button>
        </section>
    )

}

export default ProjectCard;