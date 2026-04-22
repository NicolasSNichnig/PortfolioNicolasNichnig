'use client'
import { useState } from "react";

import HabilidadesDiv from "./habilidades.jsx";
import ProjectsDiv from "./projects.jsx";
import SobreMim from "./SobreMim.jsx"
import Experiencias from "./experiencias.jsx"

const MainDiv = () => {
  const [isSobreMim, setSobreMim] = useState(true)
  const [isHabilidades, setHabilidades] = useState(false)
  const [isProjects, setProjects] = useState(false)
  const [isExperiencia, setExperiencia] = useState(false)

  function handleSobreMim(){
    setSobreMim(true)
    setHabilidades(false)
    setProjects(false)
    setExperiencia(false)
  }

  function handleHabilidades(){
    setSobreMim(false)
    setProjects(false)
    setHabilidades(true)
    setExperiencia(false)
  }

  function handleProjects(){
    setSobreMim(false)
    setProjects(true)
    setHabilidades(false)
    setExperiencia(false)
  }

  function handleExperiencias(){
    setSobreMim(false)
    setProjects(false)
    setHabilidades(false)
    setExperiencia(true)
  }

    return (
    <main className="m-5 flex flex-col items-center justify-center w-7/12 bg-[#13293d] rounded-[2%] shadow-2xl shadow-black">
      <div className="text-3xl m-5 flex w-full place-content-between">
        <button onClick={handleSobreMim} className={isSobreMim ? "ring ring-[#0c1527]/25 ml-5 mr-5 p-2 rounded-[4px] bg-[#006494] transition-colors duration-300 cursor-pointer" : "ml-5 mr-5 bg-[#0c1527]/65 p-2 rounded-[4px] hover:bg-[#006494] transition-colors duration-300 cursor-pointer"}>Sobre mim</button>
        <button onClick={handleHabilidades} className={isHabilidades ? "ring ring-[#0c1527]/25 ml-5 mr-5 p-2 rounded-[4px] bg-[#006494] transition-colors duration-300 cursor-pointer" : "ml-5 mr-5 bg-[#0c1527]/65 p-2 rounded-[4px] hover:bg-[#006494] transition-colors duration-300 cursor-pointer"}>Habilidades</button>
        <button onClick={handleProjects} className={isProjects ? "ring ring-[#0c1527]/25 ml-5 mr-5 p-2 rounded-[4px] bg-[#006494] transition-colors duration-300 cursor-pointer" : "ml-5 mr-5 bg-[#0c1527]/65 p-2 rounded-[4px] hover:bg-[#006494] transition-colors duration-300 cursor-pointer"}>Projetos</button>
        <button onClick={handleExperiencias} className={isExperiencia ? "ring ring-[#0c1527]/25 ml-5 mr-5 p-2 rounded-[4px] bg-[#006494] transition-colors duration-300 cursor-pointer" : "ml-5 mr-5 bg-[#0c1527]/65 p-2 rounded-[4px] hover:bg-[#006494] transition-colors duration-300 cursor-pointer"}>Experiencias</button>
      </div>
      
      {isSobreMim && (
        <SobreMim/>
      )}

      {isHabilidades && (
        <HabilidadesDiv/>
      )}

      {isProjects && (
        <ProjectsDiv/>
      )}

      {isExperiencia && (
        <Experiencias/>
      )}
    </main>
    )
}

export default MainDiv