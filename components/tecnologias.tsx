import DownSVG from "@/public/downSVG"
import RightSVG from "@/public/RightSVG"
import { useState } from "react"

const ListaSkills = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeTab, setActiveTab] = useState("frontend")
    
    function handleClick(){
        setIsOpen(!isOpen)
    }

    const frontendSkills = [
        { name: "Next.JS", icon: "https://www.svgrepo.com/show/368858/nextjs.svg" },
        { name: "React", icon: "https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg" },
        { name: "Tailwind", icon: "https://www.svgrepo.com/show/374118/tailwind.svg" },
        { name: "CSS", icon: "https://www.svgrepo.com/show/452185/css-3.svg" },
        { name: "HTML5", icon: "https://www.svgrepo.com/show/452228/html-5.svg" },
    ]
    
    const backendSkills = [
        { name: "Javascript", icon: "https://www.svgrepo.com/show/349419/javascript.svg" },
        { name: "Python", icon: "https://www.svgrepo.com/show/452091/python.svg" },
        { name: "Java", icon: "https://www.svgrepo.com/show/353924/java.svg" },
        { name: "GDScript", icon: "https://www.svgrepo.com/show/373641/godot.svg" }
    ]

    const toolsSkills = [
        { name: "Godot", icon: "https://www.svgrepo.com/show/373641/godot.svg" },
        { name: "Git", icon: "https://www.svgrepo.com/show/452210/git.svg" },
        { name: "GitHub", icon: "https://www.svgrepo.com/show/475654/github-color.svg" },
        { name: "VS Code", icon: "https://www.svgrepo.com/show/452129/vs-code.svg" },
        { name: "Figma", icon: "https://www.svgrepo.com/show/452202/figma.svg"},
        { name: "Docker", icon: "https://www.svgrepo.com/show/448221/docker.svg" },
        { name: "Postman", icon: "https://www.svgrepo.com/show/354202/postman-icon.svg" }
    ]

    return(
    <div className="flex flex-col justify-center items-center w-full">
        <button onClick={handleClick} className={isOpen ? "flex justify-between items-center text-xl md:text-3xl w-full text-center p-2 rounded-[4px] bg-[#006494] transition-colors duration-300 cursor-pointer" : "flex justify-between items-center text-xl md:text-3xl w-full text-center mb-5 bg-[#0c1527]/65 p-2 rounded-[4px] hover:bg-[#006494] transition-colors duration-300 cursor-pointer"}>
            <span>Tecnologias</span>
            
            <div className="flex-1"></div>
            
            {!isOpen && (
                <RightSVG/>
            )} 
            
            {isOpen && (
                <DownSVG className="animate-fade animate-once animate-ease-out animate-alternate"/>
            )} 
        </button>

        {isOpen && (
        <div className="w-full mt-4 animate-fade-down animate-once animate-ease-out animate-fill-forwards">
            {/* Abas */}
            <div className="flex gap-2 mb-4 border-b border-[#1b98e0]/30">
                <button
                    onClick={() => setActiveTab("frontend")}
                    className={`px-4 py-2 text-sm md:text-base font-medium transition-all duration-300 rounded-t-lg ${
                        activeTab === "frontend"
                            ? "bg-[#006494] text-white"
                            : "bg-[#0c1527]/40 hover:bg-[#0c1527]/60 text-[#e8f1f2]/70 hover:text-white"
                    }`}
                >
                    Front End
                </button>
                <button
                    onClick={() => setActiveTab("backend")}
                    className={`px-4 py-2 text-sm md:text-base font-medium transition-all duration-300 rounded-t-lg ${
                        activeTab === "backend"
                            ? "bg-[#006494] text-white"
                            : "bg-[#0c1527]/40 hover:bg-[#0c1527]/60 text-[#e8f1f2]/70 hover:text-white"
                    }`}
                >
                    Back End
                </button>
                <button
                    onClick={() => setActiveTab("tools")}
                    className={`px-4 py-2 text-sm md:text-base font-medium transition-all duration-300 rounded-t-lg ${
                        activeTab === "tools"
                            ? "bg-[#006494] text-white"
                            : "bg-[#0c1527]/40 hover:bg-[#0c1527]/60 text-[#e8f1f2]/70 hover:text-white"
                    }`}
                >
                    Ferramentas
                </button>
            </div>

            {/* Conteúdo das abas */}
            <div className="grid p-2 md:p-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full rounded-md text-sm md:text-[20px]">
                {activeTab === "frontend" && frontendSkills.map((skill, index) => (
                    <div key={index} className="hover:scale-105 flex flex-col items-center text-center p-3 rounded-[12px] bg-[#0c1527]/40 hover:bg-[#0c1527]/60 transition-all duration-300">
                        <img className="size-8 md:size-12 mb-2" src={skill.icon} alt={skill.name}/>
                        <span>{skill.name}</span>
                    </div>
                ))}
                
                {activeTab === "backend" && backendSkills.map((skill, index) => (
                    <div key={index} className="hover:scale-105 flex flex-col items-center text-center p-3 rounded-[12px] bg-[#0c1527]/40 hover:bg-[#0c1527]/60 transition-all duration-300">
                        <img className="size-8 md:size-12 mb-2" src={skill.icon} alt={skill.name}/>
                        <span>{skill.name}</span>
                    </div>
                ))}

                {activeTab === "tools" && toolsSkills.map((skill, index) => (
                    <div key={index} className="hover:scale-105 flex flex-col items-center text-center p-3 rounded-[12px] bg-[#0c1527]/40 hover:bg-[#0c1527]/60 transition-all duration-300">
                        <img className="size-8 md:size-12 mb-2" src={skill.icon} alt={skill.name}/>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
        )}
    </div>
    )
}

export default ListaSkills