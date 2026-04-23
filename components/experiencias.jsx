import { useState } from "react"
import DownSVG from "@/public/downSVG"
import RightSVG from "@/public/RightSVG"

const Experiencias = () =>{
    const [experiencias, setExperiencias] = useState([
    {
        "name": "Senai",
        "desc": "Fiz ensino médio integrado ao Técnico em ADS no Senai de São José (SC) de 2021 a 2023.",
        "tempo": "3 Anos",
        "active": false
    },
    {
        "name": "CWI Crescer",
        "desc": "Em 2025, participei da 26ª edição do Programa CWI Crescer e concluí a Etapa 1.",
        "tempo": "3 Meses",
        "active": false
    },
    {
        "name": "Gourmet Express",
        "desc": "No trabalho final do Senai, foi criado um app mobile de fila para restaurantes e uma dashboard web para gerenciar pedidos, inventários e despesas.",
        "tempo": "2 Anos",
        "active": false
    },
    ])

    function handleClick(clickedExperience){
        setExperiencias(prevExperiencias => 
            prevExperiencias.map(exp => 
                exp.name === clickedExperience.name 
                    ? { ...exp, active: !exp.active }
                    : { ...exp, active: false }
            )
        )
    }

    return(
        <div className="w-full flex flex-col items-center justify-center p-3 sm:p-5 md:p-6 lg:p-8 animate-fade animate-once animate-ease-out animate-alternate">
            {experiencias.map((experiencia) => (
                <div className="w-full mb-5 flex flex-col" key={experiencia.name}>
                    <button onClick={() => handleClick(experiencia)} className={`flex justify-between items-center text-xl md:text-3xl w-full text-center p-2 rounded-[4px] transition-colors duration-300 cursor-pointer ${experiencia.active ? "bg-[#006494] mb-5" : "bg-[#0c1527]/65 hover:bg-[#006494]"}`}>
                        <span className="flex-1 text-left">{experiencia.name}</span>
                        {!experiencia.active && (
                            <RightSVG className="shrink-0"/>
                        )} 

                        {experiencia.active && (
                            <DownSVG className="shrink-0 animate-fade animate-once animate-ease-out animate-alternate"/>
                        )} 
                    </button>

                    {experiencia.active && (
                        <div className="flex flex-col p-4 md:p-6 rounded-[12px] bg-[#0c1527]/40 animate-fade animate-once animate-ease-out animate-alternate">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 pb-2 border-b border-[#006494]/50">
                                <span className="text-lg md:text-2xl font-bold">{experiencia.name}</span>
                                <span className="text-sm md:text-base text-[#e8f1f2]/80 mt-1 sm:mt-0">
                                    <span className="font-bold">Duração: </span>{experiencia.tempo}
                                </span>
                            </div>
                            <p className="text-sm md:text-base leading-relaxed">{experiencia.desc}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Experiencias