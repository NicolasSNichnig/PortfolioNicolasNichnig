import { useState } from "react"

import DownSVG from "../public/downSVG.jsx"
import RightSVG from "../public/RightSVG.jsx"

const LinguagensLista = () => {
    const [isOpen, setIsOpen] = useState(false)

    function handleClick(){
        setIsOpen(!isOpen)
    }

    return(
        <div className="flex flex-col justify-center items-center w-12/12">
        <button onClick={handleClick} className={isOpen ? "flex justify-between text-3xl w-full text-center mb-5 p-2 rounded-[4px] bg-[#006494] transition-colors duration-300 cursor-pointer" : "flex justify-between text-3xl w-full text-center mb-5 bg-[#0c1527]/65 p-2 rounded-[4px] hover:bg-[#006494] transition-colors duration-300 cursor-pointer"}>Linguas
            {!isOpen && (
                <RightSVG/>
            )} 
            
            {isOpen && (
                <DownSVG className="animate-fade animate-once animate-ease-out animate-alternate"/>
            )} 
        </button>
        {isOpen && (
        <div className="flex flex-col mb-5 text-[20px] w-full animate-fade-down animate-once animate-ease-out animate-fill-forwards">
            <span className="rounded-[12px]">Português - Nativo</span>
            <span className="mt-1 rounded-[12px]">Inglês - C1</span>
        </div>
        )}
        </div>
    )
}

export default LinguagensLista