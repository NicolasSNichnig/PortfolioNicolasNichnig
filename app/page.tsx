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
    <div className="text-[#e8f1f2] flex flex-1 flex-col items-center justify-center min-h-screen bg-linear-to-br from-[#0a1a2f] via-[#13293d] to-[#006494]">
      <main className="flex flex-1 flex-col min-w-full">
        <div className="border-b border-[#1b98e0]/30 shadow-sm bg-[#13293d]/80 backdrop-blur-md text-base sm:text-sm md:text-xl lg:text-2xl flex flex-wrap md:flex-nowrap sticky top-0 w-full place-content-around pt-3 pb-3 z-10 gap-3 md:gap-2 px-4 md:px-6">
          <button 
            onClick={handleSobreMim} 
            className={`relative p-2 md:p-3 rounded-lg font-medium transition-all duration-300 cursor-pointer overflow-hidden group ${
              isSobreMim 
                ? "bg-linear-to-r from-[#006494] to-[#0084b4] text-white scale-105 shadow-md shadow-[#006494]/30" 
                : "hover:bg-[#006494]/80 bg-[#0c1527]/50 hover:scale-105 hover:shadow-sm hover:shadow-[#006494]/20"
            } flex-1 md:flex-none min-w-[100px]`}
          >
            <span className="relative z-10">Sobre mim</span>
            {!isSobreMim && (
              <span className="absolute inset-0 bg-linear-to-r from-[#006494] to-[#0084b4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
            )}
          </button>
          
          <button 
            onClick={handleHabilidades} 
            className={`relative p-2 md:p-3 rounded-lg font-medium transition-all duration-300 cursor-pointer overflow-hidden group ${
              isHabilidades 
                ? "bg-linear-to-r from-[#006494] to-[#0084b4] text-white scale-105 shadow-md shadow-[#006494]/30" 
                : "hover:bg-[#006494]/80 bg-[#0c1527]/50 hover:scale-105 hover:shadow-sm hover:shadow-[#006494]/20"
            } flex-1 md:flex-none min-w-[100px]`}
          >
            <span className="relative z-10">Habilidades</span>
            {!isHabilidades && (
              <span className="absolute inset-0 bg-linear-to-r from-[#006494] to-[#0084b4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
            )}
          </button>
          
          <button 
            onClick={handleProjects} 
            className={`relative p-2 md:p-3 rounded-lg font-medium transition-all duration-300 cursor-pointer overflow-hidden group ${
              isProjects 
                ? "bg-linear-to-r from-[#006494] to-[#0084b4] text-white scale-105 shadow-md shadow-[#006494]/30" 
                : "hover:bg-[#006494]/80 bg-[#0c1527]/50 hover:scale-105 hover:shadow-sm hover:shadow-[#006494]/20"
            } flex-1 md:flex-none min-w-[100px]`}
          >
            <span className="relative z-10">Projetos</span>
            {!isProjects && (
              <span className="absolute inset-0 bg-linear-to-r from-[#006494] to-[#0084b4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
            )}
          </button>
          
          <button 
            onClick={handleExperiencias} 
            className={`relative p-2 md:p-3 rounded-lg font-medium transition-all duration-300 cursor-pointer overflow-hidden group ${
              isExperiencia 
                ? "bg-linear-to-r from-[#006494] to-[#0084b4] text-white scale-105 shadow-md shadow-[#006494]/30" 
                : "hover:bg-[#006494]/80 bg-[#0c1527]/50 hover:scale-105 hover:shadow-sm hover:shadow-[#006494]/20"
            } flex-1 md:flex-none min-w-[100px]`}
          >
            <span className="relative z-10">Experiências</span>
            {!isExperiencia && (
              <span className="absolute inset-0 bg-linear-to-r from-[#006494] to-[#0084b4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
            )}
          </button>
        </div>

        <div className="m-3 md:m-5 flex flex-col place-self-center items-center justify-center w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 bg-[#13293d]/90 backdrop-blur-sm rounded-2xl shadow-md shadow-black/20 border border-[#1b98e0]/20">     
          {isSobreMim && (
            <div className="w-full">
              <SobreMim/>
            </div>
          )}

          {isHabilidades && (
            <div className="w-full">
              <HabilidadesDiv/>
            </div>
          )}

          {isProjects && (
            <div className="w-full">
              <ProjectsDiv/>
            </div>
          )}

          {isExperiencia && (
            <div className="w-full">
              <Experiencias/>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}