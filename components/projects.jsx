import { useState } from "react"
import DownSVG from "@/public/downSVG"
import RightSVG from "@/public/RightSVG"

const ProjectsDiv = () =>{
    const [projetos, setProjetos] = useState([
    {
        "name": "Pousada Solaris",
        "desc": "Em conjunto com o time da Pousada Solaris na Praia da Pinheira, construi um site a qual mostrava localização, equipe e aposentos da Pousada",
        "langs": "Next.js, Tailwind, Typescript",
        "link": "https://github.com/NicolasSNichnig/Pousada-Solaris-Site",
        "nomeFoto": "fotoProjetoSolaris.png",
        "active": false
    },
    ])


    function handleClick(clickedProject){
        setProjetos(prevProject => 
            prevProject.map(exp => 
                exp.name === clickedProject.name 
                    ? { ...exp, active: !exp.active }
                    : exp
            )
        )
    }

    return(
        <div className="flex flex-col items-center justify-center p-5 animate-fade animate-once animate-ease-out animate-alternate">
            {projetos.map((project) => (
                <div className={`flex flex-row justify-center w-10/12 items-center pl-0 pr-0 p-4 ${project.active ? "rounded-[12px] ring-2 ring-[#0c1527]" : "rounded-[4px] pb-0 pt-0 pl-0 w-full"}`} key={project.name}>
                    <div className={`flex flex-col rounded-2xl ${project.active ? "ml-5" : "m-0"}`}>
                        <button onClick={() => handleClick(project)} className={`flex place-self-start text-4xl cursor-pointer ${project.active ? "mt-2 mb-2 font-bold" : "text-center bg-[#0c1527]/65 p-2 rounded-[4px] hover:bg-[#006494] transition-colors duration-300"}`}>{project.name}
                            {!project.active && (
                                <RightSVG/>
                            )} 

                            {project.active && (
                                <DownSVG className="animate-fade animate-once animate-ease-out animate-alternate"/>
                            )} 
                        </button>
                        <div className={`flex flex-col ${project.active ? "animate-fade animate-once animate-ease-out animate-alternate" : "hidden"}`}>
                            <span className="text-2xl font-bold">Descrição:</span>
                            <span className="w-8/12">{project.desc}</span>
                            <span className="text-2xl mt-2 font-bold">Ferramentas: </span>
                            <span>{project.langs}</span>
                            <a className="mt-2 w-4/12 text-center p-2 pl-4 pr-4 bg-[#0c1527]/65 hover:bg-[#006494] transition-colors duration-300 rounded-[4px]" href={project.link} target="_blank" rel="noopener noreferrer">Link</a>                        
                        </div>
                    </div>

                    <img src={`./${project.nomeFoto}`} className={`size-12/12 ml-5 mr-5 ${project.active ? "" : "hidden"}`}></img>
                </div>
            ))}
        </div>
    )
}

export default ProjectsDiv