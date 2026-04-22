import DownSVG from "@/public/downSVG"
import RightSVG from "@/public/RightSVG"
import { useState } from "react"

const ListaSkills = () => {
    const [isOpen, setIsOpen] = useState(false)

    function handleClick(){
        setIsOpen(!isOpen)
    }

    return(
    <div className="flex flex-col justify-center items-center w-12/12">
        <button onClick={handleClick} className={isOpen ? "mt-5 flex text-3xl w-full text-center mb-5 p-2 rounded-[4px] bg-[#006494] transition-colors duration-300 cursor-pointer" : "mt-5 flex text-3xl w-full text-center mb-5 bg-[#0c1527]/65 p-2 rounded-[4px] hover:bg-[#006494] transition-colors duration-300 cursor-pointer"}>Tecnologias

            {!isOpen && (
                <RightSVG/>
            )} 
            
            {isOpen && (
                <DownSVG className="animate-fade animate-once animate-ease-out animate-alternate"/>
            )} 
        </button>

        {isOpen && (
        <div className="flex flex-col w-full rounded-md text-[20px] animate-fade-down animate-once animate-ease-out animate-fill-forwards">
            <div className="flex flex-row items-center text-center mb-3 rounded-[12px]">
                <img className="size-6 mr-1" src="https://www.svgrepo.com/show/349419/javascript.svg"/>
                <span>Javascript</span>
            </div>
            <div className="flex flex-row items-center mb-3 rounded-[12px]">
                <img className="size-6 mr-1" src="https://www.svgrepo.com/show/452091/python.svg"/>
                <span>Python</span>
            </div>
            <div className="flex flex-row items-center mb-3 rounded-[12px]">
                <img className="size-6 mr-1" src="https://www.svgrepo.com/show/353924/java.svg"/>
                <span>Java</span>
            </div>
            <div className="flex flex-row items-center mb-3 rounded-[12px]">
                <img className="size-6 mr-1" src="https://www.svgrepo.com/show/373641/godot.svg"/>
                <span>Godot</span>
            </div>
            <div className="flex flex-row items-center mb-3 rounded-[12px]">
                <img className="size-6 mr-1" src="https://www.svgrepo.com/show/374118/tailwind.svg"/>
                <span>Tailwind</span>
            </div>
            <div className="flex flex-row items-center mb-3 rounded-[12px]">
                <img className="size-6 mr-1" src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"/>
                <span>React</span>
            </div>
            <div className="flex flex-row items-center mb-3 rounded-[12px]">
                <img className="size-6 mr-1" src="https://www.svgrepo.com/show/368858/nextjs.svg"/>
                <span>Next.JS</span>
            </div>
        </div>
        )}
    </div>
    )
}

export default ListaSkills