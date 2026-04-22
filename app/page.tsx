'use client'
import { useState } from "react";

import HabilidadesDiv from "../components/habilidades.jsx";
import ProjectsDiv from "../components/projects.jsx";
import SobreMim from "../components/SobreMim.jsx"
import Experiencias from "../components/experiencias.jsx"

export default function Home() {
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
    <div className="text-[#e8f1f2]  flex flex-1 flex-col items-center justify-center bg-linear-to-br from-[#247ba0] via-[#1b98e0] to-[#006494]">
      <main className="flex flex-1 flex-col min-w-full">
        <div className="border-b border-[#13293d] shadow-md bg-[#13293d] text-3xl flex sticky top-0 w-full place-content-around pt-2 pb-2 z-10">
          <button onClick={handleSobreMim} className={`p-2 rounded-[4px] ${isSobreMim ? "bg-[#006494]" : "transition-colors duration-300 cursor-pointer hover:bg-[#006494] bg-[#0c1527]/65"}`}>Sobre mim</button>
          <button onClick={handleHabilidades} className={`p-2 rounded-[4px] ${isHabilidades ? "bg-[#006494]" : "transition-colors duration-300 cursor-pointer hover:bg-[#006494] bg-[#0c1527]/65"}`}>Habilidades</button>
          <button onClick={handleProjects} className={`p-2 rounded-[4px] ${isProjects ? "bg-[#006494]" : "transition-colors duration-300 cursor-pointer hover:bg-[#006494] bg-[#0c1527]/65"}`}>Projetos</button>
          <button onClick={handleExperiencias} className={`p-2 rounded-[4px] ${isExperiencia ? "bg-[#006494]" : "transition-colors duration-300 cursor-pointer hover:bg-[#006494] bg-[#0c1527]/65"}`}>Experiencias</button>
        </div>

        <div className="m-5 flex flex-col place-self-center items-center justify-center w-7/12 bg-[#13293d] rounded-[2%] shadow-2xl shadow-black">     
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
        </div>
      </main>
    </div>
  );
}
