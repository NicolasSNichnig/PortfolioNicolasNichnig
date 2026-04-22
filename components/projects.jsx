import { useState } from "react"
import DownSVG from "@/public/downSVG"
import RightSVG from "@/public/RightSVG"

const ProjectsDiv = () =>{
    const [projetos, setProjetos] = useState([
    {
        "name": "Pousada Solaris",
        "desc": "Usando o framework Next.Js, em conjunto com a Pousada Solaris, construi um site para seus aposentos. Contendo a localização do Google maps, carrousel com os apartamentos e fotos dos Hosts.",
        "langs": "Next.js, Tailwind, Typescript",
        "link": "https://github.com/NicolasSNichnig/Pousada-Solaris-Site",
        "nomeFoto": "fotoProjetoSolaris.png",
        "active": false
    },    {
        "name": "Gourmet Express",
        "desc": "Em conjunto com mais dois colegas, produzimos no Senai um app mobile e site que permitia aos usuários a possibilidade de pedir lanches a uma distancia considerável, e então recebe-los nos restaurantes. E aos restaurantes, uma dashboard com diversas funcionalidades, como; Manutenção, edição e observação de dados de um restaurante.",
        "langs": "React, React Native, php, SQL, Typescript",
        "link": "https://github.com/SmartCodeGenius",
        "nomeFoto": "GourmetExpress.png",
        "active": false
    },
    ])

    function handleClick(clickedProject){
        setProjetos(prevProject => 
            prevProject.map(exp => 
                exp.name === clickedProject.name 
                    ? { ...exp, active: !exp.active }
                    : { ...exp, active: false }
            )
        )
    }

    return(
        <div className="flex flex-col items-center justify-center p-3 sm:p-5 md:p-6 lg:p-8">
            {projetos.map((project) => (
                <div className="w-full mb-5 flex flex-col" key={project.name}>
                    <button onClick={() => handleClick(project)} className={`flex justify-between items-center text-xl md:text-2xl lg:text-3xl w-full text-center p-2 rounded-[4px] transition-colors duration-300 cursor-pointer ${project.active ? "bg-[#006494] mb-5" : "bg-[#0c1527]/65 hover:bg-[#006494]"}`}>
                        <span className="flex-1 text-left">{project.name}</span>
                        {!project.active && (
                            <RightSVG className="shrink-0"/>
                        )} 

                        {project.active && (
                            <DownSVG className="shrink-0 animate-fade animate-once animate-ease-out animate-alternate"/>
                        )} 
                    </button>

                    {project.active && (
                        <div className="flex flex-col lg:flex-row gap-6 p-4 md:p-6 rounded-[12px] bg-[#0c1527]/40 animate-fade animate-once animate-ease-out animate-alternate">
                            <div className="flex-1 flex flex-col gap-3">
                                <div>
                                    <span className="text-lg md:text-xl font-bold">Descrição:</span>
                                    <p className="text-sm md:text-base mt-1 leading-relaxed">{project.desc}</p>
                                </div>
                                <div>
                                    <span className="text-lg md:text-xl font-bold">Ferramentas:</span>
                                    <p className="text-sm md:text-base mt-1">{project.langs}</p>
                                </div>
                                <a className="mt-2 w-full sm:w-auto text-center p-2 sm:p-3 px-4 sm:px-6 bg-[#0c1527]/65 hover:bg-[#006494] transition-colors duration-300 rounded-[4px] text-sm sm:text-base self-start" href={project.link} target="_blank" rel="noopener noreferrer">
                                    Ver no GitHub →
                                </a>
                            </div>
                            
                            {project.nomeFoto && (
                                <div className="lg:w-96 shrink-0 rounded-lg overflow-hidden flex items-center justify-center">
                                    <img 
                                        src={`./${project.nomeFoto}`} 
                                        alt={project.name}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default ProjectsDiv