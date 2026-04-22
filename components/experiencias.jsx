import { useState } from "react"
import DownSVG from "@/public/downSVG"
import RightSVG from "@/public/RightSVG"

const Experiencias = () =>{
    const [experiencias, setExperiencias] = useState([
    {
        "name": "Senai",
        "desc": "De 2021 à 2023 fiz ensino médio integrado com o curso Técnico de ADS no Senai de São José em Santa Catarina.",
        "tempo": "3 Anos",
        "active": false
    },
        {
        "name": "CWI Start",
        "desc": "No ano de 2025, fiz parte do 26° edição do Programa CWI Crescer, completando o fim da Etapa 1",
        "tempo": "3 Meses",
        "active": false
    },
            {
        "name": "Gourmet Express",
        "desc": "O Trabalho final do Senai foi realizado comigo e mais dois alunos, criamos um app mobile de fila para restaurantes, acompanhado de uma dashboard web para restaurantes manusearem seus pedidos, inventários e expesas.",
        "tempo": "2 Anos",
        "active": false
    },
    ])

    function handleClick(clickedExperience){
        setExperiencias(prevExperiencias => 
            prevExperiencias.map(exp => 
                exp.name === clickedExperience.name 
                    ? { ...exp, active: !exp.active }
                    : exp
            )
        )
    }

    return(
        <div className="w-8/12 flex flex-col items-center justify-center animate-fade animate-once animate-ease-out animate-alternate">
            {experiencias.map((experiencia) => (
                <div className={`flex mt-3 justify-center items-center mb-5 ${experiencia.active ? "rounded-[12px] w-9/12 ring-2 ring-[#0c1527]" : "w-6/12 text-center bg-[#0c1527]/65 p-2 rounded-[4px] hover:bg-[#006494] transition-colors duration-300 cursor-pointer"}`} key={experiencia.name}>
                    <div className="flex flex-col justify-center items-center text-center">
                        <button onClick={() => handleClick(experiencia)} className={`justify-center items-center flex rounded-[12px] rounded-b-none cursor-pointer ${experiencia.active ? "pl-0 pr-0 p-2 text-4xl w-full bg-[#006494] transition-colors duration-300" : "text-3xl"}`}>
                            {experiencia.name}
                            {!experiencia.active && (
                                <RightSVG/>
                            )} 

                            {experiencia.active && (
                                <DownSVG className="animate-fade animate-once animate-ease-out animate-alternate"/>
                            )} 
                        </button>
                        {experiencia.active && (
                        <div className="flex flex-col p-6 justify-center items-center text-center animate-fade animate-once animate-ease-out animate-alternate">
                            <span className="text-2xl text-left"><span className="font-bold">Tempo: </span>{experiencia.tempo}</span>
                            <span className="w-10/12">{experiencia.desc}</span>
                        </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Experiencias