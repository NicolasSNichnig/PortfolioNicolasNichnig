import DownSVG from "@/public/downSVG"
import RightSVG from "@/public/RightSVG"
import { useState } from "react"

const ListaSkills = () => {
    const [isOpen, setIsOpen] = useState(false)

    function handleClick(){
        setIsOpen(!isOpen)
    }

    return(
    <div className="flex flex-col justify-center items-center w-full">
        <button onClick={handleClick} className={isOpen ? "flex justify-between text-xl md:text-3xl w-full text-center p-2 rounded-[4px] bg-[#006494] transition-colors duration-300 cursor-pointer" : "flex justify-between text-xl md:text-3xl w-full text-center mb-5 bg-[#0c1527]/65 p-2 rounded-[4px] hover:bg-[#006494] transition-colors duration-300 cursor-pointer"}>Tecnologias

            {!isOpen && (
                <RightSVG/>
            )} 
            
            {isOpen && (
                <DownSVG className="animate-fade animate-once animate-ease-out animate-alternate"/>
            )} 
        </button>

        {isOpen && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full rounded-md text-sm md:text-[20px] animate-fade-down animate-once animate-ease-out animate-fill-forwards">
            <div className="flex flex-col items-center text-center p-3 rounded-[12px] bg-[#0c1527]/40 hover:bg-[#0c1527]/60 transition-colors duration-300">
                <img className="size-8 md:size-12 mb-2" src="https://www.svgrepo.com/show/349419/javascript.svg"/>
                <span>Javascript</span>
            </div>
            <div className="flex flex-col items-center text-center p-3 rounded-[12px] bg-[#0c1527]/40 hover:bg-[#0c1527]/60 transition-colors duration-300">
                <img className="size-8 md:size-12 mb-2" src="https://www.svgrepo.com/show/452091/python.svg"/>
                <span>Python</span>
            </div>
            <div className="flex flex-col items-center text-center p-3 rounded-[12px] bg-[#0c1527]/40 hover:bg-[#0c1527]/60 transition-colors duration-300">
                <img className="size-8 md:size-12 mb-2" src="https://www.svgrepo.com/show/353924/java.svg"/>
                <span>Java</span>
            </div>
            <div className="flex flex-col items-center text-center p-3 rounded-[12px] bg-[#0c1527]/40 hover:bg-[#0c1527]/60 transition-colors duration-300">
                <img className="size-8 md:size-12 mb-2" src="https://www.svgrepo.com/show/373641/godot.svg"/>
                <span>Godot</span>
            </div>
            <div className="flex flex-col items-center text-center p-3 rounded-[12px] bg-[#0c1527]/40 hover:bg-[#0c1527]/60 transition-colors duration-300">
                <img className="size-8 md:size-12 mb-2" src="https://www.svgrepo.com/show/374118/tailwind.svg"/>
                <span>Tailwind</span>
            </div>
            <div className="flex flex-col items-center text-center p-3 rounded-[12px] bg-[#0c1527]/40 hover:bg-[#0c1527]/60 transition-colors duration-300">
                <img className="size-8 md:size-12 mb-2" src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"/>
                <span>React</span>
            </div>
            <div className="flex flex-col items-center text-center p-3 rounded-[12px] bg-[#0c1527]/40 hover:bg-[#0c1527]/60 transition-colors duration-300">
                <img className="size-8 md:size-12 mb-2" src="https://www.svgrepo.com/show/368858/nextjs.svg"/>
                <span>Next.JS</span>
            </div>
        </div>
        )}
    </div>
    )
}

export default ListaSkills